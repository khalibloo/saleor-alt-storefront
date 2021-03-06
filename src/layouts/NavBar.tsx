import React, { useEffect } from "react";
import {
  Typography,
  Row,
  Col,
  Menu,
  Dropdown,
  Drawer,
  Modal,
  Badge,
  Button,
} from "antd";
import { useIntl, Link, connect, ConnectRC, setLocale } from "umi";
import {
  ShoppingCartOutlined,
  UserOutlined,
  GlobalOutlined,
  MenuOutlined,
  SearchOutlined,
  LogoutOutlined,
  LoginOutlined,
} from "@ant-design/icons";

import ProductSearch from "@/components/ProductSearch";
import { useResponsive, useBoolean } from "@umijs/hooks";
import { ConnectState } from "@/models/connect";
import AuthTabs from "@/components/AuthTabs";
import { useLazyQuery } from "@apollo/client";
import { CART_BADGE_QUERY } from "@/queries/cart";
import { cartBadgeQuery } from "@/queries/types/cartBadgeQuery";
import ResetPasswordRequestForm from "@/components/ResetPasswordRequestForm";
import GuestForm from "@/components/GuestForm";
import VSpacing from "@/components/VSpacing";
import { CartCreateMutation_checkoutCreate_checkout } from "@/mutations/types/CartCreateMutation";
import config from "@/config";

