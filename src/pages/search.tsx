import React, { useEffect, useState } from "react";
import { Typography, Row, Col, List } from "antd";

import { useIntl, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";
import ProductListItem from "@/components/ProductListItem";
import FilterBar from "@/components/FilterBar";
import { useResponsive } from "@umijs/hooks";
import { useQuery, useLazyQuery } from "@apollo/react-hooks";
import { searchQuery, searchQueryVariables } from "@/queries/types/searchQuery";
import { SEARCH_PAGE_QUERY } from "@/queries/search";
import { ProductOrderField, OrderDirection } from "@/globalTypes";

const SearchPage = () => {
  const intl = useIntl();
  const responsive = useResponsive();
  const location = useLocation();
  const [sort, setSort] = useState({
    field: ProductOrderField.PRICE,
    direction: OrderDirection.ASC,
  });
  const query = location.query?.q || null;
  const [performSearch, { loading: fetching, data, error }] = useLazyQuery<
    searchQuery,
    searchQueryVariables
  >(SEARCH_PAGE_QUERY);
  useEffect(() => {
    if (query) {
      performSearch({
        variables: {
          query,
          sort,
          count: 20,
        },
      });
    }
  }, [query, sort]);

  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "search.heading" })}
          </Typography.Title>
          {query && (
            <Typography.Title
              id="page-subheading"
              className="center-text"
              level={3}
            >
              <i>"{query}"</i>
            </Typography.Title>
          )}
          <FilterBar
            hideFilters={responsive.lg}
            onSortChange={val => setSort(val)}
          />
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
              <Typography.Title level={3}>
                {intl.formatMessage({ id: "search.filters" })}...
              </Typography.Title>
            </Col>

            <Col span={18} xs={24} sm={24} md={24} lg={18} xl={18} xxl={16}>
              <List
                dataSource={query ? data?.products?.edges : []}
                loading={fetching}
                renderItem={productEdge => {
                  const product = productEdge.node;
                  return (
                    <List.Item className="product-list-items" key={product.id}>
                      <div className="full-width">
                        <ProductListItem product={product} />
                      </div>
                    </List.Item>
                  );
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

SearchPage.title = "search.title";
export default SearchPage;
