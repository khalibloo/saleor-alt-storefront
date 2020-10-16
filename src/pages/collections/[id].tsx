import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import { useIntl, useParams } from "umi";
import clx from "classnames";

import VSpacing from "@/components/VSpacing";

import styles from "../categories/id.less";
import { formatTitle } from "@/utils/utils";
import {
  collectionDetailQuery,
  collectionDetailQueryVariables,
} from "@/queries/types/collectionDetailQuery";
import { COLLECTION_DETAIL_PAGE_QUERY } from "@/queries/collectionDetail";
import { useQuery } from "@apollo/client";
import SkeletonDiv from "@/components/SkeletonDiv";
import Products from "@/components/Products";

const CollectionDetailPage: React.FC = () => {
  const intl = useIntl();
  const { id } = useParams();
  const { loading: fetching, error, data } = useQuery<
    collectionDetailQuery,
    collectionDetailQueryVariables
  >(COLLECTION_DETAIL_PAGE_QUERY, {
    variables: {
      collection: id as string
    },
  });
  return (
    <div>
      {data?.collection?.name && (
        <Helmet>
          <title>{formatTitle(data.collection.name)}</title>
        </Helmet>
      )}
      <div className={styles.bannerContainer}>
        <SkeletonDiv active loading={fetching}>
          <img
            id="banner-img"
            className={clx("full-width full-height", styles.bannerImg)}
            src={data?.collection?.backgroundImage?.url}
            alt={data?.collection?.backgroundImage?.alt || ""}
            loading="lazy"
          />
        </SkeletonDiv>
        {data?.collection?.name && (
          <Row className="full-height" justify="center" align="middle">
            <Col className={styles.bannerTitleBG}>
              <Typography.Title
                id="title"
                className="center-text no-margin inverse-text"
                level={1}
              >
                {data.collection.name}
              </Typography.Title>
            </Col>
          </Row>
        )}
      </div>
      <Products
        collectionID={data?.collection?.id}
        showCategoryFilter
      />
      <VSpacing height={48} />
    </div>
  );
};

export default CollectionDetailPage;
