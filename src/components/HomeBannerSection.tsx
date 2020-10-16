import React, { useEffect } from "react";
import { Row, Col, Carousel } from "antd";
import { useLazyQuery } from "@apollo/client";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";

import SkeletonDiv from "@/components/SkeletonDiv";
import { HomeBannerConfig } from ".altrc";
import { homeBannerSectionQuery } from "@/queries/types/homeBannerSectionQuery";
import { HOME_BANNER_SECTION_QUERY } from "@/queries/homeBannerSection";
import HomeBannerItem from "./HomeBannerItem";

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
        span={24}
        md={fullWidth ? 24 : 20}
        className="mask relative"
        style={{ height: h || 500 }}
      >
        <SkeletonDiv active loading={fetching}>
          {items?.length === 1 ? (
            <HomeBannerItem {...items[0]} />
          ) : (
            <Carousel autoplay className="full-height">
              {items?.map(item => (
                <div key={item.id}>
                  <div style={{ height: h }}>
                    <HomeBannerItem {...item} />
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
