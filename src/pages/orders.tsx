import React from "react";
import { Typography } from "antd";
import { useIntl } from "umi";

const OrdersPage = () => {
  const intl = useIntl();
  return (
    <div>
      <Typography.Title level={1}>
        {intl.formatMessage({ id: "orders.heading" })}
      </Typography.Title>
    </div>
  );
};

OrdersPage.title = "orders.title";
export default OrdersPage;
