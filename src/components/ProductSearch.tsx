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
  // monitor the search query in url for changes from other sources
  React.useEffect(() => {
    if (pathname === "/search") {
      setSearchQuery(query.q || "");
    } else {
      setSearchQuery("");
    }
  }, [pathname, query.q]);
  return (
    <Input.Search
      id="product-search-fld"
      size="large"
      className="full-width"
      aria-label={intl.formatMessage({
        id: "navbar.search.placeholder",
      })}
      placeholder={intl.formatMessage({
        id: "navbar.search.placeholder",
      })}
      onChange={e => setSearchQuery(e.target.value)}
      onSearch={search => {
        if (search.trim().length === 0) {
          return;
        }
        history.push({
          pathname: "/search",
          // preserve query filters if on search page
          query: {
            ...(pathname === "/search" ? query : {}),
            q: search.trim(),
          },
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
