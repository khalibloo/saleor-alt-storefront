import React from "react";
import { Typography, Row, Col } from "antd";
import { useIntl } from "umi";

const Footer: React.FC = () => {
  const intl = useIntl();
  return (
    <Row justify="center">
      <Col>
        <Typography.Text className="text-center">
          {intl.formatMessage({ id: "footer.createdby" })}
        </Typography.Text>
      </Col>
    </Row>
  );
};

export default Footer;
