import React from "react";
import { Typography, Row, Col, Button } from "antd";
import { connect, Dispatch, useIntl } from "umi";
import clx from "classnames";
import _ from "lodash";
import { HomeSignupConfig } from ".altrc";
import { ConnectState } from "@/models/connect";
import VSpacing from "./VSpacing";

interface Props extends HomeSignupConfig {
  authenticated: boolean;
  dispatch: Dispatch;
}
const HomeSignupSection: React.FC<Props> = ({
  authenticated,
  buttonText,
  message,
  dispatch,
}) => {
  const intl = useIntl();
  if (authenticated) {
    return null;
  }
  return (
    <Row className="signup-container" justify="center">
      <Col className="center-text">
        <VSpacing height={32} />
        <div>
          <Typography.Text className="center-text" style={{ fontSize: 24 }}>
            {message || "Create Your Account Today"}
          </Typography.Text>
        </div>
        <VSpacing height={32} />
        <Button
          type="primary"
          onClick={() =>
            dispatch({ type: "auth/setAuthModalOpen", payload: { open: true } })
          }
          shape="round"
          size="large"
        >
          {buttonText || intl.formatMessage({ id: "who.signup" })}
        </Button>
        <VSpacing height={32} />
      </Col>
    </Row>
  );
};

export default connect((state: ConnectState) => ({
  authenticated: state.auth.authenticated,
}))(HomeSignupSection);
