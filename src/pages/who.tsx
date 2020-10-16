import React, { useState } from "react";
import { Typography, Row, Col, Card, Tabs, Button } from "antd";
import { Helmet } from "react-helmet";
import { useIntl, connect, Redirect, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";
import { ConnectState } from "@/models/connect";
import AuthTabs from "@/components/AuthTabs";
import ResetPasswordRequestForm from "@/components/ResetPasswordRequestForm";
import { LeftOutlined } from "@ant-design/icons";

const WhoPage = ({ authenticated }) => {
  const intl = useIntl();
  const loc = useLocation();
  const [activeTab, setActiveTab] = useState("0");
  if (authenticated) {
    const redirect = loc?.query?.redirect || "/";
    return <Redirect to={redirect} />;
  }
  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content={intl.formatMessage({ id: "who.meta" })}
        />
      </Helmet>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "who.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={8} xs={24} sm={24} md={16} lg={12} xl={10} xxl={8}>
              <Card>
                <Tabs activeKey={activeTab}>
                  <Tabs.TabPane key="0">
                    <AuthTabs
                      loginFormId="who-login-form"
                      signupFormId="who-signup-form"
                      onForgotPwd={() => setActiveTab("1")}
                    />
                  </Tabs.TabPane>
                  <Tabs.TabPane key="1">
                    <Row>
                      <Button onClick={() => setActiveTab("0")}>
                        <LeftOutlined />{" "}
                        {intl.formatMessage({ id: "misc.back" })}
                      </Button>
                    </Row>
                    <VSpacing height={24} />
                    <ResetPasswordRequestForm />
                  </Tabs.TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

const ConnectedPage = connect((state: ConnectState) => ({
  authenticated: state.auth.authenticated,
}))(WhoPage);

ConnectedPage.title = "who.title";
export default ConnectedPage;
