import React, { useEffect } from "react";
import { Typography, Row, Col, Carousel } from "antd";
import { useIntl, Link } from "umi";
import clx from "classnames";
import { useLazyQuery, useQuery } from "@apollo/client";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";

import styles from "./HomeBannerSection.less";
import SkeletonDiv from "@/components/SkeletonDiv";
import _ from "lodash";
import { HomeBannerConfig } from ".altrc";
import { homeBannerSectionQuery } from "@/queries/types/homeBannerSectionQuery";
import { HOME_BANNER_SECTION_QUERY } from "@/queries/homeBannerSection";

const BannerItem = ({ item }) => {
  const content = (
    <div className={clx("full-height", styles.bannerItem)}>
      <img
        className={clx("full-width full-height", styles.bannerImg)}
        src={item.imageUrl}
        alt={item.alt}
      />
      {item.title && (
        <Row
          className={clx("full-width full-height", styles.bannerOverlay)}
          justify="center"
          align="middle"
        >
          <Col className={styles.bannerTitleBG}>
            <Typography.Title
              id="banner-title"
              className="center-text no-margin inverse-text"
              level={1}
            >
              {item.title}
            </Typography.Title>
          </Col>
        </Row>
      )}
    </div>
  );
  if (item.linkUrl.startsWith("/")) {
    return <Link to={item.linkUrl}>{content}</Link>;
  }
  return (
    <a href={item.linkUrl} target="_blank">
      {content}
    </a>
  );
};

const HomeBannerSection: React.FC<HomeBannerConfig> = ({
  fullWidth,
  height,
  images,
  menuName,
  showTitleOverlay,
}) => {
  const [fetchMenu, { loading: fetching, error, data }] = useLazyQuery<
    homeBannerSectionQuery
  >(HOME_BANNER_SECTION_QUERY, { variables: { menuName } });
  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);
  const h = typeof height === "object" ? height[screenSize] : height;

  useEffect(() => {
    if (menuName) {
      fetchMenu();
    }
  }, []);

  let items = images?.map((image, i) => ({ ...image, id: `${i}` }));
  if (menuName) {
    items = data?.menu?.items
      ?.map(item => {
        const linkUrl = item?.collection
          ? `/collections/${item?.collection?.id}`
          : `/categories/${item?.category?.id}`;
        const imageUrl = item?.collection
          ? item.collection.backgroundImage?.url
          : item?.category?.backgroundImage?.url;
        const alt = item?.collection
          ? item.collection.backgroundImage?.alt
          : item?.category?.backgroundImage?.alt;
        return {
          title: showTitleOverlay ? item?.name : undefined,
          id: item?.id,
          linkUrl,
          imageUrl,
          alt,
        };
      })
      .filter(item => item.imageUrl != null);
    if (!fetching && !items) {
      // likely caused by invalid menu config
      return null;
    }
  }
  return (
    <Row justify="center">
      <Col
        id="banner-container"
        span={24}
        md={fullWidth ? 24 : 20}
        className={styles.bannerContainer}
        style={{ height: h || 500 }}
      >
        <SkeletonDiv active loading={fetching}>
          {items?.length === 1 ? (
            <BannerItem item={items[0]} />
          ) : (
            <Carousel autoplay className="full-height">
              {items?.map(item => (
                <div key={item.id}>
                  <div style={{ height: h }}>
                    <BannerItem item={item} />
                  </div>
                </div>
              ))}
            </Carousel>
          )}
        </SkeletonDiv>
      </Col>
    </Row>
  );
};

export default HomeBannerSection;
