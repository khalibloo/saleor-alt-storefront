import React from "react";
import { Typography, Row, Col } from "antd";
import { useRouteMatch, useIntl } from "umi";

import VSpacing from "@/components/VSpacing";
import ProductCard from "@/components/ProductCard";
import { sampleCategory, sampleProduct } from "@/sampleData";

import styles from "./id.less";

const CategoryDetailPage: React.FC = () => {
  const intl = useIntl();
  const {
    params: { id },
  } = useRouteMatch();
  // TODO: fetch category
  const category = sampleCategory;
  return (
    <div>
      <div className={styles.banner}>
        <img
          src={category.backgroundImage.url}
          alt={category.backgroundImage.alt}
          className="full-width"
        />
      </div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Row gutter={24}>
            <Col span={6}>
              <Typography.Title level={3}>
                {intl.formatMessage({ id: "search.filters" })}...
              </Typography.Title>
            </Col>
            <Col span={18}>
              <Typography.Title level={1}>
                {category.name}
              </Typography.Title>
              <Row gutter={[24, 24]}>
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
                <Col>
                  <ProductCard product={sampleProduct} />
                </Col>
                <Col>
                  <ProductCard product={sampleProduct} />
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

export default CategoryDetailPage;
