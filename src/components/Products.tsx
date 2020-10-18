import React, { useEffect } from "react";
import {
  Typography,
  Row,
  Col,
  List,
  Drawer,
  Collapse,
  Tree,
  Checkbox,
  Select,
  Slider,
  Input,
  Skeleton,
} from "antd";
import { useIntl, useLocation, history } from "umi";
import InfiniteScroll from "react-infinite-scroller";

import VSpacing from "@/components/VSpacing";
import ProductCard from "@/components/ProductCard";
import FilterBar from "@/components/FilterBar";

import { useResponsive, useBoolean } from "@umijs/hooks";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  ProductsQuery,
  ProductsQueryVariables,
} from "@/queries/types/ProductsQuery";
import { PRODUCTS_QUERY } from "@/queries/products";
import { ProductOrderField, OrderDirection, ProductOrder } from "@/globalTypes";
import SkeletonDiv from "./SkeletonDiv";
import { categoryTreeQuery } from "@/queries/types/categoryTreeQuery";
import {
  categorySubtreeQuery,
  categorySubtreeQueryVariables,
} from "@/queries/types/categorySubtreeQuery";
import { CATEGORY_SUBTREE_QUERY } from "@/queries/categorySubtree";
import { CATEGORY_TREE_QUERY } from "@/queries/categoryTree";
import { COLLECTIONS_QUERY } from "@/queries/collections";
import { collectionsQuery } from "@/queries/types/collectionsQuery";
import _ from "lodash";
import ProductListItem from "./ProductListItem";
import Loader from "./Loader";

