import React from "react";
import { Typography, Row, Col, Menu, Dropdown, Drawer } from "antd";
import { useIntl, Link } from "umi";
import {
  ShoppingCartOutlined,
  UserOutlined,
  GlobalOutlined,
  MenuOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import clx from "classnames";

import styles from "./NavBar.less";
import ProductSearch from "@/components/ProductSearch";
import { useResponsive, useBoolean } from "@umijs/hooks";

const NavBar: React.FC = () => {
  const intl = useIntl();
  const {
    state: searchDrawerOpen,
    setTrue: openSearchDrawer,
    setFalse: closeSearchDrawer,
  } = useBoolean(false);
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
    <>
      <Drawer
        visible={searchDrawerOpen}
        onClose={closeSearchDrawer}
        destroyOnClose
        placement="top"
        height={64}
        bodyStyle={{ padding: 0 }}
        closable={false}
      >
        <Row justify="center" align="middle" className="full-height">
          <Col span={16} xs={22} sm={22} md={20} lg={16}>
            <ProductSearch onSearch={closeSearchDrawer} />
          </Col>
        </Row>
      </Drawer>
      <Row justify="space-between" align="middle" className="full-height">
        <Col className="full-height">
          <Menu
            mode="horizontal"
            className={clx("no-bg no-border full-height")}
            selectedKeys={[]}
          >
            <Menu.Item key="1" className={clx("full-height", styles.logoItem)}>
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
              onClick={openSearchDrawer}
            >
              <SearchOutlined className={styles.navrightIcon} />
            </Menu.Item>
            <Menu.Item
              key="lang"
              className={clx("no-padding full-height", styles.navrightItem)}
              hidden={!responsive.sm}
            >
              <Dropdown overlay={langMenu} trigger={["click", "hover"]}>
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
              <Dropdown
                overlay={avatarMenu}
                placement="bottomCenter"
                trigger={["click", "hover"]}
              >
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
    </>
  );
};

export default NavBar;
