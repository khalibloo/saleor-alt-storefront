import React from "react";
import { Typography, Row, Col, Card, Tabs } from "antd";
import { useIntl, connect, Redirect, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";
import { ConnectState } from "@/models/connect";
import AuthTabs from "@/components/AuthTabs";

const WhoPage = ({ authenticated }) => {
  const intl = useIntl();
  const loc = useLocation();
  if (authenticated) {
    const redirect = loc?.query?.redirect || "/";
    return <Redirect to={redirect} />;
  }
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "who.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={8} xs={24} sm={24} md={16} lg={12} xl={10} xxl={8}>
              <Card>
                <AuthTabs
                  loginFormId="who-login-form"
                  signupFormId="who-signup-form"
                />
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
