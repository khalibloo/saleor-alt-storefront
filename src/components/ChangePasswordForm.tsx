import * as React from "react";
import { Form, Input, Button, notification, message } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { PasswordChangeMutation } from "@/mutations/types/PasswordChangeMutation";
import { APIException } from "@/apollo";

interface Props {
  id?: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const ChangePasswordForm: ConnectRC<Props> = ({
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
      type: "auth/changePassword",
      payload: {
        oldPassword: values.oldPassword,
        newPassword: values.password,
        onCompleted: (data: PasswordChangeMutation) => {
          Logger.log(data);
          notification.success({
            message: intl.formatMessage({ id: "misc.save.success" }),
          });
          onSubmit?.();
        },
        onError: (err: APIException) => {
          if (err.errors?.find(e => e.code === "INVALID_PASSWORD")) {
            message.error(
              intl.formatMessage({ id: "settings.changePwd.oldPwd.incorrect" }),
            );
          }
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
      name="change-password"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="oldPassword"
        label={intl.formatMessage({ id: "settings.changePwd.oldPwd" })}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "who.signup.pwd.required" }),
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="password"
        label={intl.formatMessage({ id: "settings.changePwd.newPwd" })}
        dependencies={["oldPassword"]}
        rules={[
          {
            required: true,
            message: intl.formatMessage({ id: "who.signup.pwd.required" }),
          },
          {
            min: 8,
            message: intl.formatMessage({ id: "who.signup.pwd.minLength" }),
          },
          ({ getFieldValue }) => ({
            validator(rule, value) {
              if (!value || getFieldValue("oldPassword") !== value) {
                return Promise.resolve();
              }
              return Promise.reject(
                intl.formatMessage({ id: "settings.changePwd.newPwd.match" }),
              );
            },
          }),
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
        <Form.Item>
          <Button
            block={!responsive.md}
            type="primary"
            size="large"
            loading={loading.effects["auth/changePassword"]}
            htmlType="submit"
          >
            {intl.formatMessage({ id: "misc.saveChanges" })}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  ChangePasswordForm,
);
