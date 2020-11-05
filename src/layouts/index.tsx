import React, { useEffect } from "react";
import { Affix, Button, Col, Layout, Row, Space, Typography } from "antd";
import { connect, ConnectRC, Link, Loading, useIntl } from "umi";
import { Helmet } from "react-helmet";
import { client } from "@/apollo";
import { ApolloProvider } from "@apollo/client";
import lf from "localforage";
import { useBoolean } from "@umijs/hooks";
import clx from "classnames";

import NavBar from "./NavBar";
import Footer from "./Footer";
import { ConnectState } from "@/models/connect";
import Loader from "@/components/Loader";
import config from "@/config";

interface Props {
  loading: Loading;
}
const BasicLayout: ConnectRC<Props> = ({ children, loading, dispatch }) => {
  const intl = useIntl();
  const {
    state: cookieDrawerOpen,
    setTrue: openCookieDrawer,
    setFalse: closeCookieDrawer,
  } = useBoolean(false);
  useEffect(() => {
    dispatch?.({ type: "auth/initialize" });
  }, []);
  useEffect(() => {
    if (config.altConfig.showCookieNotice) {
      lf.getItem("accepted_cookie_notice").then(accepted => {
        if (!accepted) {
          openCookieDrawer();
        }
      });
    }
  }, []);
  if (loading.effects["auth/initialize"]) {
    return <Loader />;
  }
  return (
    <>
      <Helmet htmlAttributes={{ lang: intl.locale }} />
      <ApolloProvider client={client}>
        <Layout className="min-h-full">
          <Layout.Header className={clx("w-full p-0 fixed z-10 shadow-md")}>
            <NavBar />
          </Layout.Header>
          <Layout.Content className="mt-16 flex flex-col">
            {children}
          </Layout.Content>
          <Layout.Footer>
            <Footer />
          </Layout.Footer>
        </Layout>
      </ApolloProvider>
      {cookieDrawerOpen && (
        <Affix offsetBottom={0} target={() => window}>
          <Row
            justify="space-around"
            align="middle"
            className="h-full bg-default p-6 shadow-md"
          >
            <Col span={16} xs={22} sm={22} md={20} lg={16}>
              <Typography.Paragraph className="text-center text-lg">
                {intl.formatMessage({ id: "cookies.notice" })}
              </Typography.Paragraph>
              <Row justify="center">
                <Col>
                  <Space>
                    <Link to="/pages/privacy">
                      <Button size="large">
                        {intl.formatMessage({ id: "cookies.privacyPolicy" })}
                      </Button>
                    </Link>
                    <Button
                      type="primary"
                      size="large"
                      onClick={() => {
                        lf.setItem("accepted_cookie_notice", true).then(
                          value => {
                            if (value) {
                              closeCookieDrawer();
                            }
                          },
                        );
                      }}
                    >
                      {intl.formatMessage({ id: "cookies.accept" })}
                    </Button>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Affix>
      )}
    </>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  BasicLayout,
);
