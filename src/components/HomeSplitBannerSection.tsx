import React, { useEffect } from "react";
import { Row, Col } from "antd";
import { useLazyQuery } from "@apollo/client";
import { useResponsive } from "@umijs/hooks";
import { getScreenSize } from "@/utils/utils";

import SkeletonDiv from "@/components/SkeletonDiv";
import { HomeSplitBannerConfig } from ".altrc";
import { homeBannerSectionQuery } from "@/queries/types/homeBannerSectionQuery";
import { HOME_BANNER_SECTION_QUERY } from "@/queries/homeBannerSection";
import HomeBannerItem from "./HomeBannerItem";

const HomeSplitBannerSection: React.FC<HomeSplitBannerConfig> = ({
  height,
  gap,
  images,
  layout,
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

  let items = images?.map((image, i) => ({ ...image, id: `${i}` })).slice(0, 2);
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
      .filter(item => item.imageUrl != null)
      .slice(0, 2);
    if (!fetching && !items) {
      // likely caused by invalid menu config
      return null;
    }
  } else if (items?.length === 0) {
    // menuName wasnt supplied and images is empty
    return null;
  }
  const calcSplit = layout => {
    if (layout === "1-2") {
      return { a: 8, b: 16 };
    }
    if (layout === "1-1") {
      return { a: 12, b: 12 };
    }
    if (layout === "2-1") {
      return { a: 16, b: 8 };
    }
  };
  const splitLayoutA =
    items?.length === 1
      ? { span: 24 }
      : {
          xs: 24,
          xm: 24,
          md: calcSplit(layout.md)?.a,
          lg: calcSplit(layout.lg)?.a,
          xl: calcSplit(layout.xl)?.a,
          xxl: calcSplit(layout.xxl)?.a,
        };
  const splitLayoutB = {
    xs: 24,
    xm: 24,
    md: calcSplit(layout.md)?.b,
    lg: calcSplit(layout.lg)?.b,
    xl: calcSplit(layout.xl)?.b,
    xxl: calcSplit(layout.xxl)?.b,
  };
  return (
    <Row justify="center">
      <Col span={22} xs={22} md={20} className="mask relative">
        <Row gutter={[gap || 24, gap || 24]}>
          {items?.[0] && (
            <Col {...splitLayoutA} style={{ height: h || 500 }}>
              <SkeletonDiv active loading={fetching}>
                <HomeBannerItem {...items[0]} />
              </SkeletonDiv>
            </Col>
          )}
          {items?.[1] && (
            <Col {...splitLayoutB} style={{ height: h || 500 }}>
              <SkeletonDiv active loading={fetching}>
                <HomeBannerItem {...items[1]} />
              </SkeletonDiv>
            </Col>
          )}
        </Row>
      </Col>
    </Row>
  );
};

export default HomeSplitBannerSection;
