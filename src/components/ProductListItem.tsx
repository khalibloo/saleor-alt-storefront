import * as React from "react";
import { ProductCard as ProductCardType } from "@/fragments/types/ProductCard";
import { Link } from "umi";
import { Card, Typography, Row, Col } from "antd";
import AspectRatio from "./AspectRatio";
import { formatPrice } from "@/utils/utils";

interface Props {
  id: string;
  product: ProductCardType;
}
const ProductListItem: React.FunctionComponent<Props> = props => {
  const { product } = props;
  const currency = product.pricing?.priceRange?.start?.gross.currency as string;
  const minPrice = product.pricing?.priceRange?.start?.gross.amount as number;
  const maxPrice = product.pricing?.priceRange?.stop?.gross.amount as number;
  return (
    <Card>
      <Row gutter={24}>
        <Col span={4}>
          <Link to={`/products/${product.id}`}>
            <AspectRatio width={1} height={1}>
              <img
                className="full-width"
                alt={product.thumbnail?.alt as string}
                src={product.thumbnail?.url}
              />
            </AspectRatio>
          </Link>
        </Col>
        <Col span={20}>
          <Link to={`/products/${product.id}`}>
            <Typography.Title level={4}>{product.name}</Typography.Title>
          </Link>
          <Typography.Title level={4}>
            {formatPrice(currency, minPrice, maxPrice)}
          </Typography.Title>
        </Col>
      </Row>
    </Card>
  );
};

export default ProductListItem;
