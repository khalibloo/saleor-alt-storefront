import React from "react";
import {
  Typography,
  Layout,
  Row,
  Col,
  Input,
  //   Button,
  Menu,
  Dropdown,
} from "antd";
import { useIntl, Link } from "umi";
import {
  ShoppingCartOutlined,
  UserOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import clx from "classnames";

import styles from "./index.less";

const BasicLayout: React.FC = ({ children }) => {
  const intl = useIntl();
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
      <Menu.Divider />
      <Menu.Item onClick={() => {}}>Logout</Menu.Item>
    </Menu>
  );
  return (
    <Layout className={styles.layout}>
      <Layout.Header className={clx("full-width", styles.header)}>
        <Row justify="space-between" align="middle" className="full-height">
          <Col className="full-height">
            <Menu
              mode="horizontal"
              className={clx("no-border full-height")}
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
                        Alt Storefront
                      </Typography.Title>
                    </Col>
                  </Row>
                </Link>
              </Menu.Item>
            </Menu>
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
          <Col className="full-height">
            <Menu
              mode="horizontal"
              className={clx("no-border full-height")}
              selectedKeys={[]}
            >
              <Menu.Item
                key="1"
                className={clx("no-padding full-height", styles.navrightItem)}
              >
                <Dropdown overlay={langMenu}>
                  <div className={styles.dropdownPadder}>
                    <GlobalOutlined className={styles.navrightIcon} />
                  </div>
                </Dropdown>
              </Menu.Item>
              <Menu.Item
                key="2"
                className={clx("full-height", styles.navrightItem)}
              >
                <ShoppingCartOutlined className={styles.navrightIcon} />
              </Menu.Item>
              <Menu.Item
                key="3"
                className={clx("no-padding full-height", styles.navrightItem)}
              >
                <Dropdown overlay={avatarMenu} placement="bottomCenter">
                  <div className={styles.dropdownPadder}>
                    <UserOutlined className={styles.navrightIcon} />
                  </div>
                </Dropdown>
              </Menu.Item>
            </Menu>
            {/* <Row>
              <Col>
                <Button size="large" className="icon-btn">
                  <ShoppingCartOutlined className={styles.navrightIcon} />
                </Button>
              </Col>
              <Col>
                <Button size="large" className={"icon-btn"}>
                  <UserOutlined className={styles.navrightIcon} />
                </Button>
              </Col>
            </Row> */}
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
