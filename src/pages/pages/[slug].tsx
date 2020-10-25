import React from "react";
import { Col, Row, Skeleton, Typography } from "antd";
import { Helmet } from "react-helmet";
import { useParams } from "umi";
import RichTextContent from "@/components/RichTextContent";
import { useQuery } from "@apollo/client";
import { pageQuery } from "@/queries/types/pageQuery";
import { PAGE_QUERY } from "@/queries/page";
import NotFoundPage from "../404";
import { formatTitle, getLangCode } from "@/utils/utils";
import VSpacing from "@/components/VSpacing";
import styles from "./slug.less";

const PageDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { loading: fetching, error, data } = useQuery<pageQuery>(PAGE_QUERY, {
    variables: { slug, lang: getLangCode() },
  });

  if (fetching) {
    return (
      <Row justify="center">
        <Col span={22}>
          <Skeleton title paragraph={{ rows: 30 }} />;
        </Col>
      </Row>
    );
  }
  if (!fetching && !data?.page) {
    //invalid product url
    return <NotFoundPage />;
  }

  return (
    <div>
      {data?.page?.title && (
        <Helmet>
          <title>{formatTitle(data.page.title)}</title>
          <meta name="description" content={data.page.title} />
        </Helmet>
      )}
      <VSpacing height={24} />
      <Row justify="center">
        <Col className={styles.articleContent} span={22} md={20} xl={18}>
          <Typography.Title id="page-heading" className="center-text" level={1}>
            {data?.page?.title}
          </Typography.Title>
          <RichTextContent contentJson={data?.page?.contentJson} />
        </Col>
      </Row>
      <VSpacing height={48} />
    </div>
  );
};

export default PageDetailPage;
