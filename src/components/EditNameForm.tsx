import * as React from "react";
import { Form, Input, Button, Row, Col, notification, message } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import Logger from "@/utils/logger";
import { CustomerNameUpdateMutation } from "@/mutations/types/CustomerNameUpdateMutation";
import { ConnectState, Loading } from "@/models/connect";

interface Props {
  id?: string;
  firstName: string;
  lastName: string;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: () => void;
}
const EditNameForm: ConnectRC<Props> = ({
  id,
  firstName,
  lastName,
  loading,
  hideSubmit,
  onSubmit,
  dispatch,
}) => {
  const intl = useIntl();
  const responsive = useResponsive();

  const onFinish = values => {
    Logger.log("Success:", values);
    dispatch?.({
      type: "auth/updateName",
      payload: {
        firstName: values.firstName.trim(),
        lastName: values.lastName.trim(),
        onCompleted: (data: CustomerNameUpdateMutation) => {
          Logger.log(data);

          notification.success({
            message: intl.formatMessage({ id: "misc.save.success" }),
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
      name="editname"
      layout="vertical"
      hideRequiredMark
      initialValues={{ firstName, lastName }}
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

      {!hideSubmit && (
        <Form.Item>
          <Button
            block={!responsive.md}
            type="primary"
            size="large"
            loading={loading.effects["auth/updateName"]}
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
  EditNameForm,
);
