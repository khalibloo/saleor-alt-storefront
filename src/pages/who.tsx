import React from "react";
import { Typography } from "antd";
import { useIntl } from "umi";

const WhoPage = () => {
  const intl = useIntl();
  return (
    <div>
      <Typography.Title level={1}>
        {intl.formatMessage({ id: "who.heading" })}
      </Typography.Title>
    </div>
  );
};

WhoPage.title = "who.title";
export default WhoPage;
