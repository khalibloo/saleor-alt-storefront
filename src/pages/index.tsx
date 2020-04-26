import React from "react";
import { Typography, Row, Col, List } from "antd";
import styles from "./index.less";
import { useIntl, Link } from "umi";
import ProductCard from "@/components/ProductCard";
import VSpacing from "@/components/VSpacing";
import { sampleProduct } from "@/sampleData";
import placeholderImg from "@/res/img/512.jpg";
import { ListGridType } from "antd/lib/list";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";

const HomePage = () => {
  const intl = useIntl();
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);
  const row1 = [
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
  return (
    <div>
      <div className="mask" style={{ height: 500 }}>
        <Link to="/collections/meow">
          <img className="full-width" alt="banner" src={placeholderImg} />
        </Link>
      </div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Row justify="center">
            <Typography.Title className="center-text" level={1}>
              Welcome to Alt Storefront
            </Typography.Title>
          </Row>
          <List
            dataSource={row1.slice(0, productGrid[screenSize])}
            grid={productGrid}
            renderItem={product => {
              return (
                <List.Item key={product.id}>
                  <div className="full-width">
                    <Row justify="center">
                      <Col span={24} style={{ maxWidth: 240 }}>
                        <ProductCard product={product} />
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
    </div>
  );
};

HomePage.title = "site.title";
export default HomePage;
