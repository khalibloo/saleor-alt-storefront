import React from "react";
import { Typography } from "antd";
import { useIntl } from "umi";

const NotFoundPage = () => {
  const intl = useIntl();
  return (
    <div>
      <Typography.Title level={1}>
        {intl.formatMessage({ id: "404.heading" })}
      </Typography.Title>
    </div>
  );
};

NotFoundPage.title = "404.title";
export default NotFoundPage;
