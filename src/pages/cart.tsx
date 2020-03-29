import React from "react";
import { Typography } from "antd";
import { useIntl } from "umi";

const CartPage = () => {
  const intl = useIntl();
  return (
    <div>
      <Typography.Title level={1}>
        {intl.formatMessage({ id: "cart.heading" })}
      </Typography.Title>
    </div>
  );
};

CartPage.title = "cart.title";
export default CartPage;
