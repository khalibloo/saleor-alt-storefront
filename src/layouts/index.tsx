import React from "react";
import { Typography, Layout, Row, Col, Menu, Dropdown } from "antd";
import { useIntl, Link } from "umi";
import {
  ShoppingCartOutlined,
  UserOutlined,
  GlobalOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import clx from "classnames";

import styles from "./index.less";
import ProductSearch from "@/components/ProductSearch";
import { useResponsive } from "@umijs/hooks";

const BasicLayout: React.FC = ({ children }) => {
  const intl = useIntl();
  const responsive = useResponsive();
  const langMenu = (
    <Menu>
      <Menu.Item>English</Menu.Item>
      <Menu.Item>Français</Menu.Item>
    </Menu>
  );
  const avatarMenu = (
    <Menu>
      <Menu.Item>
        <Link to="/profile">My Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/orders">My Orders</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={() => {}}>Logout</Menu.Item>
    </Menu>
  );
  return (
    <Layout className={styles.layout}>
      <Layout.Header className={clx("full-width no-padding", styles.header)}>
        <Row justify="space-between" align="middle" className="full-height">
          <Col className="full-height">
            <Menu
              mode="horizontal"
              className={clx("no-bg no-border full-height")}
              selectedKeys={[]}
            >
              <Menu.Item
                key="1"
                className={clx("full-height", styles.logoItem)}
              >
                <Link to="/" className="full-height">
                  <Row align="middle" className="full-height">
                    <Col>
                      <Typography.Title level={3} className="no-margin">
                        {intl.formatMessage({
                          id: "site.title",
                        })}
                      </Typography.Title>
                    </Col>
                  </Row>
                </Link>
              </Menu.Item>
            </Menu>
          </Col>
          <Col span={8} xs={0} sm={0} md={0} lg={8}>
            <ProductSearch />
          </Col>
          <Col className="full-height">
            <Menu
              mode="horizontal"
              className={clx("no-bg no-border full-height")}
              selectedKeys={[]}
            >
              <Menu.Item
                key="search"
                className={clx("full-height", styles.navrightItem)}
                hidden={responsive.lg}
              >
                <SearchOutlined className={styles.navrightIcon} />
              </Menu.Item>
              <Menu.Item
                key="lang"
                className={clx("no-padding full-height", styles.navrightItem)}
                hidden={!responsive.sm}
              >
                <Dropdown overlay={langMenu}>
                  <div className={styles.dropdownPadder}>
                    <GlobalOutlined className={styles.navrightIcon} />
                  </div>
                </Dropdown>
              </Menu.Item>
              <Menu.Item
                key="cart"
                className={clx("full-height", styles.navrightItem)}
                hidden={!responsive.sm}
              >
                <Link to="/cart">
                  <ShoppingCartOutlined className={styles.navrightIcon} />
                </Link>
              </Menu.Item>
              <Menu.Item
                key="profile"
                className={clx("no-padding full-height", styles.navrightItem)}
                hidden={!responsive.sm}
              >
                <Dropdown overlay={avatarMenu} placement="bottomCenter">
                  <div className={styles.dropdownPadder}>
                    <UserOutlined className={styles.navrightIcon} />
                  </div>
                </Dropdown>
              </Menu.Item>
              <Menu.Item
                key="extra"
                className={clx("full-height", styles.navrightItem)}
                hidden={responsive.sm}
              >
                <MenuOutlined className={styles.navrightIcon} />
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </Layout.Header>
      <Layout.Content className={styles.content}>{children}</Layout.Content>
      <Layout.Footer>
        <Row justify="center">
          <Col>
            <Typography.Text className="center-text">
              {intl.formatMessage({ id: "footer.createdby" })}
            </Typography.Text>
          </Col>
        </Row>
      </Layout.Footer>
    </Layout>
  );
};

export default BasicLayout;
