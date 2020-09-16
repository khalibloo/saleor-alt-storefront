import React, { useEffect } from "react";
import { useIntl, useLocation, history, connect, ConnectRC, Link } from "umi";
import Loader from "@/components/Loader";
import { Button, notification, Result } from "antd";
import { FrownOutlined } from "@ant-design/icons";
import { APIException } from "@/apollo";
import VSpacing from "@/components/VSpacing";

const AccountDeactivatePage: ConnectRC = ({ dispatch }) => {
  const intl = useIntl();
  const location = useLocation();
  const token = location.query?.token || null;
  useEffect(() => {
    if (token) {
      dispatch?.({
        type: "auth/confirmAccountDeactivation",
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

  if (!token) {
    return (
      <>
        <VSpacing height={48} />
        <Result
          status="error"
          extra={[
            <Link to="/">
              <Button type="primary" key="0">
                {intl.formatMessage({ id: "misc.backToHome" })}
              </Button>
            </Link>,
          ]}
          title={intl.formatMessage({ id: "account.confirm.invalidUrl" })}
          subTitle={intl.formatMessage({
            id: "account.confirm.invalidUrl.desc",
          })}
        />
        <VSpacing height={48} />
      </>
    );
  }

  return <Loader />;
};

const ConnectedPage = connect()(AccountDeactivatePage);
ConnectedPage.title = "account.deactivate.title";

export default ConnectedPage;
