import React from "react";
import { Typography, Row, Col } from "antd";
import { useIntl, useParams } from "umi";

import VSpacing from "@/components/VSpacing";
import ProductCard from "@/components/ProductCard";
import { sampleCategory, sampleProduct } from "@/sampleData";

import styles from "./id.less";

const CollectionDetailPage: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams();
  // TODO: fetch collection
  const collection = sampleCategory;
  return (
    <div>
      <div className={styles.banner}>
        <img
          src={collection.backgroundImage.url}
          alt={collection.backgroundImage.alt}
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
              <Typography.Title level={1}>{collection.name}</Typography.Title>
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

export default CollectionDetailPage;
