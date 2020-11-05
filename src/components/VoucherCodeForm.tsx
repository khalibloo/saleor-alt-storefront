import * as React from "react";
import { Form, Input, Button, notification, message, Row, Col } from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { APIException } from "@/apollo";

interface Props {
  id?: string;
  loading: Loading;
  onSubmit?: () => void;
}
const VoucherCodeForm: ConnectRC<Props> = ({
  id,
  loading,
  onSubmit,
  dispatch,
}) => {
  const intl = useIntl();
  const [form] = Form.useForm();

  const onFinish = values => {
    Logger.log("Success:", values);
    dispatch?.({
      type: "cart/addVoucher",
      payload: {
        voucherCode: values.code.trim(),
        onCompleted: () => {
          form.resetFields();
          notification.success({
            message: intl.formatMessage({ id: "cart.voucherCode.success" }),
          });
          onSubmit?.();
        },
        onError: (err: APIException) => {
          if (err.errors?.find(e => e.code === "VOUCHER_NOT_APPLICABLE")) {
            message.error(
              intl.formatMessage({ id: "cart.voucherCode.inapplicable" }),
            );
          } else if (err.errors?.find(e => e.code === "INVALID")) {
            message.error(
              intl.formatMessage({
                id: "cart.voucherCode.invalid",
              }),
            );
          } else {
            message.error(
              intl.formatMessage({
                id: "misc.error.generic",
              }),
            );
          }
        },
      },
    });
  };

  return (
    <Form
      form={form}
      id={id}
      name="voucher-code"
      layout="vertical"
      hideRequiredMark
      onFinish={onFinish}
    >
      <Row className="flex-no-wrap">
        <Col flex="auto">
          <Form.Item
            className="m-0"
            name="code"
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "cart.voucherCode.required",
                }),
              },
            ]}
          >
            <Input
              placeholder={intl.formatMessage({ id: "cart.voucherCode" })}
            />
          </Form.Item>
        </Col>
        <Col>
          <Form.Item className="m-0">
            <Button
              block
              type="primary"
              loading={loading.effects["cart/addVoucher"]}
              htmlType="submit"
            >
              {intl.formatMessage({ id: "misc.apply" })}
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  VoucherCodeForm,
);
