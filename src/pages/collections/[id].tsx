import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import { useParams } from "umi";

import VSpacing from "@/components/VSpacing";

import {
  formatTitle,
  getCollectionName,
  getCollectionSeoDesc,
  getLangCode,
} from "@/utils/utils";
import { useQuery } from "@apollo/client";
import {
  collectionDetailQuery,
  collectionDetailQueryVariables,
} from "@/queries/types/collectionDetailQuery";
import { COLLECTION_DETAIL_PAGE_QUERY } from "@/queries/collectionDetail";
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
            content={getCollectionSeoDesc(data.collection)}
          />
        </Helmet>
      )}
      <div className="overflow-hidden relative" style={{ height: 300 }}>
        <SkeletonDiv active loading={fetching}>
          <img
            id="banner-img"
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={data?.collection?.backgroundImage?.url}
            alt={data?.collection?.backgroundImage?.alt || ""}
            loading="lazy"
          />
        </SkeletonDiv>
        {data?.collection?.name && (
          <Row className="h-full" justify="center" align="middle">
            <Col
              className="py-2 px-8"
              style={{
                backgroundImage:
                  "linear-gradient(to left, #3330, #333c, #333c, #3330)",
              }}
            >
              <Typography.Title
                id="title"
                className="text-center m-0 inverse-text"
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
