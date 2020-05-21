import React from "react";
import {
  Typography,
  Col,
  Row,
  List,
  Button,
  Card,
  Select,
  Affix,
  notification,
  message,
} from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useIntl, Link, connect, ConnectRC } from "umi";
import VSpacing from "@/components/VSpacing";
import AspectRatio from "@/components/AspectRatio";
import { formatPrice, addressToInput } from "@/utils/utils";
import AddressSelector from "@/components/AddressSelector";
import { useResponsive } from "@umijs/hooks";
import { ConnectState, Loading } from "@/models/connect";
import { cartQuery } from "@/queries/types/cartQuery";
import { CART_PAGE_QUERY } from "@/queries/cart";
import { useQuery } from "@apollo/react-hooks";
import { APIException } from "@/apollo";
import _ from "lodash";
import NumberInput from "@/components/NumberInput";

interface Props {
  loading: Loading;
}
const CartPage: ConnectRC<Props> = ({ loading, dispatch }) => {
  const intl = useIntl();
  const responsive = useResponsive();
  const { loading: fetching, error, data } = useQuery<cartQuery>(
    CART_PAGE_QUERY,
  );
  const checkout = data?.me?.checkout;
  const currency = checkout?.totalPrice?.gross.currency;
  const subtotalPrice = checkout?.subtotalPrice?.gross.amount;
  const shippingPrice = checkout?.shippingPrice?.gross.amount;
  const totalPrice = checkout?.totalPrice?.gross.amount;
  const shippingAddress = checkout?.shippingAddress;
  const shippingMethod = checkout?.shippingMethod;
  // if there's a matching address in our address book
  const matchingShippingAddr = data?.me?.addresses?.find(a => {
    if (shippingAddress && a) {
      return _.isEqual(addressToInput(shippingAddress), addressToInput(a));
    }
  });
  // when shipping addr changes, shipping method can become invalid
  const invalidShippingMethod =
    checkout?.availableShippingMethods.find(
      sm => sm?.id === checkout?.shippingMethod?.id,
    ) === undefined;
  const summary = (
    <Card
      id="summary-card"
      className="shadow"
      bordered={false}
      title={intl.formatMessage({ id: "cart.summary" })}
    >
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text>
            {intl.formatMessage({ id: "cart.subtotal" })}:
          </Typography.Text>
        </Col>
        <Col span={16}>
          <Typography.Text>
            {formatPrice(currency, subtotalPrice)}
          </Typography.Text>
        </Col>
      </Row>
      <VSpacing height={8} />
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text>
            {intl.formatMessage({ id: "cart.shippingAddress" })}:
          </Typography.Text>
        </Col>
        <Col span={16}>
          <AddressSelector
            loading={loading.effects["cart/setShippingAddress"]}
            onChange={value => {
              const addr = data?.me?.addresses?.find(a => a?.id === value);
              if (addr) {
                const address = addressToInput(addr);
                dispatch?.({
                  type: "cart/setShippingAddress",
                  payload: {
                    address,
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
                            id: "cart.shippingAddress.fail",
                          }),
                        );
                      }
                    },
                  },
                });
              }
            }}
            extraAddr={matchingShippingAddr ? undefined : shippingAddress}
            value={
              matchingShippingAddr
                ? matchingShippingAddr.id
                : shippingAddress?.id
            }
          />
        </Col>
      </Row>
      <VSpacing height={8} />
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text>
            {intl.formatMessage({ id: "cart.shippingMethod" })}:
          </Typography.Text>
        </Col>
        <Col span={16}>
          <Select
            className="full-width"
            placeholder={intl.formatMessage({
              id: "misc.pleaseSelect",
            })}
            onChange={value => {
              dispatch?.({
                type: "cart/setShippingMethod",
                payload: {
                  shippingMethodId: value.toString(),
                  onError: (err: APIException) => {
                    message.error(
                      intl.formatMessage({
                        id: "cart.shippingMethod.fail",
                      }),
                    );
                  },
                },
              });
            }}
            value={invalidShippingMethod ? undefined : shippingMethod?.id}
          >
            {data?.me?.checkout?.availableShippingMethods.map(sm => (
              <Select.Option key={sm?.id} value={sm.id}>
                {sm?.name} ({formatPrice(currency, sm?.price?.amount)})
              </Select.Option>
            ))}
          </Select>
        </Col>
      </Row>
      <VSpacing height={8} />
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text>
            {intl.formatMessage({ id: "cart.shippingFee" })}:
          </Typography.Text>
        </Col>
        <Col span={16}>
          <Typography.Text>
            {data?.me?.checkout?.shippingMethod
              ? formatPrice(currency, shippingPrice)
              : "--"}
          </Typography.Text>
        </Col>
      </Row>
      <VSpacing height={24} />
      <Row gutter={16}>
        <Col span={8}>
          <Typography.Text strong>
            {intl.formatMessage({ id: "cart.total" })}:
          </Typography.Text>
        </Col>
        <Col span={16}>
          <Typography.Text strong>
            {formatPrice(currency, totalPrice)}
          </Typography.Text>
        </Col>
      </Row>
      <VSpacing height={24} />
      <Button
        id="checkout-btn"
        block
        disabled={invalidShippingMethod}
        size="large"
        shape="round"
        type="primary"
      >
        {intl.formatMessage({ id: "cart.checkout" })}
      </Button>
    </Card>
  );
  return (
    <div className="vflex flex-grow-1">
      <VSpacing height={24} />
      <Row justify="center" className="flex-grow-1">
        <Col span={22}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {intl.formatMessage({ id: "cart.heading" })}
          </Typography.Title>
          <Row gutter={24} justify="center">
            <Col span={16} xs={24} sm={24} md={20} lg={16} xl={16} xxl={12}>
              <List
                dataSource={data?.me?.checkout?.lines || []}
                renderItem={item => {
                  const currency = item?.variant.pricing?.price?.gross
                    .currency as string;
                  const price = item?.variant.pricing?.price?.gross
                    .amount as number;
                  const qtyAvailable = item?.variant.quantityAvailable || 0;
                  return (
                    <List.Item className="product-list-items" key={item?.id}>
                      <div className="full-width">
                        <Card>
                          <Row gutter={24}>
                            <Col
                              span={4}
                              xs={8}
                              sm={6}
                              md={6}
                              lg={4}
                              xl={4}
                              xxl={4}
                            >
                              <Link to={`/products/${item?.id}`}>
                                <AspectRatio width={1} height={1}>
                                  <img
                                    className="full-width"
                                    alt={
                                      item?.variant.images?.[0]?.alt ||
                                      (item?.variant.product?.thumbnail
                                        ?.alt as string)
                                    }
                                    src={
                                      item?.variant.images?.[0]?.url ||
                                      item?.variant.product?.thumbnail?.url
                                    }
                                  />
                                </AspectRatio>
                              </Link>
                            </Col>
                            <Col
                              span={20}
                              xs={16}
                              sm={18}
                              md={18}
                              lg={20}
                              xl={20}
                              xxl={20}
                            >
                              <Link
                                to={`/products/${item?.variant.product.id}`}
                              >
                                <Typography.Title level={4}>
                                  {item?.variant.product.name}{" "}
                                  <i>({item?.variant.name})</i>
                                </Typography.Title>
                              </Link>
                              <Typography.Title level={4}>
                                {formatPrice(currency, price)}
                              </Typography.Title>
                              <Row gutter={16}>
                                <Col>
                                  <Typography.Text>Qty: </Typography.Text>
                                </Col>
                                <Col style={{ width: 160 }}>
                                  <NumberInput
                                    value={item?.quantity}
                                    disabled={
                                      loading.effects["cart/updateItem"] ||
                                      loading.effects["cart/deleteItem"]
                                    }
                                    min={1}
                                    max={qtyAvailable}
                                    maxLength={2}
                                    onChange={value => {
                                      dispatch?.({
                                        type: "cart/updateItem",
                                        payload: {
                                          variantId: item?.variant.id,
                                          quantity: value,
                                        },
                                      });
                                    }}
                                  />
                                </Col>
                              </Row>
                              <Row justify="end">
                                <Col>
                                  <VSpacing height={8} />
                                  <Button
                                    size="small"
                                    loading={
                                      loading.effects["cart/updateItem"] ||
                                      loading.effects["cart/deleteItem"]
                                    }
                                    onClick={() => {
                                      dispatch?.({
                                        type: "cart/deleteItem",
                                        payload: {
                                          checkoutLineId: item?.id,
                                          onCompleted: () => {
                                            notification.info({
                                              message: intl.formatMessage({
                                                id: "cart.deleteItem.success",
                                              }),
                                            });
                                          },
                                        },
                                      });
                                    }}
                                  >
                                    <DeleteOutlined /> Delete
                                  </Button>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                    </List.Item>
                  );
                }}
              />
            </Col>
            <Col span={8} xs={0} sm={0} md={0} lg={8} xl={8} xxl={8}>
              {summary}
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
      {!responsive.lg && <Affix offsetBottom={0}>{summary}</Affix>}
    </div>
  );
};

const ConnectedPage = connect((state: ConnectState) => ({
  loading: state.loading,
}))(CartPage);
ConnectedPage.title = "cart.title";

export default ConnectedPage;
