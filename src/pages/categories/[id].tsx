import React from "react";
import { Typography, Row, Col, List } from "antd";
import { Helmet } from "react-helmet";
import { useIntl, useParams } from "umi";
import clx from "classnames";

import VSpacing from "@/components/VSpacing";
import ProductCard from "@/components/ProductCard";

import styles from "./id.less";
import FilterBar from "@/components/FilterBar";
import { useResponsive } from "@umijs/hooks";
import { formatTitle } from "@/utils/utils";
import { useQuery } from "@apollo/react-hooks";
import {
  categoryDetailQuery,
  categoryDetailQueryVariables,
} from "@/queries/types/categoryDetailQuery";
import { CATEGORY_DETAIL_PAGE_QUERY } from "@/queries/categoryDetail";
import SkeletonDiv from "@/components/SkeletonDiv";

const CategoryDetailPage: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams();
  const { loading, error, data } = useQuery<
    categoryDetailQuery,
    categoryDetailQueryVariables
  >(CATEGORY_DETAIL_PAGE_QUERY, {
    variables: {
      category: id as string,
      categoryList: [id as string],
      productCount: 50,
    },
  });
  const responsive = useResponsive();
  return (
    <div>
      {data?.category?.name && (
        <Helmet>
          <title>{formatTitle(data?.category?.name)}</title>
        </Helmet>
      )}
      <div className={styles.bannerContainer}>
        <SkeletonDiv active loading={loading}>
          <img
            id="banner-img"
            className={clx("full-width full-height", styles.bannerImg)}
            src={data?.category?.backgroundImage?.url}
            alt={data?.category?.backgroundImage?.alt || ""}
          />
        </SkeletonDiv>
        {data?.category?.name && (
          <Row className="full-height" justify="center" align="middle">
            <Col className={styles.bannerTitleBG}>
              <Typography.Title
                id="title"
                className="center-text no-margin inverse-text"
                level={1}
              >
                {data?.category?.name}
              </Typography.Title>
            </Col>
          </Row>
        )}
      </div>
      <Row justify="center">
        <Col span={22}>
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
              <VSpacing height={24} />
              <Typography.Title level={3}>
                {intl.formatMessage({ id: "search.filters" })}...
              </Typography.Title>
            </Col>
            <Col span={18} xs={24} sm={24} md={24} lg={18} xl={18} xxl={16}>
              <FilterBar hideFilters={responsive.lg} />
              <List
                dataSource={data?.products?.edges}
                grid={{ gutter: 24, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 6 }}
                loading={loading}
                renderItem={edge => {
                  const product = edge.node;
                  return (
                    <List.Item className="product-list-items" key={product.id}>
                      <div className="full-width">
                        <Row justify="center">
                          <Col span={24} style={{ maxWidth: 240 }}>
                            <ProductCard product={product} />
                          </Col>
                        </Row>
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

export default CategoryDetailPage;
