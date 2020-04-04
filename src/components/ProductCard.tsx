import * as React from "react";
import { ProductCard as ProductCardType } from "@/fragments/types/ProductCard";
import { Link, history } from "umi";
import { Card, Typography } from "antd";
import AspectRatio from "./AspectRatio";
import { formatPrice } from "@/utils/utils";

interface Props {
  id: string;
  product: ProductCardType;
}
const ProductCard: React.FunctionComponent<Props> = props => {
  const { product } = props;
  const currency = product.pricing?.priceRange?.start?.gross.currency as string;
  const minPrice = product.pricing?.priceRange?.start?.gross.amount as number;
  const maxPrice = product.pricing?.priceRange?.stop?.gross.amount as number;
  return (
    <Link to={`/products/${product.id}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <AspectRatio width={1} height={1}>
            <img
              className="full-width"
              alt={product.thumbnail?.alt as string}
              src={product.thumbnail?.url}
            />
          </AspectRatio>
        }
      >
        <Card.Meta
          title="Sample Product"
          description={product.category?.name}
        />
        <Typography.Text strong>
          {formatPrice(currency, minPrice, maxPrice)}
        </Typography.Text>
      </Card>
    </Link>
  );
};

export default ProductCard;
