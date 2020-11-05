import * as React from "react";
import { Row, Col, Typography, Select, Button } from "antd";
import { useIntl } from "umi";
import { FilterOutlined } from "@ant-design/icons";

interface Props {
  id?: string;
  hideFilters?: boolean;
  onSortChange?: (val: string) => void;
  onOpenFilterDrawer?: () => void;
  value?: string;
}
const FilterBar: React.FC<Props> = ({
  id,
  value,
  hideFilters,
  onSortChange,
  onOpenFilterDrawer,
}) => {
  const intl = useIntl();
  return (
    <Row
      className="py-4"
      justify={hideFilters ? "end" : "space-between"}
      align="bottom"
    >
      {!hideFilters && (
        <Col>
          <Button id="filters-btn" onClick={onOpenFilterDrawer}>
            <FilterOutlined /> {intl.formatMessage({ id: "search.filters" })}
          </Button>
        </Col>
      )}

      <Col className="w-40">
        <div>
          <Typography.Text>
            {intl.formatMessage({ id: "search.sortby" })}
          </Typography.Text>
        </div>
        <div>
          <Select
            id={id}
            className="w-full"
            defaultValue="RELEVANCE"
            value={value}
            onChange={value => onSortChange?.(value)}
          >
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
