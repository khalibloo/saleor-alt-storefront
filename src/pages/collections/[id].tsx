import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import { useParams } from "umi";
import clx from "classnames";

import VSpacing from "@/components/VSpacing";

import styles from "../categories/id.less";
import { formatTitle, getCollectionName, getLangCode } from "@/utils/utils";
import {
  collectionDetailQuery,
  collectionDetailQueryVariables,
} from "@/queries/types/collectionDetailQuery";
import { COLLECTION_DETAIL_PAGE_QUERY } from "@/queries/collectionDetail";
import { useQuery } from "@apollo/client";
import SkeletonDiv from "@/components/SkeletonDiv";
import Products from "@/components/Products";

const CollectionDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { loading: fetching, error, data } = useQuery<
    collectionDetailQuery,
    collectionDetailQueryVariables
  >(COLLECTION_DETAIL_PAGE_QUERY, {
    variables: {
      collection: id as string,
      lang: getLangCode(),
    },
  });
  return (
    <div>
      {data?.collection?.name && (
        <Helmet>
          <title>{formatTitle(getCollectionName(data.collection))}</title>
          <meta
            name="description"
            content={getCollectionName(data.collection)}
          />
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
                {getCollectionName(data.collection)}
              </Typography.Title>
            </Col>
          </Row>
        )}
      </div>
      <Products
        collectionID={data?.collection?.id}
        showCategoryFilter
        listName={data?.collection?.name}
      />
      <VSpacing height={48} />
    </div>
  );
};

export default CollectionDetailPage;
