import * as React from "react";
import { Tabs } from "antd";
import SignupForm from "./SignupForm";
import LoginForm from "./LoginForm";
import { useIntl } from "umi";

interface Props {
  loginFormId?: string;
  signupFormId?: string;
  onAuth?: () => void;
  onForgotPwd?: () => void;
}
const AuthTabs: React.FC<Props> = ({
  loginFormId,
  signupFormId,
  onAuth,
  onForgotPwd,
}) => {
  const intl = useIntl();
  return (
    <Tabs size="large">
      <Tabs.TabPane key="signup" tab={intl.formatMessage({ id: "who.signup" })}>
        <SignupForm id={signupFormId} onSubmit={onAuth} />
      </Tabs.TabPane>
      <Tabs.TabPane key="login" tab={intl.formatMessage({ id: "who.login" })}>
        <LoginForm
          id={loginFormId}
          onSubmit={onAuth}
          onForgotPwd={onForgotPwd}
        />
      </Tabs.TabPane>
    </Tabs>
  );
};

export default AuthTabs;
