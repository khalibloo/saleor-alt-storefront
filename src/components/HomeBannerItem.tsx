import React, { useEffect } from "react";
import { Typography, Row, Col } from "antd";
import { Link } from "umi";

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
          ...googleAnalyticsPromoData,
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
          ...googleAnalyticsPromoData,
        },
      });
    }
  };
  const content = (
    <div className="h-full relative">
      <img
        className="w-full h-full object-cover"
        src={imageUrl}
        alt={alt}
        loading="lazy"
      />
      {title && (
        <Row
          className="w-full h-full absolute top-0 left-0"
          justify="center"
          align="middle"
        >
          <Col
            className="py-2 px-8"
            style={{
              backgroundImage:
                "linear-gradient(to left, #3330, #333c, #333c, #3330)",
            }}
          >
            <Typography.Title
              id="banner-title"
              className="text-center m-0 inverse-text"
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
