import React, { useEffect } from "react";
import { Typography, Row, Col, Card } from "antd";
import { Link } from "umi";
import { useLazyQuery } from "@apollo/client";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";

import _ from "lodash";
import { HomeCatalogListConfig } from ".altrc";
import AspectRatio from "./AspectRatio";
import { homeBannerSectionQuery } from "@/queries/types/homeBannerSectionQuery";
import { HOME_BANNER_SECTION_QUERY } from "@/queries/homeBannerSection";
import styles from "./HomeCatalogListSection.less";

const HomeCatalogListSection: React.FC<HomeCatalogListConfig> = ({
  menuName,
  justify,
  gap,
  rows,
  showNames,
  title,
  useMenuNameAsTitle,
}) => {
  const [fetchMenu, { loading: fetching, error, data }] = useLazyQuery<
    homeBannerSectionQuery
  >(HOME_BANNER_SECTION_QUERY, { variables: { menuName } });

  const responsive: any = useResponsive();
  const screenSize = getScreenSize(responsive);

  useEffect(() => {
    if (menuName) {
      fetchMenu();
    }
  }, []);

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
          <Typography.Title className="center-text" level={1}>
            {titleText}
          </Typography.Title>
        )}
        <div
          className={styles.catalogGrid}
          style={{ justifyContent: justify || "center", gap: gap || 32 }}
        >
          {collections?.map(item => (
            <Link key={item.id} to={item.url}>
              <Card
                hoverable
                className="full-width"
                cover={
                  <AspectRatio height={1} width={1}>
                    <img
                      className="full-width full-height img-cover"
                      src={item.backgroundImage.url}
                      alt={item.backgroundImage.alt}
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
