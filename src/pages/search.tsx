import React from "react";
import { Typography, Row, Col, List, Select } from "antd";
import { useIntl, useLocation, Link } from "umi";
import VSpacing from "@/components/VSpacing";
import { sampleProduct } from "@/sampleData";
import RichTextContent from "@/components/RichTextContent";
import { formatPrice } from "@/utils/utils";

const SearchPage = () => {
  const intl = useIntl();
  const location = useLocation();
  return (
    <div>
      <VSpacing height={48} />
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
                renderItem={item => {
                  const currency = item.pricing?.priceRange?.start?.gross
                    .currency as string;
                  const minPrice = item.pricing?.priceRange?.start?.gross
                    .amount as number;
                  const maxPrice = item.pricing?.priceRange?.stop?.gross
                    .amount as number;
                  return (
                    <List.Item key={item.id}>
                      <Link to={`/products/${item.id}`} className="unset-color">
                        <Row gutter={24}>
                          <Col span={6}>
                            <img
                              src={item.thumbnail.url}
                              className="full-width"
                            />
                          </Col>
                          <Col span={18}>
                            <div>
                              <Typography.Title level={3}>
                                {item.name}
                              </Typography.Title>
                            </div>
                            <div>
                              <RichTextContent
                                contentJson={item.descriptionJson}
                                lines={3}
                              />
                            </div>
                            <div>
                              <Typography.Title level={4}>
                                {formatPrice(currency, minPrice, maxPrice)}
                              </Typography.Title>
                            </div>
                          </Col>
                        </Row>
                      </Link>
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
