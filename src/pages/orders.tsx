import React from "react";
import { Typography, Row, Col, List, Card } from "antd";
import { useIntl } from "umi";
import VSpacing from "@/components/VSpacing";
import moment from "moment";
import { formatPrice } from "@/utils/utils";
import { sampleOrder } from "@/sampleData";
import VariantListItem from "@/components/VariantListItem";

const OrdersPage = () => {
  const intl = useIntl();
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title className="center-text" level={1}>
            {intl.formatMessage({ id: "orders.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={16}>
              <List
                dataSource={[
                  { ...sampleOrder, id: 1 },
                  { ...sampleOrder, id: 2 },
                ]}
                renderItem={order => {
                  const currency = order.total.gross.currency as string;
                  const totalPrice = order.total.gross.amount as number;
                  return (
                    <>
                      <Card
                        title={
                          <Row justify="space-between">
                            <Col>
                              <div>
                                <Typography.Text>
                                  {intl.formatMessage({
                                    id: "orders.placedOn",
                                  })}
                                  : {moment(order.date).format("Do MMMM, YYYY")}
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
                              <Typography.Text>
                                {intl.formatMessage({
                                  id: "orders.orderID",
                                })}
                                :{" #"}
                                {order.number}
                              </Typography.Text>
                            </Col>
                          </Row>
                        }
                      >
                        <List
                          dataSource={order.lines}
                          renderItem={line => {
                            return (
                              <List.Item key={line.id}>
                                <div className="full-width">
                                  <VariantListItem
                                    variant={line.variant}
                                    qty={line.quantity}
                                  />
                                </div>
                              </List.Item>
                            );
                          }}
                        />
                      </Card>
                      <VSpacing height={24} />
                    </>
                  );
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

OrdersPage.title = "orders.title";
export default OrdersPage;
