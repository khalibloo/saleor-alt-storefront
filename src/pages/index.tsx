import React from "react";
import { Typography } from "antd";
import styles from "./index.less";
import { useIntl } from "umi";

const HomePage = () => {
  const intl = useIntl();
  return (
    <div>
      <Typography.Title level={1}>Saleor Alt Storefront</Typography.Title>
    </div>
  );
};

HomePage.title = "site.title";
export default HomePage;
