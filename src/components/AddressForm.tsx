import * as React from "react";
import {
  Form,
  Input,
  Button,
  Row,
  Col,
  notification,
  message,
  Select,
} from "antd";
import { useIntl, ConnectRC, connect } from "umi";
import { useResponsive } from "@umijs/hooks";
import { countries as countriesObj, Country } from "countries-list";
import countries from "@/countries";
import { parsePhoneNumberFromString } from "libphonenumber-js";
import Logger from "@/utils/logger";
import { ConnectState, Loading } from "@/models/connect";
import { AddressInput } from "@/globalTypes";
import { UserAddressCreateMutation } from "@/mutations/types/UserAddressCreateMutation";
import { APIException } from "@/apollo";
import { AddressDetails } from "@/fragments/types/AddressDetails";

interface Props {
  authenticated: boolean;
  id?: string;
  firstName?: string;
  lastName?: string;
  address?: AddressDetails;
  hideSubmit?: boolean;
  loading: Loading;
  onSubmit?: (address: AddressInput) => void;
}
const AddressForm: ConnectRC<Props> = ({
  authenticated,
  id,
  firstName,
  lastName,
  address,
  loading,
  hideSubmit,
  onSubmit,
  dispatch,
}) => {
  const intl = useIntl();
  const responsive = useResponsive();
  const isEditing = address?.id != null;

  const onFinish = values => {
    Logger.log("Success:", values);
    const addressData: AddressInput = {
      firstName: values.firstName.trim(),
      lastName: values.lastName.trim(),
      phone: parsePhoneNumberFromString(values.phone)?.formatInternational(),
      companyName: values.companyName,
      streetAddress1: values.streetAddress1,
      streetAddress2: values.streetAddress2,
      city: values.city,
      postalCode: values.postalCode,
      country: values.country,
      countryArea: values.countryArea,
    };

    if (!authenticated) {
      onSubmit?.(addressData);
      return;
    }
    dispatch?.({
      type: isEditing ? "auth/updateAddress" : "auth/createAddress",
      payload: {
        id: isEditing ? address?.id : undefined,
        address: addressData,
        onCompleted: (data: UserAddressCreateMutation) => {
          Logger.log(data);
          notification.success({
            message: intl.formatMessage({ id: "misc.save.success" }),
          });
          onSubmit?.(addressData);
        },
        onError: (err: APIException) => {
          if (
            err.errors?.find(
              e => e.code === "INVALID" && e.field === "postalCode",
            )
          ) {
            message.error(
              intl.formatMessage({
                id: "form.address.postalCode.invalid",
              }),
            );
          } else {
            message.error(
              intl.formatMessage({
                id: "form.address.fail",
              }),
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
      name="edit-name"
      layout="vertical"
      hideRequiredMark
      initialValues={{
        ...address,
        country: address?.country?.code,
        firstName: address?.firstName || firstName,
        lastName: address?.lastName || lastName,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Row gutter={24}>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "who.signup.fname" })}
            name="firstName"
            validateFirst
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
            validateFirst
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
      <Row gutter={24}>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "form.address.phone" })}
            name="phone"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "form.address.phone.required",
                }),
              },
              () => ({
                validator(rule, value) {
                  if (!value || parsePhoneNumberFromString(value)?.isValid()) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    intl.formatMessage({
                      id: "form.address.phone.invalid",
                    }),
                  );
                },
              }),
            ]}
          >
            <Input type="tel" />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={`${intl.formatMessage({
              id: "form.address.companyName",
            })} (${intl.formatMessage({ id: "form.optional" })})`}
            name="companyName"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item
        label={intl.formatMessage({ id: "form.address.streetAddress1" })}
        name="streetAddress1"
      >
        <Input />
      </Form.Item>

      <Form.Item
        label={intl.formatMessage({ id: "form.address.streetAddress2" })}
        name="streetAddress2"
      >
        <Input />
      </Form.Item>

      <Row gutter={24}>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "form.address.city" })}
            name="city"
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "form.address.city.required",
                }),
              },
            ]}
          >
            <Input type="tel" />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "form.address.state" })}
            name="countryArea"
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "form.address.state.required",
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "form.address.postalCode" })}
            name="postalCode"
            validateFirst
            rules={[
              {
                required: true,
                whitespace: true,
                message: intl.formatMessage({
                  id: "form.address.postalCode.required",
                }),
              },
              {
                len: 5,
                whitespace: true,
                message: intl.formatMessage({
                  id: "form.address.postalCode.len",
                }),
              },
              {
                pattern: /^\d+$/,
                message: intl.formatMessage({
                  id: "form.address.postalCode.type",
                }),
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Col>
        <Col span={12} xs={24} sm={12} md={12} lg={12} xl={12} xxl={12}>
          <Form.Item
            label={intl.formatMessage({ id: "form.address.country" })}
            name="country"
          >
            <Select
              showSearch
              optionFilterProp="children"
              filterOption={(input, option) => {
                const optionStr = (countriesObj[option?.value] as Country).name
                  .toLowerCase()
                  .substr(0, input.length);

                return (
                  new Intl.Collator(navigator.language.substr(0, 2), {
                    sensitivity: "base",
                    usage: "search",
                  }).compare(optionStr, input.toLowerCase()) === 0
                );
              }}
            >
              {countries.map(c => (
                <Select.Option key={c.code} value={c.code}>
                  {c.name}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>

      {!hideSubmit && (
        <Form.Item>
          <Button
            block={!responsive.md}
            type="primary"
            size="large"
            loading={loading.effects["auth/createAddress"]}
            htmlType="submit"
          >
            {intl.formatMessage({ id: "misc.save" })}
          </Button>
        </Form.Item>
      )}
    </Form>
  );
};

export default connect((state: ConnectState) => ({
  authenticated: state.auth.authenticated,
  loading: state.loading,
}))(AddressForm);
