import * as React from "react";
import { Link } from "umi";
import { Card, Typography, Row, Col } from "antd";
import AspectRatio from "./AspectRatio";
import { formatPrice } from "@/utils/utils";

interface Props {
  variant: any; //VariantListItemType;
  qty?: number;
}
const VariantListItem: React.FunctionComponent<Props> = ({ variant, qty }) => {
  const thumbnail = variant.images[0]
    ? variant.images[0]
    : variant.product?.thumbnail;
  const currency = variant.pricing?.price?.gross.currency as string;
  const price = variant.pricing?.price?.gross.amount as number;
  return (
    <Card>
      <Row gutter={24}>
        <Col span={4}>
          <Link to={`/products/${variant.product.id}`}>
            <AspectRatio width={1} height={1}>
              <img
                className="full-width"
                alt={thumbnail?.alt}
                src={thumbnail?.url}
              />
            </AspectRatio>
          </Link>
        </Col>
        <Col span={20}>
          <Link to={`/products/${variant.product.id}`}>
            <Typography.Title level={4}>
              {variant.product.name}
            </Typography.Title>
          </Link>
          <Typography.Title level={4}>
            {formatPrice(currency, price)}
          </Typography.Title>
          {qty !== undefined && (
            <div>
              <Typography.Text>Qty: {qty}</Typography.Text>
            </div>
          )}
        </Col>
      </Row>
    </Card>
  );
};

export default VariantListItem;