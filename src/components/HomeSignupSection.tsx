import React, { useEffect } from "react";
import { Typography, Row, Col, Button } from "antd";
import { connect, Dispatch, useIntl } from "umi";
import { HomeSignupConfig } from ".altrc";
import { ConnectState } from "@/models/connect";
import VSpacing from "./VSpacing";
import config from "@/config";

interface Props extends HomeSignupConfig {
  authenticated: boolean;
  dispatch: Dispatch;
}
const HomeSignupSection: React.FC<Props> = ({
  authenticated,
  buttonText,
  message,
  dispatch,
  googleAnalyticsPromoData,
}) => {
  const intl = useIntl();
  // Google Ecommerce - track promo view
  useEffect(() => {
    if (config.gtmEnabled && googleAnalyticsPromoData) {
      window.dataLayer.push({
        event: "view_promotion",
        ecommerce: {
          ...googleAnalyticsPromoData,
        },
      });
    }
  }, []);
  // Google Ecommerce - track promo click
  const trackPromoClick = () => {
    if (config.gtmEnabled && googleAnalyticsPromoData) {
      window.dataLayer.push({
        event: "select_promotion",
        ecommerce: {
          ...googleAnalyticsPromoData,
        },
      });
    }
  };
  if (authenticated) {
    return null;
  }
  return (
    <Row className="signup-container" justify="center">
      <Col className="text-center">
        <VSpacing height={32} />
        <div>
          <Typography.Text className="text-center text-2xl">
            {message || "Create Your Account Today"}
          </Typography.Text>
        </div>
        <VSpacing height={32} />
        <Button
          type="primary"
          onClick={() => {
            dispatch({
              type: "auth/setAuthModalOpen",
              payload: { open: true },
            });
            trackPromoClick();
          }}
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
