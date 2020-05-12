import React, { useEffect } from "react";
import { useIntl, useLocation, history, connect, ConnectRC } from "umi";
import Loader from "@/components/Loader";
import { notification } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { APIException } from "@/apollo";

const AccountDeactivatePage: ConnectRC = ({ dispatch }) => {
  const intl = useIntl();
  const location = useLocation();
  const token = location.query?.token || null;
  useEffect(() => {
    if (token) {
      dispatch?.({
        type: "auth/deactivateAccount",
        payload: {
          token,
          onCompleted: () => {
            notification.error({
              message: intl.formatMessage({ id: "account.deactivate.success" }),
              description: intl.formatMessage({
                id: "account.deactivate.success.desc",
              }),
              icon: <FrownOutlined />,
            });
            history.push("/");
          },
          onError: (err: APIException) => {
            // check if token expired or is invalid
            // message.error(intl.formatMessage({ id: "" }))
          },
        },
      });
    }
  }, []);

  return <Loader />;
};

const ConnectedPage = connect()(AccountDeactivatePage);
ConnectedPage.title = "account.deactivate.title";

export default ConnectedPage;
