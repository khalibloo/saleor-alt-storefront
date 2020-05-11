import * as React from "react";
import {
  Form,
  Input,
  Checkbox,
  Button,
  Row,
  Col,
  notification,
  message,
} from "antd";
import { useIntl, Link, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { UserRegisterMutation } from "@/mutations/types/UserRegisterMutation";
import { APIException } from "@/apollo";

interface Props {
  id?: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const SignupForm: ConnectRC<Props> = ({
  id,
  hideSubmit,
  loading,
  onSubmit,
  dispatch,
}) => {
  const intl = useIntl();
  const responsive = useResponsive();

  const onFinish = values => {
    Logger.log("Success:", values);
    dispatch?.({
      type: "auth/signup",
      payload: {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        email: values.email.trim().toLowerCase(),
        password: values.password,
        remember: values.remember,
        onCompleted: (data: UserRegisterMutation) => {
          Logger.log(data);
          notification.success({
            message: intl.formatMessage({ id: "who.signup.success" }),
          });
          if (data.accountRegister?.requiresConfirmation) {
            notification.success({
              message: intl.formatMessage({ id: "who.signup.success.confirm" }),
              description: intl.formatMessage({
                id: "who.signup.success.confirm.desc",
              }),
            });
          }
          onSubmit?.();
        },
        onError: (err: APIException) => {
          if (err.errors?.find(e => e.code === "UNIQUE")) {
            message.error(
              intl.formatMessage({ id: "who.signup.email.unique" }),
            );
          }
        },
      },
    });
  };

  const onFinishFailed = errorInfo => {
    Logger.log("Failed:", errorInfo);
    message.error(intl.formatMessage({ id: "misc.form.invalid" }));
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
              {
                min: 2,
                transform: value => value.trim(),
                message: intl.formatMessage({
                  id: "who.signup.name.min",
                }),
              },
              {
                max: 100,
                transform: value => value.trim(),
                message: intl.formatMessage({
                  id: "who.signup.name.max",
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
              {
                min: 2,
                transform: value => value.trim(),
                message: intl.formatMessage({
                  id: "who.signup.name.min",
                }),
              },
              {
                max: 100,
                transform: value => value.trim(),
                message: intl.formatMessage({
                  id: "who.signup.name.max",
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
                <a
                  href="/pages/terms"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {intl.formatMessage({ id: "who.terms" })}
                </a>
              ),
              priv: (
                <a
                  href="/pages/privacy"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  {intl.formatMessage({ id: "who.privacyPolicy" })}
                </a>
              ),
            },
          )}
        </Checkbox>
      </Form.Item>

      {!hideSubmit && (
        <Form.Item>
          <Button
            block={!responsive.md}
            type="primary"
            size="large"
            loading={loading.effects["auth/signup"]}
            htmlType="submit"
          >
            {intl.formatMessage({ id: "who.signup" })}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  SignupForm,
);
