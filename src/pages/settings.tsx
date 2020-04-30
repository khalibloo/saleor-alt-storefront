import React from "react";
import { Typography, Row, Col, Card, Button } from "antd";
import { useIntl } from "umi";
import VSpacing from "@/components/VSpacing";

const SettingsPage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "settings.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={12} xs={24} sm={24} md={16} lg={12} xl={12} xxl={8}>
              <Card
                id="security-card"
                title={intl.formatMessage({ id: "settings.security" })}
              >
                <div>
                  <Typography.Text strong>
                    {intl.formatMessage({ id: "settings.email" })}
                  </Typography.Text>
                </div>
                <Row gutter={24} align="middle">
                  <Col>
                    <Typography.Text id="email-text">
                      neko@example.com
                    </Typography.Text>
                  </Col>
                  <Col>
                    <Button id="change-email-btn">
                      {intl.formatMessage({ id: "settings.changeEmail" })}
                    </Button>
                  </Col>
                </Row>
                <VSpacing height={8} />
                <div>
                  <Typography.Text id="pwd-text" strong>
                    {intl.formatMessage({ id: "settings.pwd" })}
                  </Typography.Text>
                </div>
                <VSpacing height={8} />
                <div>
                  <Button id="change-pwd-btn">
                    {intl.formatMessage({ id: "settings.changePwd" })}
                  </Button>
                </div>
              </Card>
              <VSpacing height={24} />
              <Card
                id="danger-zone-card"
                title={intl.formatMessage({ id: "settings.dangerZone" })}
              >
                <div>
                  <Button id="shutdown-account-btn" type="danger">
                    {intl.formatMessage({ id: "settings.shutdownAccount" })}
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

SettingsPage.title = "settings.title";
export default SettingsPage;
