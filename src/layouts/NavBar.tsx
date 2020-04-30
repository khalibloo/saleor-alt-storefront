import React from "react";
import { Typography, Row, Col, Menu, Dropdown, Drawer } from "antd";
import { useIntl, Link, useLocation } from "umi";
import {
  ShoppingCartOutlined,
  UserOutlined,
  GlobalOutlined,
  MenuOutlined,
  SearchOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import clx from "classnames";

import styles from "./NavBar.less";
import ProductSearch from "@/components/ProductSearch";
import { useResponsive, useBoolean, useUpdateEffect } from "@umijs/hooks";

const NavBar: React.FC = () => {
  const intl = useIntl();
  const {
    state: searchDrawerOpen,
    setTrue: openSearchDrawer,
    setFalse: closeSearchDrawer,
  } = useBoolean(false);
  const {
    state: menuDrawerOpen,
    setTrue: openMenuDrawer,
    setFalse: closeMenuDrawer,
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
        <Link to="/profile">
          {intl.formatMessage({ id: "navbar.profile" })}
        </Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/orders">{intl.formatMessage({ id: "navbar.orders" })}</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">
          {intl.formatMessage({ id: "navbar.settings" })}
        </Link>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item onClick={() => {}}>
        {intl.formatMessage({ id: "navbar.logout" })}
      </Menu.Item>
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
      <Drawer
        title={intl.formatMessage({ id: "navbar.menu" })}
        visible={menuDrawerOpen}
        onClose={closeMenuDrawer}
        placement="right"
        width="60%"
        bodyStyle={{ paddingLeft: 0, paddingRight: 0 }}
      >
        <Menu mode="inline" defaultOpenKeys={["accmenu"]} selectable={false}>
          <Menu.Item onClick={closeMenuDrawer}>
            <Link to="/cart">
              <ShoppingCartOutlined />{" "}
              {intl.formatMessage({ id: "navbar.cart" })}
            </Link>
          </Menu.Item>
          <Menu.SubMenu
            key="accmenu"
            title={
              <span>
                <UserOutlined />
                <span>{intl.formatMessage({ id: "navbar.account" })}</span>
              </span>
            }
          >
            <Menu.Item onClick={closeMenuDrawer}>
              <Link to="/profile">
                {intl.formatMessage({ id: "navbar.profile" })}
              </Link>
            </Menu.Item>
            <Menu.Item onClick={closeMenuDrawer}>
              <Link to="/orders">
                {intl.formatMessage({ id: "navbar.orders" })}
              </Link>
            </Menu.Item>
            <Menu.Item onClick={closeMenuDrawer}>
              <Link to="/settings">
                {intl.formatMessage({ id: "navbar.settings" })}
              </Link>
            </Menu.Item>
          </Menu.SubMenu>
          <Menu.Divider />
          <Menu.SubMenu
            key="langmenu"
            title={
              <span>
                <GlobalOutlined />
                <span>{intl.formatMessage({ id: "navbar.language" })}</span>
              </span>
            }
          >
            <Menu.Item>English</Menu.Item>
            <Menu.Item>Français</Menu.Item>
          </Menu.SubMenu>
          <Menu.Divider />
          <Menu.Item
            onClick={() => {
              //TODO: logout
              closeMenuDrawer();
            }}
          >
            <LogoutOutlined /> {intl.formatMessage({ id: "navbar.logout" })}
          </Menu.Item>
        </Menu>
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
              onClick={openMenuDrawer}
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
