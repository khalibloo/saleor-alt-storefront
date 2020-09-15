import React, { useEffect } from "react";
import { Layout } from "antd";
import clx from "classnames";

import styles from "./index.less";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/apollo";
import { connect, ConnectRC, Loading } from "umi";
import { ConnectState } from "@/models/connect";
import Loader from "@/components/Loader";

interface Props {
  loading: Loading;
}
const BasicLayout: ConnectRC<Props> = ({ children, loading, dispatch }) => {
  useEffect(() => {
    dispatch?.({ type: "auth/initialize" });
  }, []);
  if (loading.effects["auth/initialize"]) {
    return <Loader />;
  }
  return (
    <ApolloProvider client={client}>
      <Layout className={styles.layout}>
        <Layout.Header
          className={clx("full-width no-padding shadow", styles.header)}
        >
          <NavBar />
        </Layout.Header>
        <Layout.Content className={styles.content}>{children}</Layout.Content>
        <Layout.Footer>
          <Footer />
        </Layout.Footer>
      </Layout>
    </ApolloProvider>
  );
};

export default connect((state: ConnectState) => ({ loading: state.loading }))(
  BasicLayout,
);
