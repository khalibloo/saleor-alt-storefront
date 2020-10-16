import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";

import { useIntl, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";
import Products from "@/components/Products";

const SearchPage = () => {
  const intl = useIntl();
  const location = useLocation();
  const query = location.query?.q || null;

  return (
    <div>
      <Helmet>
        <meta
          name="description"
          content={intl.formatMessage({ id: "search.meta" })}
        />
      </Helmet>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "search.heading" })}
          </Typography.Title>
          {query && (
            <Typography.Title
              id="page-subheading"
              className="center-text"
              level={3}
            >
              <i>"{query}"</i>
            </Typography.Title>
          )}
          <Products showCategoryFilter showCollectionFilter view="list" />
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

SearchPage.title = "search.title";
export default SearchPage;
