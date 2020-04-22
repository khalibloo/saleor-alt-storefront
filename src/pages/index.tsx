import React from "react";
import { Typography, Row, Col } from "antd";
import styles from "./index.less";
import { useIntl } from "umi";
import ProductCard from "@/components/ProductCard";
import VSpacing from "@/components/VSpacing";
import { sampleProduct } from "@/sampleData";
import placeholderImg from "@/res/img/512.jpg";

const HomePage = () => {
  const intl = useIntl();
  return (
    <div>
      <div style={{ height: 500, overflow: "hidden" }}>
        <img className="full-width" alt="banner" src={placeholderImg} />
      </div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col>
          <Row justify="center">
            <Typography.Title level={1}>
              Welcome to Alt Storefront
            </Typography.Title>
          </Row>
          <Row gutter={24}>
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

HomePage.title = "site.title";
export default HomePage;
