import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import { useParams } from "umi";
import clx from "classnames";

import VSpacing from "@/components/VSpacing";

import styles from "./id.less";
import { formatTitle, getCategoryName, getLangCode } from "@/utils/utils";
import { useQuery } from "@apollo/client";
import {
  categoryDetailQuery,
  categoryDetailQueryVariables,
} from "@/queries/types/categoryDetailQuery";
import { CATEGORY_DETAIL_PAGE_QUERY } from "@/queries/categoryDetail";
import SkeletonDiv from "@/components/SkeletonDiv";
import Products from "@/components/Products";

const CategoryDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading: fetching, error, data } = useQuery<
    categoryDetailQuery,
    categoryDetailQueryVariables
  >(CATEGORY_DETAIL_PAGE_QUERY, {
    variables: {
      category: id as string,
      lang: getLangCode(),
    },
  });
  return (
    <div>
      {data?.category?.name && (
        <Helmet>
          <title>{formatTitle(getCategoryName(data.category))}</title>
          <meta name="description" content={getCategoryName(data.category)} />
        </Helmet>
      )}
      <div className={styles.bannerContainer}>
        <SkeletonDiv active loading={fetching}>
          <img
            id="banner-img"
            className={clx("full-width full-height", styles.bannerImg)}
            src={data?.category?.backgroundImage?.url}
            alt={data?.category?.backgroundImage?.alt || ""}
            loading="lazy"
          />
        </SkeletonDiv>
        {data?.category?.name && (
          <Row className="full-height" justify="center" align="middle">
            <Col className={styles.bannerTitleBG}>
              <Typography.Title
                id="title"
                className="center-text no-margin inverse-text"
                level={1}
              >
                {getCategoryName(data.category)}
              </Typography.Title>
            </Col>
          </Row>
        )}
      </div>
      <Products
        categoryID={data?.category?.id}
        showCollectionFilter
        showCategoryFilter
        listName={data?.category?.name}
      />
      <VSpacing height={48} />
    </div>
  );
};

export default CategoryDetailPage;
