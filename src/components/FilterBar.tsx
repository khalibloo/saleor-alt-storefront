import * as React from "react";
import { Row, Col, Typography, Select } from "antd";
import { useIntl } from "umi";
import FilterButton from "./FilterButton";

import styles from "./FilterBar.less";

interface Props {
  hideFilters?: boolean;
}
const FilterBar: React.FC<Props> = ({ hideFilters }) => {
  const intl = useIntl();
  return (
    <Row
      className={styles.row}
      justify={hideFilters ? "end" : "space-between"}
      align="bottom"
    >
      {!hideFilters && (
        <Col>
          <FilterButton />
        </Col>
      )}

      <Col className={styles.sortCol}>
        <div>
          <Typography.Text>
            {intl.formatMessage({ id: "search.sortby" })}
          </Typography.Text>
        </div>
        <div>
          <Select className="full-width" defaultValue="RELEVANCE">
            <Select.Option value="RELEVANCE">
              {intl.formatMessage({ id: "search.sort.relevance" })}
            </Select.Option>
            <Select.Option value="PRICE_ASC">
              {intl.formatMessage({
                id: "search.sort.price.lowtohigh",
              })}
            </Select.Option>
            <Select.Option value="PRICE_DESC">
              {intl.formatMessage({
                id: "search.sort.price.hightolow",
              })}
            </Select.Option>
            <Select.Option value="DATE_DESC">
              {intl.formatMessage({ id: "search.sort.newest" })}
            </Select.Option>
          </Select>
        </div>
      </Col>
    </Row>
  );
};

export default FilterBar;