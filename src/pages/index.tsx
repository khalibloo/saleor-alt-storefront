import React from "react";
import { Typography, Row, Col, List, Skeleton } from "antd";
import { useIntl, Link } from "umi";
import clx from "classnames";
import ProductCard from "@/components/ProductCard";
import VSpacing from "@/components/VSpacing";
import { useQuery } from "@apollo/react-hooks";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";
import { ListGridType } from "antd/lib/list";

import styles from "./index.less";
import { HOME_PAGE_QUERY } from "@/queries/home";
import SkeletonDiv from "@/components/SkeletonDiv";
import _ from "lodash";
import { homePageQuery } from "@/queries/types/homePageQuery";

const HomePage = () => {
  const { loading: fetching, error, data } = useQuery<homePageQuery>(
    HOME_PAGE_QUERY,
  );
  const intl = useIntl();
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);
  const row1 = _.shuffle(data?.shop.homepageCollection?.products?.edges || []);
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
        <SkeletonDiv active loading={fetching}>
          <Link to={`/collections/${data?.shop.homepageCollection?.id}`}>
            <img
              className={clx("full-width full-height", styles.bannerImg)}
              src={data?.shop.homepageCollection?.backgroundImage?.url}
              alt={data?.shop.homepageCollection?.backgroundImage?.alt}
            />
            <Row className="full-height" justify="center" align="middle">
              <Col className={styles.bannerTitleBG}>
                <Typography.Title
                  className="center-text no-margin inverse-text"
                  level={1}
                >
                  {data?.shop.homepageCollection?.name}
                </Typography.Title>
              </Col>
            </Row>
          </Link>
        </SkeletonDiv>
      </div>
      <VSpacing height={24} />
      <Row justify="center">
        <Col span={22}>
          <Row justify="center">
            <Skeleton
              active
              loading={fetching}
              avatar={false}
              paragraph={false}
              title
              className={styles.headingSkeleton}
            >
              <Typography.Title
                id="welcome-msg"
                className="center-text"
                level={1}
              >
                Welcome to Alt Storefront
              </Typography.Title>
            </Skeleton>
          </Row>
          <List
            dataSource={(fetching ? (_.range(4) as any[]) : row1).slice(
              0,
              productGrid[screenSize],
            )}
            grid={productGrid}
            renderItem={(edge, i) => {
              const product = edge.node;
              return (
                <List.Item
                  className="product-list-items"
                  key={product?.id || i}
                >
                  <div className="full-width">
                    <Row justify="center">
                      <Col span={24} style={{ maxWidth: 240 }}>
                        <ProductCard loading={fetching} product={product} />
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
