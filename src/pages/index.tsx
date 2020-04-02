import React from "react";
import { Typography, Skeleton, Row, Col, Card } from "antd";
import styles from "./index.less";
import { useIntl, Link } from "umi";
import ProductCard from "@/components/ProductCard";
import VSpacing from "@/components/VSpacing";

const HomePage = () => {
  const intl = useIntl();
  const sampleProduct = {
    id: "meow",
    name: "Sample Product",
    slug: "sample-product",
    thumbnail: {
      alt: "sample image text",
      url: "https://via.placeholder.com/512.jpg",
    },
    category: {
      id: "blah",
      name: "Sample Category",
    },
    pricing: {
      priceRange: {
        start: {
          gross: {
            amount: 30,
            currency: "USD",
          },
        },
        stop: {
          gross: {
            amount: 60,
            currency: "USD",
          },
        },
      },
    },
  };
  return (
    <div>
      <div style={{ height: 500, overflow: "hidden" }}>
        <img
          className="full-width"
          alt="banner"
          src="https://via.placeholder.com/512.jpg"
        />
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
