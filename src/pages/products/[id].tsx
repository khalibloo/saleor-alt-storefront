import React, { useState, createRef, useEffect } from "react";
import {
  Typography,
  Row,
  Col,
  Button,
  Select,
  List,
  Affix,
  Card,
  Skeleton,
  Carousel,
  notification,
} from "antd";
import clx from "classnames";
import { Helmet } from "react-helmet";
import RichTextContent from "@/components/RichTextContent";
import AspectRatio from "@/components/AspectRatio";
import VSpacing from "@/components/VSpacing";
import styles from "./id.less";
import { useIntl, useParams, useDispatch, connect, ConnectRC } from "umi";
import { formatPrice, formatTitle, getScreenSize } from "@/utils/utils";
import ProductCard from "@/components/ProductCard";
import { ListGridType } from "antd/lib/list";
import { useResponsive, useSize } from "@umijs/hooks";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/client";
import {
  productDetailQuery,
  productDetailQueryVariables,
  productDetailQuery_product_variants,
} from "@/queries/types/productDetailQuery";
import { PRODUCT_DETAIL_PAGE_QUERY } from "@/queries/productDetail";
import SkeletonDiv from "@/components/SkeletonDiv";
import _ from "lodash";
import { ConnectState, Loading } from "@/models/connect";
import NumberInput from "@/components/NumberInput";

