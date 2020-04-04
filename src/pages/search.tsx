import React from "react";
import { Typography, Row, Col } from "antd";
import { useIntl, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";

const SearchPage = () => {
  const intl = useIntl();
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <VSpacing height={48} />
      <Row justify="center">
        <Col span={20}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "search.heading" })}
          </Typography.Title>
          <Typography.Title className="center-text" level={3}>
            <i>"{location.query?.query}"</i>
          </Typography.Title>
          <Row>
            <Col>Results...</Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

SearchPage.title = "search.title";
export default SearchPage;
