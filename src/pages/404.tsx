import React from "react";
import { Button, Col, Result, Row } from "antd";
import { Link, useIntl } from "umi";
import VSpacing from "@/components/VSpacing";

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center" align="middle" className="h-full">
        <Col span={22} md={20} xl={18}>
          <Result
            status="404"
            title="404"
            subTitle={intl.formatMessage({ id: "404.subheading" })}
            extra={
              <Link to="/">
                <Button size="large" type="primary">
                  {intl.formatMessage({ id: "misc.backToHome" })}
                </Button>
              </Link>
            }
          />
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

NotFoundPage.title = "404.title";
export default NotFoundPage;