interface AttrValue {
  id: string;
  name: string;
}
interface VariantAttr {
  id: string;
  name: string;
  values: AttrValue[];
  selection: string | undefined;
}
interface Props {
  loading: Loading;
}
const ProductDetailPage: ConnectRC<Props> = ({ loading }) => {
  const carouselRef = createRef<Carousel>();

  const intl = useIntl();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading: fetching, error, data } = useQuery<
    productDetailQuery,
    productDetailQueryVariables
  >(PRODUCT_DETAIL_PAGE_QUERY, {
    variables: {
      productID: id as string,
    },
  });
  const [selectedImg, setSelectedImg] = useState(0);
  const [variantAttrs, setVariantAttrs] = useState<VariantAttr[]>([]);
  const [
    selectedVariant,
    setSelectedVariant,
  ] = useState<productDetailQuery_product_variants | null>(null);
  const [qty, setQty] = useState(1);
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);
  const [imgSize, imgRef] = useSize<HTMLDivElement>();
  const [thumbsColSize, thumbsColRef] = useSize<HTMLDivElement>();

  const product = data?.product;

  useEffect(() => {
    // gather variant attributes
    let vAttrs: VariantAttr[] = [];
    product?.variants?.forEach(v => {
      v?.attributes.forEach(attr => {
        // if it's not an empty attribute
        if (attr.values.length > 0) {
          // if already in our array
          const matchIndex = vAttrs.findIndex(a => a.id === attr.attribute.id);
          const entry = vAttrs[matchIndex];
          if (!entry) {
            vAttrs.push({
              id: attr.attribute.id,
              name: attr.attribute.name as string,
              values: [attr.values[0] as AttrValue],
              selection: undefined,
            });
          } else if (
            !entry.values.find(
              entryValue => entryValue.id === attr.values[0]?.id,
            )
          ) {
            vAttrs[matchIndex] = {
              ...entry,
              values: [...entry.values, attr.values[0] as AttrValue],
            };
          }
        }
      });
    });

    // set default selections
    vAttrs = vAttrs.map(vAttr => ({
      ...vAttr,
      selection: vAttr.values.length === 1 ? vAttr.values[0].id : undefined,
    }));
    setVariantAttrs(vAttrs);
  }, [data]);

  // update selected variant when attribute selection changes
  useEffect(() => {
    setSelectedVariant(null);
    const variants = product?.variants;
    if (variants) {
      if (variants.length === 1) {
        setSelectedVariant(variants[0]);
        return;
      }
      const selectionLevels = [variants];
      variantAttrs.forEach(vAttr => {
        if (vAttr.selection) {
          const matchingVariants =
            _.last(selectionLevels)?.filter(
              variant =>
                variant?.attributes.find(a => a.attribute.id === vAttr.id)
                  ?.values?.[0]?.id === vAttr.selection,
            ) || [];
          selectionLevels.push(matchingVariants);
        }
      });
      if (selectionLevels && _.last(selectionLevels)?.length === 1) {
        setSelectedVariant(_.last(selectionLevels)?.[0] || null);
      }
    }
  }, [variantAttrs]);

  // if we navigate to different product, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const suggestions = product?.category?.products?.edges;
  const productGrid: ListGridType = {
    gutter: 24,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 6,
  };

  const images =
    selectedVariant && (selectedVariant.images?.length || 0) > 0
      ? selectedVariant.images
      : product?.images;
  const currency = product?.pricing?.priceRange?.start?.gross
    .currency as string;
  const minPrice = selectedVariant
    ? (selectedVariant.pricing?.price?.gross.amount as number)
    : (product?.pricing?.priceRange?.start?.gross.amount as number);
  const maxPrice = selectedVariant
    ? undefined
    : (product?.pricing?.priceRange?.stop?.gross.amount as number);

  const priceLabel = (
    <SkeletonDiv
      active
      loading={fetching}
      style={{ height: 21, width: "30%", margin: "auto" }}
    >
      <Typography.Title id="price-lbl" className="center-text" level={3}>
        {formatPrice(currency, minPrice, maxPrice)}
      </Typography.Title>
    </SkeletonDiv>
  );

  const qtySelector = (
    <Row id="qty-row" justify="center" gutter={36}>
      <Col>
        <SkeletonDiv
          active
          loading={fetching}
          style={{ height: 24, width: 100 }}
        >
          <Typography.Title id="qty-lbl" level={4}>
            Qty:{" "}
          </Typography.Title>
        </SkeletonDiv>
      </Col>
      <Col span={10} xs={16} sm={10} md={12} lg={14} xl={12} xxl={10}>
        <SkeletonDiv active loading={fetching} style={{ height: 40 }}>
          <NumberInput
            id="qty-fld"
            value={qty}
            disabled={fetching || !selectedVariant}
            min={1}
            max={selectedVariant?.quantityAvailable}
            maxLength={2}
            size="large"
            onChange={setQty}
            decrementBtnProps={{ id: "qty-dec" }}
            incrementBtnProps={{ id: "qty-inc" }}
          />
        </SkeletonDiv>
      </Col>
    </Row>
  );

  const addToCartBtn = (
    <Button
      id="add-to-cart-btn"
      block
      disabled={fetching || !selectedVariant}
      loading={loading.effects["cart/addItem"]}
      onClick={() =>
        dispatch({
          type: "cart/addItem",
          payload: {
            variantId: selectedVariant?.id,
            quantity: qty,
            onCompleted: () => {
              notification.success({
                message: intl.formatMessage({ id: "cart.addItem.success" }),
              });
            },
          },
        })
      }
      size="large"
      type="primary"
    >
      {intl.formatMessage({
        id: "products.detail.addToCart",
      })}
    </Button>
  );
  return (
    <div className="vflex flex-grow-1">
      {product?.name && (
        <Helmet>
          <title>{formatTitle(product?.name)}</title>
        </Helmet>
      )}
      <VSpacing height={!responsive.lg ? 8 : 48} />
      <Row justify="center" gutter={24}>
        <Col span={22}>
          <Row justify="center" gutter={24}>
            <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              <Row gutter={[8, 8]}>
                <Col span={4}>
                  {thumbsColSize.height &&
                    imgSize.height &&
                    thumbsColSize.height > imgSize.height && (
                      <>
                        <Button
                          block
                          id="thumbs-scroll-up-btn"
                          className="icon-btn"
                          onClick={() =>
                            document
                              .getElementById("thumbs-container")
                              ?.scrollBy({
                                top: -100,
                                behavior: "smooth",
                              })
                          }
                        >
                          <UpOutlined />
                        </Button>
                        <VSpacing height={8} />
                      </>
                    )}
                  <div
                    id="thumbs-container"
                    style={{
                      height: imgSize.height ? imgSize.height - 80 : undefined,
                      overflowY: "auto",
                    }}
                  >
                    <div ref={thumbsColRef}>
                      {(fetching ? _.fill(Array(3), null) : images)?.map(
                        (image, i) => (
                          <div key={image?.id || i}>
                            <AspectRatio width={1} height={1} noMask>
                              <Button
                                id={`thumb-btn-${i}`}
                                className={clx(
                                  "full-width full-height no-padding",
                                  "thumb-btns",
                                  {
                                    [styles.selectedBtn]: i === selectedImg,
                                    [styles.unselectedBtn]: i !== selectedImg,
                                  },
                                )}
                                onClick={() => carouselRef.current?.goTo(i)}
                              >
                                <SkeletonDiv active loading={fetching}>
                                  <img
                                    className="full-width"
                                    alt={image?.alt || ""}
                                    src={image?.url}
                                  />
                                </SkeletonDiv>
                              </Button>
                            </AspectRatio>
                            <VSpacing height={8} />
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                  {thumbsColSize.height &&
                    imgSize.height &&
                    thumbsColSize.height > imgSize.height && (
                      <>
                        <VSpacing height={8} />
                        <Button
                          block
                          id="thumbs-scroll-down-btn"
                          className="icon-btn"
                          onClick={() =>
                            document
                              .getElementById("thumbs-container")
                              ?.scrollBy({
                                top: 100,
                                behavior: "smooth",
                              })
                          }
                        >
                          <DownOutlined />
                        </Button>
                      </>
                    )}
                </Col>
                <Col span={20}>
                  <div ref={imgRef}>
                    <AspectRatio width={1} height={1}>
                      <SkeletonDiv active loading={fetching}>
                        <Carousel
                          ref={carouselRef}
                          beforeChange={(current, next) => setSelectedImg(next)}
                        >
                          {images?.map((image, i) => (
                            <div key={image?.id}>
                              <img
                                id={`carousel-img-${i}`}
                                className="full-width carousel-imgs"
                                alt={image?.alt as string}
                                src={image?.url}
                              />
                            </div>
                          ))}
                        </Carousel>
                      </SkeletonDiv>
                    </AspectRatio>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {!responsive.lg && <VSpacing height={24} />}
              <Skeleton
                active
                loading={fetching}
                avatar={false}
                paragraph={{ rows: 1, width: "80%" }}
                title={false}
              >
                <Typography.Title
                  id="product-name"
                  className={clx({ ["center-text"]: !responsive.lg })}
                  level={1}
                >
                  {product?.name}
                </Typography.Title>
              </Skeleton>
              <div id="product-desc">
                <Skeleton
                  active
                  loading={fetching}
                  avatar={false}
                  paragraph={{ rows: 6 }}
                  title={false}
                >
                  <RichTextContent
                    contentJson={product?.descriptionJson}
                    lines={10}
                  />
                </Skeleton>
              </div>
              <VSpacing height={!responsive.lg ? 8 : 36} />
              <Row id="var-select-row" justify="center">
                <Col span={14} xs={18} sm={16} md={14} lg={14} xl={12} xxl={10}>
                  {fetching ? (
                    <>
                      <SkeletonDiv
                        active
                        loading={fetching}
                        style={{ height: 40 }}
                      />
                      <VSpacing height={!responsive.lg ? 8 : 24} />
                      <SkeletonDiv
                        active
                        loading={fetching}
                        style={{ height: 40 }}
                      />
                    </>
                  ) : (
                    variantAttrs.map((vAttr, i) => {
                      return (
                        <Select
                          id={`var-select-${i}`}
                          className={clx("full-width", "var-select")}
                          key={vAttr.id}
                          size="large"
                          placeholder={vAttr.name}
                          onChange={value => {
                            const selection = [...variantAttrs];
                            selection[i] = { ...vAttr, selection: value };
                            setVariantAttrs(selection);
                          }}
                          value={vAttr.selection}
                        >
                          {vAttr.values.map(val => (
                            <Select.Option
                              className={`var-select-${i}-options`}
                              key={val?.id}
                              value={val?.id as string}
                            >
                              {val?.name}
                            </Select.Option>
                          ))}
                        </Select>
                      );
                    })
                  )}
                </Col>
              </Row>
              {responsive.lg && (
                <>
                  <VSpacing height={48} />
                  {priceLabel}
                  <VSpacing height={24} />

                  <Row justify="center">
                    <Col span={14} md={22} lg={14} xl={12} xxl={10}>
                      {qtySelector}
                    </Col>
                  </Row>
                  <VSpacing height={24} />

                  <Row justify="center">
                    <Col span={14} md={22} lg={14} xl={12} xxl={10}>
                      {addToCartBtn}
                    </Col>
                  </Row>
                  <VSpacing height={24} />
                </>
              )}
            </Col>
          </Row>
        </Col>
      </Row>

      <VSpacing height={48} />

      <Row justify="center">
        <Col span={22}>
          <Row justify="center">
            <SkeletonDiv
              active
              loading={fetching}
              style={{
                height: 21,
                width: "50%",
                margin: "auto",
                marginBottom: 16,
              }}
            >
              <Typography.Title level={1} id="product-suggestions-title">
                {intl.formatMessage({ id: "products.detail.suggestions" })}
              </Typography.Title>
            </SkeletonDiv>
          </Row>
          <List
            dataSource={(fetching ? (_.range(4) as any[]) : suggestions)?.slice(
              0,
              productGrid[screenSize],
            )}
            grid={productGrid}
            renderItem={(edge, i) => {
              const productItem = edge.node;
              return (
                <List.Item
                  className="suggestion-list-items"
                  key={productItem?.id || i}
                >
                  <div className="full-width">
                    <Row justify="center">
                      <Col span={24} style={{ maxWidth: 240 }}>
                        <ProductCard loading={fetching} product={productItem} />
                      </Col>
                    </Row>
                  </div>
                </List.Item>
              );
            }}
          />
        </Col>
      </Row>
      <VSpacing height={48} />
      {!responsive.lg && (
        <Affix offsetBottom={0}>
          <Card className="shadow" bodyStyle={{ padding: 0 }} bordered={false}>
            <div className={styles.affixPadding}>
              {priceLabel}
              <Row justify="center">
                <Col span={20}>{qtySelector}</Col>
              </Row>
            </div>
            <Row>{addToCartBtn}</Row>
          </Card>
        </Affix>
      )}
    </div>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  ProductDetailPage,
);
