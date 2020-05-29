import React, { useEffect, useState } from "react";
import { Typography, Row, Col, List } from "antd";

import { useIntl, useLocation } from "umi";
import VSpacing from "@/components/VSpacing";
import ProductListItem from "@/components/ProductListItem";
import FilterBar from "@/components/FilterBar";
import { useResponsive } from "@umijs/hooks";
import { useLazyQuery } from "@apollo/react-hooks";
import { searchQuery, searchQueryVariables } from "@/queries/types/searchQuery";
import { SEARCH_PAGE_QUERY } from "@/queries/search";
import { ProductOrderField, OrderDirection } from "@/globalTypes";
import Products from "@/components/Products";

const SearchPage = () => {
  const intl = useIntl();
  const responsive = useResponsive();
  const location = useLocation();
  const [sort, setSort] = useState({
    field: ProductOrderField.PRICE,
    direction: OrderDirection.ASC,
  });
  const query = location.query?.q || null;
  const [performSearch, { loading: fetching, data, error }] = useLazyQuery<
    searchQuery,
    searchQueryVariables
  >(SEARCH_PAGE_QUERY);
  useEffect(() => {
    if (query) {
      performSearch({
        variables: {
          query,
          sort,
          count: 20,
        },
      });
    }
  }, [query, sort]);

  return (
    <div>
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
