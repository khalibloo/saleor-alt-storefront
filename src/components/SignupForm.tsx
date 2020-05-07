import * as React from "react";
import { Form, Input, Checkbox, Button, Row, Col } from "antd";
import { useIntl, Link } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";

interface Props {
  id?: string;
  onSubmit?: () => void;
}
const SignupForm: React.FC<Props> = ({ id, onSubmit }) => {
  const intl = useIntl();
  const responsive = useResponsive();

  const onFinish = values => {
    Logger.log("Success:", values);
    onSubmit?.();
  };

  const onFinishFailed = errorInfo => {
    Logger.log("Failed:", errorInfo);
  };
  return (
    <Form
      id={id}
      name="signup"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={24}>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "who.signup.fname" })}
            name="firstName"
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "who.signup.fname.required",
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "who.signup.lname" })}
            name="lastName"
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "who.signup.lname.required",
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={intl.formatMessage({ id: "who.email" })}
        name="email"
        rules={[
          {
            required: true,
            whitespace: true,
            message: intl.formatMessage({ id: "who.signup.email.required" }),
          },
          {
            type: "email",
            message: intl.formatMessage({ id: "who.signup.email.invalid" }),
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Row gutter={24}>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "who.pwd" })}
            name="password"
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: "who.signup.pwd.required" }),
              },
              {
                min: 8,
                message: intl.formatMessage({ id: "who.signup.pwd.minLength" }),
              },
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            name="confirm"
            label={intl.formatMessage({ id: "who.signup.pwd2" })}
            dependencies={["password"]}
            rules={[
              {
                required: true,
                message: intl.formatMessage({ id: "who.signup.pwd2.required" }),
              },
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    intl.formatMessage({ id: "who.signup.pwd2.match" }),
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        name="agree"
        valuePropName="checked"
        rules={[
          {
            validator: (rule, value) =>
              value
                ? Promise.resolve()
                : Promise.reject(
                    intl.formatMessage({ id: "who.signup.agree.required" }),
                  ),
          },
        ]}
      >
        <Checkbox>
          {intl.formatMessage(
            { id: "who.signup.agree" },
            {
              terms: (
                <Link to="/pages/terms">
                  {intl.formatMessage({ id: "who.terms" })}
                </Link>
              ),
              priv: (
                <Link to="/pages/privacy">
                  {intl.formatMessage({ id: "who.privacyPolicy" })}
                </Link>
              ),
            },
          )}
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button
          block={!responsive.md}
          type="primary"
          size="large"
          htmlType="submit"
        >
          {intl.formatMessage({ id: "who.signup" })}
        </Button>
      </Form.Item>
    </Form>
  );
};

export default SignupForm;
