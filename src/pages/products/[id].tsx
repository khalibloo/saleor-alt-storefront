import React from "react";
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
} from "antd";
import clx from "classnames";
import { Helmet } from "react-helmet";
import RichTextContent from "@/components/RichTextContent";
import AspectRatio from "@/components/AspectRatio";
import VSpacing from "@/components/VSpacing";
import styles from "./id.less";
import { useIntl } from "umi";
import { formatPrice, formatTitle, getScreenSize } from "@/utils/utils";
import ProductCard from "@/components/ProductCard";
import { sampleProduct } from "@/sampleData";
import { ListGridType } from "antd/lib/list";
import { useResponsive, useSize } from "@umijs/hooks";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const ProductDetailPage = () => {
  const intl = useIntl();
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);
  const [imgSize, imgRef] = useSize<HTMLDivElement>();
  const [thumbsColSize, thumbsColRef] = useSize<HTMLDivElement>();
  const product = sampleProduct;
  const suggestions = [
    { ...sampleProduct, id: 1 },
    { ...sampleProduct, id: 2 },
    { ...sampleProduct, id: 3 },
    { ...sampleProduct, id: 4 },
    { ...sampleProduct, id: 5 },
    { ...sampleProduct, id: 6 },
  ];
  const productGrid: ListGridType = {
    gutter: 24,
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 6,
  };
  const currency = product.pricing?.priceRange?.start?.gross.currency as string;
  const minPrice = product.pricing?.priceRange?.start?.gross.amount as number;
  const maxPrice = product.pricing?.priceRange?.stop?.gross.amount as number;

  const thumb = (
    <div>
      <AspectRatio width={1} height={1} noMask>
        <Button className="full-width full-height no-padding">
          <img
            className="full-width"
            alt={product.thumbnail?.alt as string}
            src={product.thumbnail?.url}
          />
        </Button>
      </AspectRatio>
      <VSpacing height={8} />
    </div>
  );

  const priceLabel = (
    <Typography.Title className="center-text" level={3}>
      {formatPrice(currency, minPrice, maxPrice)}
    </Typography.Title>
  );

  const qty = (
    <Row justify="center" gutter={36}>
      <Col>
        <Typography.Title level={4}>Qty: </Typography.Title>
      </Col>
      <Col span={8}>
        <InputNumber
          className="full-width"
          defaultValue={1}
          size="large"
          min={1}
          max={10}
        />
      </Col>
    </Row>
  );

  const addToCartBtn = (
    <Button id="add-to-cart-btn" block size="large" type="primary">
      {intl.formatMessage({
        id: "products.detail.addToCart",
      })}
    </Button>
  );
  return (
    <div className="vflex flex-grow-1">
      <Helmet>
        <title>{formatTitle(product.name)}</title>
      </Helmet>
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
                      overflowY: "scroll",
                    }}
                  >
                    <div ref={thumbsColRef}>
                      {thumb}
                      {thumb}
                      {thumb}
                      {thumb}
                      {thumb}
                      {thumb}
                      {thumb}
                      {thumb}
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
                      <img
                        className="full-width"
                        alt={product.thumbnail?.alt as string}
                        src={product.thumbnail?.url}
                      />
                    </AspectRatio>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col span={12} xs={24} sm={24} md={24} lg={12} xl={12} xxl={12}>
              {!responsive.lg && <VSpacing height={24} />}
              <Typography.Title
                id="product-name"
                className={clx({ ["center-text"]: !responsive.lg })}
                level={1}
              >
                {product.name}
              </Typography.Title>
              <div id="product-desc">
                <RichTextContent
                  contentJson={product.descriptionJson}
                  lines={10}
                />
              </div>
              <VSpacing height={!responsive.lg ? 8 : 36} />
              <Row justify="center">
                <Col span={14}>
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
                </Col>
              </Row>
              <VSpacing height={!responsive.lg ? 8 : 24} />
              <Row justify="center">
                <Col span={14}>
                  <Select
                    className="full-width"
                    size="large"
                    placeholder="Collar"
                  >
                    <Select.Option value="XS">Round</Select.Option>
                    <Select.Option value="S">V-Neck</Select.Option>
                  </Select>
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
            <Typography.Title level={1} id="product-suggestions-title">
              {intl.formatMessage({ id: "products.detail.suggestions" })}
            </Typography.Title>
          </Row>
          <List
            dataSource={suggestions.slice(0, productGrid[screenSize])}
            grid={productGrid}
            renderItem={productItem => {
              return (
                <List.Item key={productItem.id}>
                  <div className="full-width">
                    <Row justify="center">
                      <Col span={24} style={{ maxWidth: 240 }}>
                        <ProductCard product={productItem} />
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
