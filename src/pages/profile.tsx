import React from "react";
import { Typography } from "antd";
import { useIntl } from "umi";

const ProfilePage = () => {
  const intl = useIntl();
  return (
    <div>
      <Typography.Title level={1}>
        {intl.formatMessage({ id: "profile.heading" })}
      </Typography.Title>
    </div>
  );
};

ProfilePage.title = "profile.title";
export default ProfilePage;
