import React from "react";
import { Typography, Row, Col, List } from "antd";
import { useIntl, Link } from "umi";
import clx from "classnames";
import ProductCard from "@/components/ProductCard";
import VSpacing from "@/components/VSpacing";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";
import { sampleProduct, sampleCategory } from "@/sampleData";
import { ListGridType } from "antd/lib/list";

import styles from "./index.less";

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
      <div id="banner-container" className={styles.bannerContainer}>
        <Link to="/collections/meow">
          <img
            className={clx("full-width full-height", styles.bannerImg)}
            src={sampleCategory.backgroundImage.url}
            alt={sampleCategory.backgroundImage.alt}
          />
          <Row className="full-height" justify="center" align="middle">
            <Col className={styles.bannerTitleBG}>
              <Typography.Title
                className="center-text no-margin inverse-text"
                level={1}
              >
                {sampleCategory.name}
              </Typography.Title>
            </Col>
          </Row>
        </Link>
      </div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Row justify="center">
            <Typography.Title
              id="welcome-msg"
              className="center-text"
              level={1}
            >
              Welcome to Alt Storefront
            </Typography.Title>
          </Row>
          <List
            dataSource={row1.slice(0, productGrid[screenSize])}
            grid={productGrid}
            renderItem={product => {
              return (
                <List.Item className="product-list-items" key={product.id}>
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
