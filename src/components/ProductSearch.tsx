import * as React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input";
import { useIntl, history } from "umi";

interface Props extends InputProps {
  onSearch?: (query: string) => void;
}
const ProductSearch: React.FC<Props> = ({ onSearch, ...rest }) => {
  const intl = useIntl();
  return (
    <Input.Search
      size="large"
      className="full-width"
      placeholder={intl.formatMessage({
        id: "navbar.search.placeholder",
      })}
      onSearch={query => {
        history.push({
          pathname: "/search",
          query: { query },
        });
        onSearch?.(query);
      }}
      {...rest}
    />
  );
};

export default ProductSearch;
