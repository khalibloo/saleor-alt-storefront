import * as React from "react";
import { Form, Input, Button, notification, message } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { requestEmailChange } from "@/mutations/types/requestEmailChange";

interface Props {
  id?: string;
  email: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const ChangeEmailForm: ConnectRC<Props> = ({
  id,
  email,
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
      type: "auth/changeEmail",
      payload: {
        email: values.email.trim().toLowerCase(),
        password: values.password,
        onCompleted: (data: requestEmailChange) => {
          Logger.log(data);
          notification.success({
            message: intl.formatMessage({ id: "misc.save.success" }),
            description: intl.formatMessage({
              id: "who.signup.success.confirm.desc",
            }),
          });
          onSubmit?.();
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
      name="change-email"
      layout="vertical"
      hideRequiredMark
      initialValues={{ email }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={intl.formatMessage({ id: "profile.changeEmail.newEmail" })}
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
          () => ({
            validator(rule, value) {
              if (
                !value ||
                value.toLowerCase().trim() !== email.toLowerCase().trim()
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                intl.formatMessage({
                  id: "profile.changeEmail.newEmail.match",
                }),
              );
            },
          }),
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={intl.formatMessage({ id: "who.pwd.reenter" })}
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

      {!hideSubmit && (
        <Form.Item>
          <Button
            block={!responsive.md}
            type="primary"
            size="large"
            loading={loading.effects["auth/changeEmail"]}
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
  ChangeEmailForm,
);
