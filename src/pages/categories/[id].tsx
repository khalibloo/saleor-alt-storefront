import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import { useIntl, useParams } from "umi";
import clx from "classnames";

import VSpacing from "@/components/VSpacing";

import styles from "./id.less";
import { formatTitle } from "@/utils/utils";
import { useQuery } from "@apollo/client";
import {
  categoryDetailQuery,
  categoryDetailQueryVariables,
} from "@/queries/types/categoryDetailQuery";
import { CATEGORY_DETAIL_PAGE_QUERY } from "@/queries/categoryDetail";
import SkeletonDiv from "@/components/SkeletonDiv";
import Products from "@/components/Products";

const CategoryDetailPage: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams();
  const { loading: fetching, error, data } = useQuery<
    categoryDetailQuery,
    categoryDetailQueryVariables
  >(CATEGORY_DETAIL_PAGE_QUERY, {
    variables: {
      category: id as string,
    },
  });
  return (
    <div>
      {data?.category?.name && (
        <Helmet>
          <title>{formatTitle(data?.category?.name)}</title>
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
                {data?.category?.name}
              </Typography.Title>
            </Col>
          </Row>
        )}
      </div>
      <Products categoryID={data?.category?.id} showCollectionFilter showCategoryFilter />
      <VSpacing height={48} />
    </div>
  );
};

export default CategoryDetailPage;
