import React from "react";
import { Typography, Row, Col, Card, Tabs } from "antd";
import { useIntl } from "umi";
import VSpacing from "@/components/VSpacing";
import LoginForm from "@/components/LoginForm";
import SignupForm from "@/components/SignupForm";

const WhoPage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "who.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={8}>
              <Card>
                <Tabs>
                  <Tabs.TabPane
                    key="signup"
                    tab={intl.formatMessage({ id: "who.signup" })}
                  >
                    <SignupForm />
                  </Tabs.TabPane>
                  <Tabs.TabPane
                    key="login"
                    tab={intl.formatMessage({ id: "who.login" })}
                  >
                    <LoginForm />
                  </Tabs.TabPane>
                </Tabs>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

WhoPage.title = "who.title";
export default WhoPage;
