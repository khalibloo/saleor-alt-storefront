import React, { useEffect } from "react";
import { useIntl, useLocation, history, connect, ConnectRC } from "umi";
import { Alert, Card, Col, Row, Typography } from "antd";
import ResetPasswordForm from "@/components/ResetPasswordForm";
import { ConnectState } from "@/models/connect";
import VSpacing from "@/components/VSpacing";

interface Props {
  authenticated: boolean;
}
const PasswordResetPage: ConnectRC<Props> = ({ authenticated, dispatch }) => {
  const intl = useIntl();
  const location = useLocation();
  const query = location.query || {};
  const { email, token } = query;
  useEffect(() => {
    if (authenticated) {
      history.push("/");
    }
  }, []);

  if (!token || !email) {
    return (
      <Alert
        type="error"
        message={intl.formatMessage({ id: "who.resetPwd.invalidUrl" })}
      />
    );
  }

  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "account.resetpwd.heading" })}
          </Typography.Title>
          <Row justify="center">
            <Col span={8} xs={24} sm={24} md={16} lg={12} xl={10} xxl={8}>
              <Card>
                <ResetPasswordForm email={email} token={token} />
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

const ConnectedPage = connect((state: ConnectState) => ({
  authenticated: state.auth.authenticated,
}))(PasswordResetPage);
ConnectedPage.title = "account.resetpwd.title";

export default ConnectedPage;