interface Props {
  authenticated: boolean;
  localCheckout: CartCreateMutation_checkoutCreate_checkout | null;
  authModalOpen: boolean;
  guestCartModalOpen: boolean;
}
const NavBar: ConnectRC<Props> = ({
  authenticated,
  localCheckout,
  authModalOpen,
  guestCartModalOpen,
  dispatch,
}) => {
  const intl = useIntl();
  const {
    state: searchDrawerOpen,
    setTrue: openSearchDrawer,
    setFalse: closeSearchDrawer,
  } = useBoolean(false);
  const {
    state: pwdResetModalOpen,
    setTrue: openPwdResetModal,
    setFalse: closePwdResetModal,
  } = useBoolean(false);
  const {
    state: menuDrawerOpen,
    setTrue: openMenuDrawer,
    setFalse: closeMenuDrawer,
  } = useBoolean(false);
  const responsive: any = useResponsive();
  useEffect(() => {
    dispatch?.({ type: "cart/create" });
  }, []);
  const [
    fetchCartBadge,
    { loading: fetching, data: cartData, error: cartError },
  ] = useLazyQuery<cartBadgeQuery>(CART_BADGE_QUERY);
  useEffect(() => {
    if (authenticated) {
      fetchCartBadge();
    }
  }, [window.location.pathname, authenticated]);

  const checkout = authenticated ? cartData?.me?.checkout : localCheckout;

  const logout = () => dispatch?.({ type: "auth/logout" });
  const closeAuthModal = () =>
    dispatch?.({ type: "auth/setAuthModalOpen", payload: { open: false } });
  const openAuthModal = () =>
    dispatch?.({ type: "auth/setAuthModalOpen", payload: { open: true } });
  const closeGuestCartModal = () =>
    dispatch?.({
      type: "cart/setGuestCartModalOpen",
      payload: { open: false },
    });

  const langMenu = (
    <Menu
      onClick={item => {
        setLocale(item.key, false);
        window.location.reload();
      }}
    >
      <Menu.Item key="en-US">English</Menu.Item>
      <Menu.Item key="fr-FR">Français</Menu.Item>
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
      <Menu.Item onClick={logout}>
        {intl.formatMessage({ id: "navbar.logout" })}
      </Menu.Item>
    </Menu>
  );
  const authIcon = authenticated ? (
    <Menu.Item
      key="profile"
      className="p-0 h-full align-top"
      hidden={!responsive.sm}
    >
      <Dropdown
        overlay={avatarMenu}
        placement="bottomCenter"
        trigger={["click", "hover"]}
      >
        <div className="px-5">
          <UserOutlined className="mr-0 text-2xl" />
        </div>
      </Dropdown>
    </Menu.Item>
  ) : (
    <Menu.Item
      key="profile"
      className="h-full align-top"
      hidden={!responsive.sm}
      onClick={openAuthModal}
    >
      <UserOutlined className="mr-0 text-2xl" />
    </Menu.Item>
  );
  return (
    <>
      <Modal
        footer={null}
        onCancel={closeAuthModal}
        title={null}
        visible={authModalOpen}
      >
        <AuthTabs
          loginFormId="nav-login-form"
          signupFormId="nav-signup-form"
          onAuth={closeAuthModal}
          onForgotPwd={() => {
            closeAuthModal();
            openPwdResetModal();
          }}
        />
      </Modal>
      <Modal
        destroyOnClose
        footer={null}
        onCancel={closePwdResetModal}
        title={intl.formatMessage({ id: "who.resetPwd" })}
        visible={pwdResetModalOpen}
      >
        <ResetPasswordRequestForm onSubmit={closePwdResetModal} />
      </Modal>
      <Modal
        footer={null}
        onCancel={closeGuestCartModal}
        title={null}
        visible={guestCartModalOpen}
      >
        <Typography.Title level={4} className="text-center">
          {intl.formatMessage({ id: "navbar.loginAsk" })}
        </Typography.Title>
        <VSpacing height={24} />
        <div className="text-center">
          <Button
            shape="round"
            type="primary"
            size="large"
            onClick={() => {
              closeGuestCartModal();
              openAuthModal();
            }}
          >
            {intl.formatMessage({ id: "who.loginOrSignup" })}
          </Button>
        </div>
        <VSpacing height={24} />
        <Typography.Title level={4} className="text-center">
          {intl.formatMessage({ id: "navbar.continueAsGuest" })}
        </Typography.Title>
        <div className="text-center">
          <GuestForm />
        </div>
      </Modal>
      <Drawer
        visible={searchDrawerOpen}
        onClose={closeSearchDrawer}
        destroyOnClose
        placement="top"
        height={64}
        bodyStyle={{ padding: 0 }}
        closable={false}
      >
        <Row justify="center" align="middle" className="h-full">
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
              <Badge count={checkout?.lines?.length} offset={[12, 0]}>
                <ShoppingCartOutlined />{" "}
                {intl.formatMessage({ id: "navbar.cart" })}
              </Badge>
            </Link>
          </Menu.Item>
          {authenticated && (
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
          )}
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
          {authenticated && (
            <Menu.Item
              onClick={() => {
                logout();
                closeMenuDrawer();
              }}
            >
              <LogoutOutlined /> {intl.formatMessage({ id: "navbar.logout" })}
            </Menu.Item>
          )}
          {!authenticated && (
            <Menu.Item
              onClick={() => {
                openAuthModal();
                closeMenuDrawer();
              }}
            >
              <LoginOutlined /> {intl.formatMessage({ id: "who.heading" })}
            </Menu.Item>
          )}
        </Menu>
      </Drawer>
      <Row justify="space-between" align="middle" className="h-full">
        <Col className="h-full">
          <Menu
            mode="horizontal"
            className="bg-transparent border-none h-full"
            selectedKeys={[]}
          >
            <Menu.Item key="1" className="h-full block">
              <Link to="/" className="h-full">
                <Row align="middle" className="h-full">
                  <Col>
                    <Typography.Title level={3} className="m-0">
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
        <Col
          span={8}
          xs={0}
          sm={0}
          md={0}
          lg={8}
          style={{ lineHeight: "normal" }}
        >
          {config.altConfig.showSearch && <ProductSearch />}
        </Col>
        <Col className="h-full">
          <Menu
            mode="horizontal"
            className="bg-transparent border-none h-full"
            selectedKeys={[]}
          >
            {config.altConfig.showSearch && (
              <Menu.Item
                key="search"
                className="h-full align-top"
                hidden={responsive.lg}
                onClick={openSearchDrawer}
              >
                <SearchOutlined className="mr-0 text-2xl" />
              </Menu.Item>
            )}
            <Menu.Item
              key="lang"
              className="p-0 h-full align-top"
              hidden={!responsive.sm}
            >
              <Dropdown overlay={langMenu} trigger={["click", "hover"]}>
                <div className="px-5">
                  <GlobalOutlined className="mr-0 text-2xl" />
                </div>
              </Dropdown>
            </Menu.Item>
            <Menu.Item
              key="cart"
              className="h-full align-top"
              hidden={!responsive.sm}
            >
              <Link to="/cart">
                <Badge count={checkout?.lines?.length}>
                  <ShoppingCartOutlined className="mr-0 text-2xl" />
                </Badge>
              </Link>
            </Menu.Item>
            {authIcon}
            <Menu.Item
              key="extra"
              className="h-full align-top"
              hidden={responsive.sm}
              onClick={openMenuDrawer}
            >
              <MenuOutlined className="mr-0 text-2xl" />
            </Menu.Item>
          </Menu>
        </Col>
      </Row>
    </>
  );
};

export default connect((state: ConnectState) => ({
  authenticated: state.auth.authenticated,
  localCheckout: state.cart.checkout,
  authModalOpen: state.auth.authModalOpen,
  guestCartModalOpen: state.cart.guestCartModalOpen,
}))(NavBar);