interface Props {
  showCategoryFilter?: boolean;
  showCollectionFilter?: boolean;
  categoryID?: string;
  collectionID?: string;
  view?: "grid" | "list";
  listName: string;
}
const Products: React.FC<Props> = ({
  showCategoryFilter,
  showCollectionFilter,
  categoryID,
  collectionID,
  view = "grid",
  listName,
}) => {
  const intl = useIntl();
  const sortMap: { [key: string]: ProductOrder } = {
    RELEVANCE: {
      field: ProductOrderField.NAME,
      direction: OrderDirection.ASC,
    },
    PRICE_ASC: {
      field: ProductOrderField.MINIMAL_PRICE,
      direction: OrderDirection.ASC,
    },
    PRICE_DESC: {
      field: ProductOrderField.MINIMAL_PRICE,
      direction: OrderDirection.DESC,
    },
    DATE_DESC: {
      field: ProductOrderField.DATE,
      direction: OrderDirection.DESC,
    },
  };
  const { pathname, query } = useLocation();
  const {
    q: search,
    priceGte,
    priceLte,
    sortBy = "RELEVANCE",
    cats,
    colls,
    attrs,
  } = query;

  // categories list
  let categoryList: string[] = categoryID ? [categoryID] : [];
  try {
    const list = JSON.parse(cats);
    if (Array.isArray(list) && list.length > 0) {
      categoryList = list;
    }
  } catch {}

  // collections list
  let collectionList: string[] = collectionID ? [collectionID] : [];
  try {
    const list = JSON.parse(colls);
    if (Array.isArray(list) && list.length > 0) {
      collectionList = list;
    }
  } catch {}

  // attributes list
  let attributes: { slug: string; values: string[] }[] = [] as any[];
  try {
    attributes = JSON.parse(attrs);
  } catch {}

  // fetch products
  const fetchProductsVars = {
    categoryID,
    collectionID,
    categoryList,
    collectionList,
    search,
    priceGte,
    priceLte,
    attributes,
    sortBy: sortMap[sortBy],
    prodsPerPage: 50,
    cursor: undefined,
  };
  const { loading: fetching, error, data, fetchMore } = useQuery<
    ProductsQuery,
    ProductsQueryVariables
  >(PRODUCTS_QUERY, {
    variables: fetchProductsVars,
  });

  // categories filter data
  const [
    fetchCatTree,
    { loading: catTreeFetching, error: catTreeError, data: catTreeData },
  ] = useLazyQuery<categoryTreeQuery>(CATEGORY_TREE_QUERY);
  const [
    fetchCatSubtree,
    {
      loading: catSubtreeFetching,
      error: catSubtreeError,
      data: catSubtreeData,
    },
  ] = useLazyQuery<categorySubtreeQuery, categorySubtreeQueryVariables>(
    CATEGORY_SUBTREE_QUERY,
    { variables: { categoryId: categoryID as string } },
  );

  // collections filter data
  const [
    fetchCollections,
    {
      loading: collectionsFetching,
      error: collectionsError,
      data: collectionsData,
    },
  ] = useLazyQuery<collectionsQuery>(COLLECTIONS_QUERY);

  const {
    state: filterDrawerOpen,
    setTrue: openFilterDrawer,
    setFalse: closeFilterDrawer,
  } = useBoolean();
  const responsive = useResponsive();

  useEffect(() => {
    // fetch categories tree
    if (showCategoryFilter) {
      if (categoryID) {
        fetchCatSubtree();
      } else {
        fetchCatTree();
      }
    }
  }, []);

  useEffect(() => {
    // fetch collections
    if (showCollectionFilter) {
      fetchCollections();
    }
  }, []);

  useEffect(() => {
    // Google Ecommerce
    if (!Boolean(data?.products?.edges.length)) {
      // no products fetched
      return;
    }
    const items = data?.products?.edges.map((edge, i) => {
      const p = edge.node;
      return {
        item_name: p.name, // Name or ID is required.
        item_id: p.id,
        price: p.pricing?.priceRange?.start?.gross.amount.toString(),
        item_category: p.category?.name,
        item_list_name: listName,
        item_list_id: categoryID || collectionID,
        index: i,
      };
    });
    window.dataLayer.push({
      event: "view_item_list",
      ecommerce: {
        items,
      },
    });
  }, [data?.products?.edges]);

  // price slider data
  const minPrice =
    data?.minPrice?.edges[0]?.node.pricing?.priceRange?.start?.gross.amount ||
    0;
  const maxPrice =
    data?.maxPrice?.edges[0]?.node.pricing?.priceRange?.start?.gross.amount;

  // transform categories tree to match ant Tree component data structure
  const mapCatTree = catChildren =>
    catChildren.edges.map(catEdge => ({
      title: catEdge.node.name,
      key: catEdge.node.id,
      children: mapCatTree(catEdge.node.children),
    }));
  const categoryTreeData = (categoryID
    ? catSubtreeData?.category?.children
    : catTreeData?.categories
  )?.edges.map(catEdge => ({
    title: catEdge.node.name,
    key: catEdge.node.id,
    children: mapCatTree(catEdge.node.children),
  }));

  const filters = (
    <>
      <Collapse
        defaultActiveKey={["basic", "categories", "collections", "attributes"]}
        expandIconPosition="right"
      >
        <Collapse.Panel id="basic-panel" header="Basic" key="basic">
          <div>
            <Input.Search
              id="filters-search-fld"
              allowClear
              onChange={e =>
                history.push({
                  pathname,
                  query: { ...query, q: e.target.value },
                })
              }
              placeholder="Filter by name..."
              value={search}
            />
          </div>
          <VSpacing height={16} />
          <SkeletonDiv
            active
            loading={fetching && maxPrice == null}
            style={{ height: 32 }}
          >
            <div>
              <label>Price Range</label>
              <Slider
                id="filters-price-sldr"
                range
                defaultValue={[priceGte ?? minPrice, priceLte ?? maxPrice]}
                onAfterChange={value =>
                  history.push({
                    pathname,
                    query: { ...query, priceGte: value[0], priceLte: value[1] },
                  })
                }
                min={minPrice}
                max={maxPrice}
                step={0.01}
              />
            </div>
          </SkeletonDiv>
        </Collapse.Panel>
        {showCategoryFilter &&
          (categoryTreeData || catTreeFetching || catSubtreeFetching) && (
            <Collapse.Panel
              id="cats-panel"
              header="Categories"
              key="categories"
            >
              <Skeleton
                active
                loading={catTreeFetching || catSubtreeFetching}
                avatar={false}
                title={false}
                paragraph={{ rows: 10 }}
              >
                <Tree
                  className="cats-tree"
                  checkable
                  autoExpandParent
                  treeData={categoryTreeData}
                  checkedKeys={categoryList}
                  onCheck={newSelection =>
                    history.push({
                      pathname,
                      query: { ...query, cats: JSON.stringify(newSelection) },
                    })
                  }
                  selectable={false}
                />
              </Skeleton>
            </Collapse.Panel>
          )}
        {showCollectionFilter && (collectionsData || collectionsFetching) && (
          <Collapse.Panel
            id="colls-panel"
            header="Collections"
            key="collections"
          >
            <Skeleton
              active
              loading={collectionsFetching}
              avatar={false}
              title={false}
              paragraph={{ rows: 10 }}
            >
              {collectionsData?.collections?.edges.map(collEdge => (
                <div key={collEdge.node.id}>
                  <Checkbox
                    id={`colls-checkbox-${collEdge.node.slug}`}
                    checked={collectionList.includes(collEdge.node.id)}
                    onChange={e => {
                      const newSelection = [...collectionList];
                      if (e.target.checked) {
                        if (!newSelection.includes(collEdge.node.id)) {
                          newSelection.push(collEdge.node.id);
                        }
                      } else {
                        _.remove(
                          newSelection,
                          item => item === collEdge.node.id,
                        );
                      }
                      history.push({
                        pathname,
                        query: {
                          ...query,
                          colls: JSON.stringify(newSelection),
                        },
                      });
                    }}
                  >
                    {collEdge.node.name}
                  </Checkbox>
                </div>
              ))}
            </Skeleton>
          </Collapse.Panel>
        )}
        <Collapse.Panel id="attrs-panel" header="Attributes" key="attributes">
          {data?.attributes?.edges.map(attrEdge => {
            const attr = attrEdge.node;
            return (
              <div key={attr.id}>
                <label className="attrs-labels">{attr.name}</label>
                <Select
                  id={`attr-select-${attr.slug}`}
                  allowClear
                  autoClearSearchValue
                  className="full-width"
                  mode="multiple"
                  showArrow
                  onChange={(values, m) => {
                    const newAttrs = [...attributes];
                    const entry = {
                      slug: attr.slug as string,
                      values: values as string[],
                    };
                    const index = newAttrs.findIndex(a => a.slug === attr.slug);
                    if (index === -1) {
                      newAttrs.push(entry);
                    } else {
                      if (values.length > 0) {
                        newAttrs[index] = entry;
                      } else {
                        _.remove(newAttrs, a => a.slug === attr.slug);
                      }
                    }
                    history.push({
                      pathname,
                      query: {
                        ...query,
                        attrs: JSON.stringify(newAttrs),
                      },
                    });
                  }}
                >
                  {attr.values?.map(val => {
                    if (!val) {
                      return null;
                    }
                    return (
                      <Select.Option
                        id={`attrs-${attr.slug}-${val.slug}`}
                        key={val.id}
                        value={val.slug as string}
                      >
                        {val.name}
                      </Select.Option>
                    );
                  })}
                </Select>
                <VSpacing height={16} />
              </div>
            );
          })}
        </Collapse.Panel>
      </Collapse>
    </>
  );
  return (
    <>
      <Drawer
        title={intl.formatMessage({ id: "search.filters" })}
        visible={filterDrawerOpen}
        onClose={closeFilterDrawer}
        placement="left"
        width={responsive.md ? "40%" : "60%"}
      >
        {filters}
      </Drawer>
      <Row justify="center">
        <Col span={22}>
          <Row gutter={24} align="bottom">
            <Col span={6} xs={0} sm={0} md={0} lg={6} xl={6} xxl={8}>
              <VSpacing height={24} />
              <Typography.Title level={4}>
                {intl.formatMessage({ id: "search.filters" })}
              </Typography.Title>
            </Col>
            <Col span={18} xs={24} sm={24} md={24} lg={18} xl={18} xxl={16}>
              <FilterBar
                id="sort-select"
                hideFilters={responsive.lg}
                onSortChange={val =>
                  history.push({ pathname, query: { ...query, sortBy: val } })
                }
                value={sortBy}
                onOpenFilterDrawer={openFilterDrawer}
              />
            </Col>
          </Row>
          <Row gutter={24}>
            <Col
              id="filters-col"
              span={6}
              xs={0}
              sm={0}
              md={0}
              lg={6}
              xl={6}
              xxl={8}
            >
              {filters}
            </Col>
            <Col span={18} xs={24} sm={24} md={24} lg={18} xl={18} xxl={16}>
              <InfiniteScroll
                initialLoad={false}
                pageStart={0}
                loadMore={() => {
                  fetchMore({
                    variables: {
                      ...fetchProductsVars,
                      cursor: _.last(data?.products?.edges)?.cursor,
                    },
                    updateQuery: (prev: ProductsQuery, { fetchMoreResult }) => {
                      if (!fetchMoreResult) return prev;
                      const prevProds = prev.products?.edges;
                      return {
                        ...fetchMoreResult,
                        products: {
                          ...fetchMoreResult.products,
                          edges: [
                            ...(prevProds || []),
                            ...(fetchMoreResult.products?.edges || []),
                          ],
                        },
                      };
                    },
                  });
                }}
                hasMore={!fetching && data?.products?.pageInfo.hasNextPage}
                useWindow
              >
                <List
                  dataSource={data?.products?.edges}
                  grid={
                    view === "grid"
                      ? {
                          gutter: 24,
                          xs: 1,
                          sm: 2,
                          md: 3,
                          lg: 3,
                          xl: 4,
                          xxl: 6,
                        }
                      : undefined
                  }
                  loading={fetching}
                  renderItem={(edge, i) => {
                    const product = edge.node;
                    return (
                      <List.Item
                        className="product-list-items"
                        id={`product-list-item-${i}`}
                        key={product.id}
                      >
                        <div className="full-width">
                          {view === "grid" ? (
                            <Row justify="center">
                              <Col span={24} style={{ maxWidth: 240 }}>
                                <ProductCard
                                  className="product-grid-cards"
                                  product={product}
                                />
                              </Col>
                            </Row>
                          ) : (
                            <ProductListItem
                              className="product-list-cards"
                              product={product}
                            />
                          )}
                        </div>
                      </List.Item>
                    );
                  }}
                >
                  {fetching && data?.products?.pageInfo.hasNextPage && (
                    <Loader />
                  )}
                </List>
              </InfiniteScroll>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Products;
