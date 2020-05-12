import * as React from "react";
import { Form, Input, Button, notification, message } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { APIException } from "@/apollo";
import { UserRequestDeactivationMutation } from "@/mutations/types/UserRequestDeactivationMutation";
import { FrownOutlined } from "@ant-design/icons";

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
      type: "auth/requestAccountDeactivation",
      payload: {
        onCompleted: (data: UserRequestDeactivationMutation) => {
          Logger.log(data);
          notification.error({
            message: intl.formatMessage({
              id: "account.deactivate.request.success",
            }),
            description: intl.formatMessage({
              id: "account.deactivate.request.success.desc",
            }),
            duration: 5,
            icon: <FrownOutlined />,
          });
          onSubmit?.();
        },
        onError: (err: APIException) => {},
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
      name="account-request-deactivation"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label={intl.formatMessage({ id: "account.deactivate.challenge" })}
        name="challenge"
        rules={[
          {
            required: true,
            message: intl.formatMessage({
              id: "account.deactivate.challenge.match",
            }),
          },
          () => ({
            validator(rule, value) {
              if (
                !value ||
                value.toLowerCase() ===
                  intl
                    .formatMessage({
                      id: "account.deactivate.challenge.answer",
                    })
                    .toLowerCase()
              ) {
                return Promise.resolve();
              }
              return Promise.reject(
                intl.formatMessage({
                  id: "account.deactivate.challenge.match",
                }),
              );
            },
          }),
        ]}
      >
        <Input placeholder="confirm" />
      </Form.Item>

      {!hideSubmit && (
        <Form.Item>
          <Button
            block={!responsive.md}
            type="primary"
            size="large"
            loading={loading.effects["auth/requestAccountDeactivation"]}
            htmlType="submit"
          >
            {intl.formatMessage({ id: "settings.shutdownAccount" })}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  SignupForm,
);
