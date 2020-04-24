import * as React from "react";
import { Form, Input, Checkbox, Button } from "antd";
import { useIntl } from "umi";

interface Props {
  onSubmit?: () => void;
}
const LoginForm: React.FC<Props> = props => {
  const { onSubmit } = props;
  const intl = useIntl();

  const onFinish = values => {
    console.log("Success:", values);
    onSubmit?.();
  };

  const onFinishFailed = errorInfo => {
    console.log("Failed:", errorInfo);
  };
  return (
    <Form
      name="login"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item label={intl.formatMessage({ id: "who.email" })} name="email">
        <Input />
      </Form.Item>

      <Form.Item label={intl.formatMessage({ id: "who.pwd" })} name="password">
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked">
        <Checkbox>{intl.formatMessage({ id: "who.login.remember" })}</Checkbox>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          {intl.formatMessage({ id: "who.login" })}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
