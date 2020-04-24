import React from "react";
import { Typography, Row, Col, List, Select } from "antd";
import { useIntl, useLocation, Link } from "umi";
import VSpacing from "@/components/VSpacing";
import ProductListItem from "@/components/ProductListItem";
import { sampleProduct } from "@/sampleData";

const SearchPage = () => {
  const intl = useIntl();
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
          <Row justify="end" gutter={16} align="middle">
            <Col>
              <Typography.Text>
                {intl.formatMessage({ id: "search.sortby" })}
              </Typography.Text>
            </Col>
            <Col span={3}>
              <Select className="full-width" defaultValue="RELEVANCE">
                <Select.Option value="RELEVANCE">
                  {intl.formatMessage({ id: "search.sort.relevance" })}
                </Select.Option>
                <Select.Option value="PRICE_ASC">
                  {intl.formatMessage({ id: "search.sort.price.lowtohigh" })}
                </Select.Option>
                <Select.Option value="PRICE_DESC">
                  {intl.formatMessage({ id: "search.sort.price.hightolow" })}
                </Select.Option>
                <Select.Option value="DATE_DESC">
                  {intl.formatMessage({ id: "search.sort.newest" })}
                </Select.Option>
              </Select>
            </Col>
          </Row>
          <Row gutter={24}>
            <Col span={6}>
              <Typography.Title level={3}>
                {intl.formatMessage({ id: "search.filters" })}...
              </Typography.Title>
            </Col>

            <Col span={18}>
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
