import React from "react";
import { Typography, Row, Col } from "antd";
import { Helmet } from "react-helmet";
import { useParams } from "umi";

import VSpacing from "@/components/VSpacing";

import {
  formatTitle,
  getCategoryName,
  getCategorySeoDesc,
  getLangCode,
} from "@/utils/utils";
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
          <meta
            name="description"
            content={getCategorySeoDesc(data.category)}
          />
        </Helmet>
      )}
      <div className="overflow-hidden relative" style={{ height: 300 }}>
        <SkeletonDiv active loading={fetching}>
          <img
            id="banner-img"
            className="w-full h-full absolute top-0 left-0 object-cover"
            src={data?.category?.backgroundImage?.url}
            alt={data?.category?.backgroundImage?.alt || ""}
            loading="lazy"
          />
        </SkeletonDiv>
        {data?.category?.name && (
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
