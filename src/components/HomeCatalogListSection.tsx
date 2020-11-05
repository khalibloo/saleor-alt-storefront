import React, { useEffect } from "react";
import { Typography, Row, Col, Card } from "antd";
import { Link } from "umi";
import { useLazyQuery } from "@apollo/client";
import { useResponsive } from "@umijs/hooks";
import { getLangCode, getScreenSize } from "@/utils/utils";

import _ from "lodash";
import { HomeCatalogListConfig } from ".altrc";
import AspectRatio from "./AspectRatio";
import { homeBannerSectionQuery } from "@/queries/types/homeBannerSectionQuery";
import { HOME_BANNER_SECTION_QUERY } from "@/queries/homeBannerSection";
import config from "@/config";

const HomeCatalogListSection: React.FC<HomeCatalogListConfig> = ({
  menuName,
  justify,
  gap,
  rows,
  showNames,
  title,
  useMenuNameAsTitle,
  googleAnalyticsPromoData,
}) => {
  const [fetchMenu, { loading: fetching, error, data }] = useLazyQuery<
    homeBannerSectionQuery
  >(HOME_BANNER_SECTION_QUERY, {
    variables: { menuName, lang: getLangCode() },
  });

  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);

  useEffect(() => {
    if (menuName) {
      fetchMenu();
    }
  }, []);

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

  if (!menuName) {
    // improperly configured section
    return null;
  }

  let titleText = title;
  if (!title && useMenuNameAsTitle) {
    titleText = data?.menu?.name;
  }
  let items = data?.menu?.items?.filter(
    item => item?.category || item?.collection,
  );
  const rowSizes = {
    xs: 1,
    sm: 2,
    md: 3,
    lg: 3,
    xl: 4,
    xxl: 6,
  };
  const collections = items
    ?.slice(0, Math.min(items.length, rows[screenSize] * rowSizes[screenSize]))
    .map(item => ({
      ...(item?.collection || item?.category),
      url: item?.collection
        ? `/collections/${item.collection.id}`
        : `/categories/${item?.category?.id}`,
    }));

  if (!fetching && (!collections || collections.length === 0)) {
    // empty menu
    return null;
  }

  return (
    <Row justify="center">
      <Col span={22} md={20}>
        {titleText && (
          <Typography.Title className="text-center" level={1}>
            {titleText}
          </Typography.Title>
        )}
        <div
          className="grid"
          style={{
            justifyContent: justify || "center",
            gap: gap || 32,
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 240px))",
          }}
        >
          {collections?.map(item => (
            <Link key={item.id} to={item.url} onClick={trackPromoClick}>
              <Card
                hoverable
                className="w-full"
                cover={
                  <AspectRatio height={1} width={1}>
                    <img
                      className="w-full h-full object-cover"
                      src={item.backgroundImage.url}
                      alt={item.backgroundImage.alt}
                      loading="lazy"
                    />
                  </AspectRatio>
                }
              >
                {showNames && <Card.Meta title={item.name} />}
              </Card>
            </Link>
          ))}
        </div>
      </Col>
    </Row>
  );
};

export default HomeCatalogListSection;
