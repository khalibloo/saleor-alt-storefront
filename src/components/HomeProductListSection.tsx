import React, { useEffect } from "react";
import { Typography, Row, Col, List } from "antd";
import { Link } from "umi";
import { useLazyQuery } from "@apollo/client";
import { useResponsive } from "@umijs/hooks";
import {
  getCategoryName,
  getCollectionName,
  getLangCode,
  getScreenSize,
} from "@/utils/utils";

import _ from "lodash";
import { HomeProductListConfig } from ".altrc";
import {
  featuredCategoryProducts,
  featuredCategoryProducts_category_products_edges,
} from "@/queries/types/featuredCategoryProducts";
import { featuredCollectionProducts } from "@/queries/types/featuredCollectionProducts";
import { FEATURED_CATEGORY_PRODUCTS_QUERY } from "@/queries/featuredCategoryProducts";
import { FEATURED_COLLECTION_PRODUCTS_QUERY } from "@/queries/featuredCollectionProducts";
import ProductCard from "./ProductCard";
import config from "@/config";

const HomeProductListSection: React.FC<HomeProductListConfig> = ({
  categorySlug,
  collectionSlug,
  firstNProducts,
  rows,
  showTitle,
  shuffle,
  title,
  googleAnalyticsPromoData,
}) => {
  const [
    fetchCategory,
    { loading: catFetching, error: catError, data: catData },
  ] = useLazyQuery<featuredCategoryProducts>(FEATURED_CATEGORY_PRODUCTS_QUERY, {
    variables: {
      lang: getLangCode(),
      slug: categorySlug,
      first: firstNProducts,
    },
  });
  const [
    fetchCollection,
    { loading: collFetching, error: collError, data: collData },
  ] = useLazyQuery<featuredCollectionProducts>(
    FEATURED_COLLECTION_PRODUCTS_QUERY,
    {
      variables: {
        slug: collectionSlug,
        first: firstNProducts,
        lang: getLangCode(),
      },
    },
  );
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);

  useEffect(() => {
    if (categorySlug) {
      fetchCategory();
    } else if (collectionSlug) {
      fetchCollection();
    }
  }, []);

  // Google Ecommerce - track promo view
  useEffect(() => {
    if (config.gtmEnabled && googleAnalyticsPromoData) {
      window.dataLayer.push({
        event: "view_promotion",
        ecommerce: {
          ...googleAnalyticsPromoData,
        },
      });
    }
  }, []);
  // Google Ecommerce - track promo click
  const trackPromoClick = () => {
    if (config.gtmEnabled && googleAnalyticsPromoData) {
      window.dataLayer.push({
        event: "select_promotion",
        ecommerce: {
          ...googleAnalyticsPromoData,
        },
      });
    }
  };

  if (!categorySlug && !collectionSlug) {
    // improperly configured section
    return null;
  }

  let name: string | undefined;
  let products: featuredCategoryProducts_category_products_edges[] | undefined;
  let titleUrl;
  if (categorySlug) {
    name = getCategoryName(catData?.category) || "";
    products = catData?.category?.products?.edges;
    const catID = catData?.category?.id;
    titleUrl = catID ? `/categories/${catID}` : "#";
  } else if (collectionSlug) {
    name = getCollectionName(collData?.collection) || "";
    products = collData?.collection?.products?.edges;
    const collID = collData?.collection?.id;
    titleUrl = collID ? `/collections/${collID}` : "#";
  }
  const titleText = title || name;

  const rowSizes = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 6,
  };
  if (products && products.length > 0) {
    if (shuffle) {
      products = _.shuffle(products);
    }
    products = products.slice(
      0,
      Math.min(rows[screenSize] * rowSizes[screenSize], products.length),
    );
  }
  if (!catFetching && !collFetching && (!products || products.length === 0)) {
    // empty collection/category
    return null;
  }

  return (
    <Row justify="center">
      <Col span={22} lg={20}>
        {showTitle && titleText && (
          <Link to={titleUrl} onClick={trackPromoClick}>
            <Typography.Title className="text-center" level={1}>
              {titleText}
            </Typography.Title>
          </Link>
        )}
        <div>
          <List
            dataSource={products}
            grid={{ ...rowSizes, gutter: 24 }}
            loading={catFetching || collFetching}
            renderItem={(edge, i) => {
              const product = edge.node;
              return (
                <List.Item
                  className="product-list-items"
                  id={`product-list-item-${i}`}
                  key={product.id}
                >
                  <div className="w-full">
                    <Row justify="center">
                      <Col span={24} style={{ maxWidth: 240 }}>
                        <ProductCard
                          className="product-grid-cards"
                          product={product}
                          listName="Featured Products"
                          listIndex={i}
                          onClick={trackPromoClick}
                        />
                      </Col>
                    </Row>
                  </div>
                </List.Item>
              );
            }}
          />
        </div>
      </Col>
    </Row>
  );
};

export default HomeProductListSection;
