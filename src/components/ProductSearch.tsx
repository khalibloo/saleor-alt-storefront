import * as React from "react";
import { Input } from "antd";
import { InputProps } from "antd/lib/input";
import { useIntl, history, useLocation } from "umi";

interface Props extends InputProps {
  onSearch?: (query: string) => void;
}
const ProductSearch: React.FC<Props> = ({ onSearch, ...rest }) => {
  const intl = useIntl();
  const [searchQuery, setSearchQuery] = React.useState("");
  const { pathname, query } = useLocation();
  React.useEffect(() => {
    if (pathname === "/search") {
      setSearchQuery(query.q || "");
    } else {
      setSearchQuery("");
    }
  }, [pathname]);
  return (
    <Input.Search
      id="product-search-fld"
      size="large"
      className="full-width"
      placeholder={intl.formatMessage({
        id: "navbar.search.placeholder",
      })}
      onChange={e => setSearchQuery(e.target.value)}
      onSearch={query => {
        if (query.trim().length === 0) {
          return;
        }
        history.push({
          pathname: "/search",
          query: { q: query.trim() },
        });
        document.getElementById("product-search-fld")?.blur();
        onSearch?.(query);
      }}
      value={searchQuery}
      {...rest}
    />
  );
};

export default ProductSearch;
