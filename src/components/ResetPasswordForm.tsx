import * as React from "react";
import { Form, Input, Button, notification, message, Row } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { PasswordResetMutation } from "@/mutations/types/PasswordResetMutation";
import { APIException } from "@/apollo";

interface Props {
  email: string;
  token: string;
  id?: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const ResetPasswordForm: ConnectRC<Props> = ({
  email,
  token,
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
      type: "auth/resetPassword",
      payload: {
        email,
        password: values.password,
        token,
        onCompleted: (data: PasswordResetMutation) => {
          Logger.log(data);
          notification.success({
            message: intl.formatMessage({ id: "who.resetPwd.success" }),
            description: intl.formatMessage({
              id: "who.resetPwd.success.desc",
            }),
          });
          onSubmit?.();
        },
        onError: (err: APIException) => {
          message.error(intl.formatMessage({ id: "misc.error.generic" }));
        },
      },
    });
  };

  const onFinishFailed = errorInfo => {
    Logger.log("Failed:", errorInfo);
    message.error(intl.formatMessage({ id: "form.invalid" }));
  };
  return (
    <Form
      id={id}
      name="reset-password"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="password"
        label={intl.formatMessage({ id: "settings.changePwd.newPwd" })}
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

      {!hideSubmit && (
        <Row justify="end">
          <Form.Item>
            <Button
              block={!responsive.md}
              type="primary"
              size="large"
              loading={loading.effects["auth/resetPassword"]}
              htmlType="submit"
            >
              {intl.formatMessage({ id: "misc.saveChanges" })}
            </Button>
          </Form.Item>
        </Row>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  ResetPasswordForm,
);
