import * as React from "react";
import { AutoComplete, Input, Typography } from "antd";
import { InputProps } from "antd/lib/input";
import { useIntl, history, useLocation, Link } from "umi";
import config from "@/config";
import MeiliSearch, { Index } from "meilisearch";
import _ from "lodash";

interface ProductDocument {
  id: number;
  name: string;
  description: string;
  category: string;
  slug: string;
}
let productsIndex: Index<ProductDocument>;
if (config.meiliSearchUrl) {
  const client = new MeiliSearch({
    host: config.meiliSearchUrl.origin,
    apiKey: config.meiliSearchKey,
  });
  productsIndex = client.getIndex("products");
}

interface Props extends InputProps {
  onSearch?: (query: string) => void;
}
const ProductSearch: React.FC<Props> = ({ onSearch, ...rest }) => {
  const intl = useIntl();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [results, setResults] = React.useState<ProductDocument[]>([]);
  const { pathname, query } = useLocation();
  // monitor the search query in url for changes from other sources
  React.useEffect(() => {
    setResults([]);
    if (pathname === "/search") {
      setSearchQuery(query.q || "");
    } else {
      setSearchQuery("");
    }
  }, [pathname, query.q]);
  return (
    <AutoComplete
      dropdownMatchSelectWidth={252}
      className="w-full no-hover-border"
      options={results.map(hit => ({
        value: hit.name,
        key: hit.slug,
        label: (
          <Link to={`/products/${hit.slug}`}>
            <div>
              <Typography.Text>{hit.name}</Typography.Text>
            </div>
          </Link>
        ),
      }))}
      onSelect={(value, option) => {
        history.push(`/products/${option.key}`);
      }}
      onSearch={_.debounce(val => {
        if (config.meiliSearchUrl) {
          productsIndex
            .search(val, { limit: 8 })
            .then(res => setResults(res.hits));
        }
      }, 100)}
      onChange={val => setSearchQuery(val)}
      value={searchQuery}
    >
      <Input.Search
        id="product-search-fld"
        size="large"
        aria-label={intl.formatMessage({
          id: "navbar.search.placeholder",
        })}
        placeholder={intl.formatMessage({
          id: "navbar.search.placeholder",
        })}
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
        {...rest}
      />
    </AutoComplete>
  );
};

export default ProductSearch;
