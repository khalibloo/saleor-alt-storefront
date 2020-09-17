import React, { useEffect } from "react";
import { useIntl, useLocation, history, connect, ConnectRC, Link } from "umi";
import { Button, message, notification, Result } from "antd";
import { ConnectState } from "@/models/connect";
import VSpacing from "@/components/VSpacing";
import Loader from "@/components/Loader";
import { APIException } from "@/apollo";

interface Props {
  authenticated: boolean;
}
const EmailChangePage: ConnectRC<Props> = ({ authenticated, dispatch }) => {
  const intl = useIntl();
  const location = useLocation();
  const query = location.query || {};
  const { token } = query;
  useEffect(() => {
    if (token) {
      dispatch?.({
        type: "auth/confirmEmailChange",
        payload: {
          token,
          onCompleted: () => {
            notification.success({
              message: intl.formatMessage({ id: "who.emailchange.success" }),
              description: intl.formatMessage({
                id: "who.emailchange.success.desc",
              }),
            });
            history.push("/profile");
          },
          onError: (err: APIException) => {
            // check if token expired or is invalid
            message.error(intl.formatMessage({ id: "misc.error.generic" }));
          },
        },
      });
    }
  }, []);

  if (!token) {
    return (
      <>
        <VSpacing height={24} />
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

const ConnectedPage = connect((state: ConnectState) => ({
  authenticated: state.auth.authenticated,
}))(EmailChangePage);
ConnectedPage.title = "account.emailchange.title";

export default ConnectedPage;
