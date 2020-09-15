import React from "react";
import { Typography, Row, Col, List } from "antd";
import { useIntl } from "umi";
import VSpacing from "@/components/VSpacing";
import { useQuery } from "@apollo/client";
import { ORDERS_PAGE_QUERY } from "@/queries/orders";
import { ordersQuery } from "@/queries/types/ordersQuery";
import OrderCard from "@/components/OrderCard";

const OrdersPage = () => {
  const intl = useIntl();
  const { loading: fetching, error, data } = useQuery<ordersQuery>(
    ORDERS_PAGE_QUERY,
  );
  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "orders.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={16} xs={24} sm={24} md={18} lg={16} xl={16} xxl={12}>
              <List
                dataSource={data?.me?.orders?.edges}
                loading={fetching}
                renderItem={orderEdge => {
                  const order = orderEdge.node;
                  return (
                    <List.Item className="order-list-items" key={order.id}>
                      <div className="full-width">
                        <OrderCard order={order} />
                        <VSpacing height={24} />
                      </div>
                    </List.Item>
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
