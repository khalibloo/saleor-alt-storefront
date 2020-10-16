import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { Link, useIntl } from "umi";
import VSpacing from "@/components/VSpacing";

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={160} />
      <Row justify="center">
        <Col span={22} md={20} xl={18}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "404.heading" })}
          </Typography.Title>
          <VSpacing height={64} />
          <Row justify="center">
            <Col>
              <Link to="/">
                <Button size="large" type="primary">
                  {intl.formatMessage({ id: "misc.backToHome" })}
                </Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={160} />
    </div>
  );
};

NotFoundPage.title = "404.title";
export default NotFoundPage;
