import * as React from "react";
import { Form, Input, Button, message } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { APIException } from "@/apollo";

interface Props {
  id?: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const GuestForm: ConnectRC<Props> = ({
  id,
  hideSubmit,
  loading,
  onSubmit,
  dispatch,
}) => {
  const intl = useIntl();

  const onFinish = values => {
    Logger.log("Success:", values);
    dispatch?.({
      type: "auth/setGuestEmail",
      payload: {
        email: values.email.trim().toLowerCase(),
        onCompleted: () => {
          onSubmit?.();
        },
        onError: (err: APIException) => {
          message.error(intl.formatMessage({ id: "misc.error" }));
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
      name="guest"
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
          {
            type: "email",
            message: intl.formatMessage({ id: "who.signup.email.invalid" }),
          },
        ]}
      >
        <Input />
      </Form.Item>

      {!hideSubmit && (
        <Form.Item>
          <Button
            htmlType="submit"
            loading={loading.effects["auth/setGuestEmail"]}
            shape="round"
            onClick={() =>
              dispatch?.({
                type: "cart/setGuestCartModalOpen",
                payload: { open: false },
              })
            }
          >
            Continue as a guest
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  GuestForm,
);
