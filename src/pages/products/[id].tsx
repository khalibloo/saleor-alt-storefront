import React, { useState, createRef, useEffect } from "react";
import {
  Typography,
  Row,
  Col,
  Button,
  Select,
  InputNumber,
  List,
  Affix,
  Card,
  Skeleton,
  Carousel,
} from "antd";
import clx from "classnames";
import { Helmet } from "react-helmet";
import RichTextContent from "@/components/RichTextContent";
import AspectRatio from "@/components/AspectRatio";
import VSpacing from "@/components/VSpacing";
import styles from "./id.less";
import { useIntl, useParams } from "umi";
import { formatPrice, formatTitle, getScreenSize } from "@/utils/utils";
import ProductCard from "@/components/ProductCard";
import { ListGridType } from "antd/lib/list";
import { useResponsive, useSize } from "@umijs/hooks";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { useQuery } from "@apollo/react-hooks";
import {
  productDetailQuery,
  productDetailQueryVariables,
} from "@/queries/types/productDetailQuery";
import { PRODUCT_DETAIL_PAGE_QUERY } from "@/queries/productDetail";
import SkeletonDiv from "@/components/SkeletonDiv";
import _ from "lodash";

const ProductDetailPage = () => {
  const carouselRef = createRef<Carousel>();

  const intl = useIntl();
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
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);
  const [imgSize, imgRef] = useSize<HTMLDivElement>();
  const [thumbsColSize, thumbsColRef] = useSize<HTMLDivElement>();

  // if we navigate to different product, scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const suggestions = data?.product?.category?.products?.edges;
  const productGrid: ListGridType = {
    gutter: 24,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 6,
  };
  const currency = data?.product?.pricing?.priceRange?.start?.gross
    .currency as string;
  const minPrice = data?.product?.pricing?.priceRange?.start?.gross
    .amount as number;
  const maxPrice = data?.product?.pricing?.priceRange?.stop?.gross
    .amount as number;

  const priceLabel = (
    <SkeletonDiv
      active
      loading={fetching}
      style={{ height: 21, width: "30%", margin: "auto" }}
    >
      <Typography.Title className="center-text" level={3}>
        {formatPrice(currency, minPrice, maxPrice)}
      </Typography.Title>
    </SkeletonDiv>
  );

  const qty = (
    <Row justify="center" gutter={36}>
      <Col>
        <SkeletonDiv
          active
          loading={fetching}
          style={{ height: 24, width: 100 }}
        >
          <Typography.Title level={4}>Qty: </Typography.Title>
        </SkeletonDiv>
      </Col>
      <Col span={8}>
        <SkeletonDiv active loading={fetching} style={{ height: 40 }}>
          <InputNumber
            className="full-width"
            defaultValue={1}
            size="large"
            min={1}
            max={10}
          />
        </SkeletonDiv>
      </Col>
    </Row>
  );

  const addToCartBtn = (
    <Button
      id="add-to-cart-btn"
      block
      disabled={fetching}
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
      {data?.product?.name && (
        <Helmet>
          <title>{formatTitle(data?.product?.name)}</title>
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
                          className="icon-btn"
                          onClick={() =>
                            document
                              .getElementById("thumbsContainer")
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
                    id="thumbsContainer"
                    style={{
                      height: imgSize.height ? imgSize.height - 80 : undefined,
                      overflowY: "auto",
                    }}
                  >
                    <div ref={thumbsColRef}>
                      {(fetching
                        ? _.fill(Array(3), null)
                        : data?.product?.images
                      )?.map((image, i) => (
                        <div key={image?.id || i}>
                          <AspectRatio width={1} height={1} noMask>
                            <Button
                              className={clx(
                                "full-width full-height no-padding",
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
                      ))}
                    </div>
                  </div>
                  {thumbsColSize.height &&
                    imgSize.height &&
                    thumbsColSize.height > imgSize.height && (
                      <>
                        <VSpacing height={8} />
                        <Button
                          block
                          className="icon-btn"
                          onClick={() =>
                            document
                              .getElementById("thumbsContainer")
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
                          {data?.product?.images?.map(image => (
                            <div key={image?.id}>
                              <img
                                className="full-width"
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
                  {data?.product?.name}
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
                    contentJson={data?.product?.descriptionJson}
                    lines={10}
                  />
                </Skeleton>
              </div>
              <VSpacing height={!responsive.lg ? 8 : 36} />
              <Row justify="center">
                <Col span={14}>
                  <SkeletonDiv active loading={fetching} style={{ height: 40 }}>
                    <Select
                      className="full-width"
                      size="large"
                      placeholder="Size"
                    >
                      <Select.Option value="XS">XS</Select.Option>
                      <Select.Option value="S">S</Select.Option>
                      <Select.Option value="M">M</Select.Option>
                      <Select.Option value="L">L</Select.Option>
                      <Select.Option value="Elephant">Elephant</Select.Option>
                      <Select.Option value="T-Rex">T-Rex</Select.Option>
                      <Select.Option value="Dragon">Dragon</Select.Option>
                    </Select>
                  </SkeletonDiv>
                </Col>
              </Row>
              <VSpacing height={!responsive.lg ? 8 : 24} />
              <Row justify="center">
                <Col span={14}>
                  <SkeletonDiv active loading={fetching} style={{ height: 40 }}>
                    <Select
                      className="full-width"
                      size="large"
                      placeholder="Collar"
                    >
                      <Select.Option value="XS">Round</Select.Option>
                      <Select.Option value="S">V-Neck</Select.Option>
                    </Select>
                  </SkeletonDiv>
                </Col>
              </Row>
              {responsive.lg && (
                <>
                  <VSpacing height={48} />
                  {priceLabel}
                  <VSpacing height={24} />

                  <Row justify="center">
                    <Col span={14}>{qty}</Col>
                  </Row>
                  <VSpacing height={24} />

                  <Row justify="center">
                    <Col span={14}>{addToCartBtn}</Col>
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
                <Col span={20}>{qty}</Col>
              </Row>
            </div>
            <Row>{addToCartBtn}</Row>
          </Card>
        </Affix>
      )}
    </div>
  );
};

export default ProductDetailPage;
