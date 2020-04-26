import React from "react";
import { Typography, Row, Col, List, Select, Button, Drawer } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import { useIntl, useLocation, Link } from "umi";
import VSpacing from "@/components/VSpacing";
import ProductListItem from "@/components/ProductListItem";
import { sampleProduct } from "@/sampleData";
import { useBoolean, useResponsive } from "@umijs/hooks";

const SearchPage = () => {
  const intl = useIntl();
  const location = useLocation();
  const responsive = useResponsive();
  const {
    state: filterDrawerOpen,
    setTrue: openFilterDrawer,
    setFalse: closeFilterDrawer,
  } = useBoolean();
  return (
    <div>
      <VSpacing height={24} />
      <Drawer
        title={intl.formatMessage({ id: "search.filters" })}
        visible={filterDrawerOpen}
        onClose={closeFilterDrawer}
        placement="left"
        width={responsive.md ? "40%" : "60%"}
      >
        {intl.formatMessage({ id: "search.filters" })}...
      </Drawer>
      <Row justify="center">
        <Col span={22}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "search.heading" })}
          </Typography.Title>
          <Typography.Title className="center-text" level={3}>
            <i>"{location.query?.query}"</i>
          </Typography.Title>
          <Row justify="space-between" align="middle">
            <Col>
              <Button onClick={openFilterDrawer}>
                <FilterOutlined />
              </Button>
            </Col>
            <Col span={18}>
              <Row justify="end" gutter={16} align="middle">
                <Col>
                  <Typography.Text>
                    {intl.formatMessage({ id: "search.sortby" })}
                  </Typography.Text>
                </Col>
                <Col span={3} xs={16} sm={10} md={8} lg={6} xl={4} xxl={3}>
                  <Select className="full-width" defaultValue="RELEVANCE">
                    <Select.Option value="RELEVANCE">
                      {intl.formatMessage({ id: "search.sort.relevance" })}
                    </Select.Option>
                    <Select.Option value="PRICE_ASC">
                      {intl.formatMessage({
                        id: "search.sort.price.lowtohigh",
                      })}
                    </Select.Option>
                    <Select.Option value="PRICE_DESC">
                      {intl.formatMessage({
                        id: "search.sort.price.hightolow",
                      })}
                    </Select.Option>
                    <Select.Option value="DATE_DESC">
                      {intl.formatMessage({ id: "search.sort.newest" })}
                    </Select.Option>
                  </Select>
                </Col>
              </Row>
            </Col>
          </Row>
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
