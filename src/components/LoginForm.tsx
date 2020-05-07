import * as React from "react";
import { Form, Input, Checkbox, Button, notification } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";

interface Props {
  id?: string;
  onSubmit?: () => void;
}
const LoginForm: ConnectRC<Props> = ({ id, onSubmit, dispatch }) => {
  const intl = useIntl();
  const responsive = useResponsive();

  const onFinish = values => {
    Logger.log("Success:", values);
    dispatch?.({
      type: "auth/login",
      payload: {
        email: values.email.trim().toLowerCase(),
        password: values.password,
        remember: values.remember,
        onCompleted: data => {
          Logger.log(data);
          notification.success({ message: "Successfully Logged In" });
          onSubmit?.();
        },
      },
    });
  };

  const onFinishFailed = errorInfo => {
    Logger.log("Failed:", errorInfo);
  };
  return (
    <Form
      id={id}
      name="login"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={intl.formatMessage({ id: "who.email" })}
        name="email"
        rules={[
          {
            required: true,
            whitespace: true,
            message: intl.formatMessage({ id: "who.signup.email.required" }),
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={intl.formatMessage({ id: "who.pwd" })}
        name="password"
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "who.signup.pwd.required" }),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>{intl.formatMessage({ id: "who.login.remember" })}</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          block={!responsive.md}
          type="primary"
          size="large"
          htmlType="submit"
        >
          {intl.formatMessage({ id: "who.login" })}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default connect()(LoginForm);
