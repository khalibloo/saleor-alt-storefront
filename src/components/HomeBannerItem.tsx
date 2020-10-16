import React from "react";
import { Typography, Row, Col } from "antd";
import { Link } from "umi";
import clx from "classnames";

import styles from "./HomeBannerItem.less";

interface Props {
  imageUrl: string;
  linkUrl?: string;
  alt?: string;
  title?: string;
}
const HomeBannerItem: React.FC<Props> = ({ imageUrl, linkUrl, alt, title }) => {
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
  if (linkUrl.startsWith("/")) {
    return <Link to={linkUrl}>{content}</Link>;
  }
  return (
    <a href={linkUrl} target="_blank">
      {content}
    </a>
  );
};

export default HomeBannerItem;
