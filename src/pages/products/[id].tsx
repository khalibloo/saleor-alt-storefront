import React from "react";
import { Typography, Row, Col, Button, Select, InputNumber } from "antd";
import { Helmet } from "react-helmet";
import RichTextContent from "@/components/RichTextContent";
import AspectRatio from "@/components/AspectRatio";
import VSpacing from "@/components/VSpacing";
import styles from "./id.less";
import { useIntl } from "umi";
import { formatPrice, formatTitle } from "@/utils/utils";
import ProductCard from "@/components/ProductCard";
import { sampleProduct } from "@/sampleData";

const ProductDetailPage = () => {
  const intl = useIntl();
  const currency = sampleProduct.pricing?.priceRange?.start?.gross
    .currency as string;
  const minPrice = sampleProduct.pricing?.priceRange?.start?.gross
    .amount as number;
  const maxPrice = sampleProduct.pricing?.priceRange?.stop?.gross
    .amount as number;
  return (
    <div>
      <Helmet>
        <title>{formatTitle(sampleProduct.name)}</title>
      </Helmet>
      <VSpacing height={48} />
      <Row justify="center" gutter={24}>
        <Col span={22}>
          <Row justify="center" gutter={24}>
            <Col span={12}>
              <Row gutter={8}>
                <Col span={4}>
                  <div style={{ marginBottom: 8 }}>
                    <AspectRatio width={1} height={1} noMask>
                      <Button className="full-width full-height no-padding">
                        <img
                          className="full-width"
                          alt={sampleProduct.thumbnail?.alt as string}
                          src={sampleProduct.thumbnail?.url}
                        />
                      </Button>
                    </AspectRatio>
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <AspectRatio width={1} height={1} noMask>
                      <Button className="full-width full-height no-padding">
                        <img
                          className="full-width"
                          alt={sampleProduct.thumbnail?.alt as string}
                          src={sampleProduct.thumbnail?.url}
                        />
                      </Button>
                    </AspectRatio>
                  </div>
                </Col>
                <Col span={20}>
                  <AspectRatio width={1} height={1}>
                    <img
                      className="full-width"
                      alt={sampleProduct.thumbnail?.alt as string}
                      src={sampleProduct.thumbnail?.url}
                    />
                  </AspectRatio>
                </Col>
              </Row>
            </Col>
            <Col span={12}>
              <Typography.Title level={1} id="product-name">
                {sampleProduct.name}
              </Typography.Title>
              <div id="product-desc">
                <RichTextContent
                  contentJson={sampleProduct.descriptionJson}
                  lines={10}
                />
              </div>
              <VSpacing height={36} />
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
              <VSpacing height={24} />
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
              <VSpacing height={48} />
              <Typography.Title className="center-text" level={2}>
                {formatPrice(currency, minPrice, maxPrice)}
              </Typography.Title>

              <VSpacing height={24} />

              <Row justify="center">
                <Col span={14}>
                  <Row justify="center" gutter={36}>
                    <Col>
                      <Typography.Title level={3}>Qty: </Typography.Title>
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
                </Col>
              </Row>

              <VSpacing height={24} />

              <Row justify="center">
                <Col span={14}>
                  <Button
                    id="add-to-cart-btn"
                    block
                    className={styles.addToCartBtn}
                    size="large"
                    shape="round"
                    type="primary"
                  >
                    {intl.formatMessage({ id: "products.detail.addToCart" })}
                  </Button>
                </Col>
              </Row>
              <VSpacing height={24} />
            </Col>
          </Row>
        </Col>
      </Row>

      <VSpacing height={48} />

      <Row justify="center">
        <Col>
          <Row justify="center">
            <Typography.Title level={1} id="product-suggestions-title">
              {intl.formatMessage({ id: "products.detail.suggestions" })}
            </Typography.Title>
          </Row>
          <Row gutter={24} id="product-suggestions-row">
            <Col>
              <ProductCard product={sampleProduct} />
            </Col>
            <Col>
              <ProductCard product={sampleProduct} />
            </Col>
            <Col>
              <ProductCard product={sampleProduct} />
            </Col>
            <Col>
              <ProductCard product={sampleProduct} />
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

export default ProductDetailPage;
