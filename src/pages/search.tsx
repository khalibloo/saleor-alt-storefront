import React from "react";
import { Typography, Row, Col, List } from "antd";

import { useIntl, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";
import ProductListItem from "@/components/ProductListItem";
import { sampleProduct } from "@/sampleData";
import FilterBar from "@/components/FilterBar";
import { useResponsive } from "@umijs/hooks";

const SearchPage = () => {
  const intl = useIntl();
  const responsive = useResponsive();
  const location = useLocation();

  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "search.heading" })}
          </Typography.Title>
          <Typography.Title className="center-text" level={3}>
            <i>"{location.query?.query}"</i>
          </Typography.Title>
          <FilterBar hideFilters={responsive.lg} />
          <Row gutter={24}>
            <Col span={6} xs={0} sm={0} md={0} lg={6} xl={6} xxl={8}>
              <Typography.Title level={3}>
                {intl.formatMessage({ id: "search.filters" })}...
              </Typography.Title>
            </Col>

            <Col span={18} xs={24} sm={24} md={24} lg={18} xl={18} xxl={16}>
              <List
                dataSource={[sampleProduct, sampleProduct, sampleProduct]}
                renderItem={product => {
                  return (
                    <List.Item key={product.id}>
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
