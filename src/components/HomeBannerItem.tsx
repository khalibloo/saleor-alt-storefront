import React, { useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { Link } from "umi";
import clx from "classnames";

import styles from "./HomeBannerItem.less";
import { HomeBannerImage } from ".altrc";
import config from "@/config";

const HomeBannerItem: React.FC<HomeBannerImage> = ({
  imageUrl,
  linkUrl,
  alt,
  title,
  googleAnalyticsPromoData,
}) => {
  // Google Ecommerce - track promo view
  useEffect(() => {
    if (config.gtmEnabled && googleAnalyticsPromoData) {
      window.dataLayer.push({
        event: "view_promotion",
        ecommerce: {
          items: [
            {
              ...googleAnalyticsPromoData,
            },
          ],
        },
      });
    }
  }, []);
  // Google Ecommerce - track promo click
  const trackPromoClick = () => {
    if (config.gtmEnabled && googleAnalyticsPromoData) {
      window.dataLayer.push({
        event: "select_promotion",
        ecommerce: {
          items: [
            {
              ...googleAnalyticsPromoData,
            },
          ],
        },
      });
    }
  };
  const content = (
    <div className={clx("full-height", styles.bannerItem)}>
      <img
        className={clx("full-width full-height", styles.bannerImg)}
        src={imageUrl}
        alt={alt}
        loading="lazy"
      />
      {title && (
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
              {title}
            </Typography.Title>
          </Col>
        </Row>
      )}
    </div>
  );
  if (linkUrl?.startsWith("/")) {
    return (
      <Link to={linkUrl} onClick={trackPromoClick}>
        {content}
      </Link>
    );
  }
  return (
    <a
      href={linkUrl}
      onClick={trackPromoClick}
      target="_blank"
      rel="noreferrer noopener"
    >
      {content}
    </a>
  );
};

export default HomeBannerItem;
