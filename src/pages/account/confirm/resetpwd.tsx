import React, { useEffect } from "react";
import { useIntl, useLocation, history, connect, ConnectRC, Link } from "umi";
import { Button, Card, Col, Result, Row, Typography } from "antd";
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

  return (
    <div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Typography.Title id="page-heading" className="text-center" level={1}>
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
