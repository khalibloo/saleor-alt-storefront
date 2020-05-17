import React from "react";
import { Typography, Row, Col, List, Card } from "antd";
import { useIntl } from "umi";
import dayjs from "dayjs";
import { formatPrice } from "@/utils/utils";
import VariantListItem from "@/components/VariantListItem";
import { ordersQuery_me_orders_edges_node } from "@/queries/types/ordersQuery";

interface Props {
  order: ordersQuery_me_orders_edges_node;
}
const OrderCard: React.FC<Props> = ({ order }) => {
  const intl = useIntl();
  const currency = order.total?.gross.currency as string;
  const totalPrice = order.total?.gross.amount as number;

  return (
    <Card
      title={
        <Row justify="space-between">
          <Col>
            <div>
              <Typography.Text>
                {intl.formatMessage({
                  id: "orders.placedOn",
                })}
                : {dayjs(order.created).format("Do MMMM, YYYY")}
              </Typography.Text>
            </div>
            <div>
              <Typography.Text>
                {intl.formatMessage({
                  id: "orders.total",
                })}
                : {formatPrice(currency, totalPrice)}
              </Typography.Text>
            </div>
          </Col>
          <Col>
            <div>
              <Typography.Text>
                {intl.formatMessage({
                  id: "orders.orderID",
                })}
                :{" #"}
                {order.number}
              </Typography.Text>
            </div>
            <div>
              <Typography.Text>
                {intl.formatMessage({
                  id: "orders.status",
                })}
                :{" "}
                {intl.formatMessage({
                  id: "orders.status." + order.status.toLowerCase(),
                })}
              </Typography.Text>
            </div>
          </Col>
        </Row>
      }
    >
      <List
        dataSource={order.lines}
        pagination={order.lines.length > 3 ? { pageSize: 3 } : undefined}
        renderItem={line => {
          return (
            <List.Item className="product-list-items" key={line?.id}>
              <div className="full-width">
                <VariantListItem variant={line?.variant} qty={line?.quantity} />
              </div>
            </List.Item>
          );
        }}
      />
    </Card>
  );
};

export default OrderCard;
