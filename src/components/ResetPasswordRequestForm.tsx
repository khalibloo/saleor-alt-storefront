import * as React from "react";
import { Form, Input, Button, notification, message, Row, Alert } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { APIException } from "@/apollo";

interface Props {
  id?: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const ResetPasswordRequestForm: ConnectRC<Props> = ({
  id,
  hideSubmit,
  loading,
  onSubmit,
  dispatch,
}) => {
  const intl = useIntl();
  const responsive = useResponsive();
  const [form] = Form.useForm();

  const onFinish = values => {
    Logger.log("Success:", values);
    dispatch?.({
      type: "auth/requestPasswordReset",
      payload: {
        email: values.email.trim().toLowerCase(),
        onCompleted: data => {
          Logger.log(data);
          notification.success({
            message: intl.formatMessage({ id: "who.reqResetPwd.success" }),
            description: intl.formatMessage({
              id: "who.reqResetPwd.success.desc",
            }),
          });
          form.resetFields();
          onSubmit?.();
        },
        onError: (err: APIException) => {
          if (err.errors?.find(e => e.code === "NOT_FOUND")) {
            notification.success({
              message: intl.formatMessage({ id: "who.reqResetPwd.success" }),
              description: intl.formatMessage({
                id: "who.reqResetPwd.success.desc",
              }),
            });
            form.resetFields();
            onSubmit?.();
            return;
          }
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
      form={form}
      name="reset-pwd"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Alert
        type="info"
        message={intl.formatMessage({ id: "who.reqResetPwd.info" })}
      />
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

      {!hideSubmit && (
        <Row justify="end">
          <Form.Item>
            <Button
              block={!responsive.md}
              type="primary"
              size="large"
              loading={loading.effects["auth/requestPasswordReset"]}
              htmlType="submit"
            >
              {intl.formatMessage({ id: "who.resetPwd" })}
            </Button>
          </Form.Item>
        </Row>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  ResetPasswordRequestForm,
);
