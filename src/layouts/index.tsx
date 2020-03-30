import React from "react";
import { Typography, Layout, Menu, Row, Col, Input } from "antd";
import { useIntl } from "umi";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";

const BasicLayout: React.FC = ({ children }) => {
  const intl = useIntl();
  return (
    <Layout className="full-height">
      <Layout.Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <Row justify="space-between" align="middle">
          <Col>
            <Typography.Title level={4}>Alt Storefront</Typography.Title>
          </Col>
          <Col span={8}>
            <Input.Search
              size="large"
              className="full-width"
              placeholder={intl.formatMessage({
                id: "navbar.search.placeholder",
              })}
            />
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item key="1">
                <ShoppingCartOutlined />
              </Menu.Item>
              <Menu.Item key="2">
                <UserOutlined />
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content
        className="site-layout"
        style={{ padding: "0 50px", marginTop: 64 }}
      >
        {children}
      </Layout.Content>
      <Layout.Footer style={{ textAlign: "center" }}>
        {intl.formatMessage({ id: "footer.createdby" })}
      </Layout.Footer>
    </Layout>
  );
};

export default BasicLayout;
