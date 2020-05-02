import React from "react";
import { Layout } from "antd";
import clx from "classnames";

import styles from "./index.less";
import NavBar from "./NavBar";
import Footer from "./Footer";
import { ApolloProvider } from "@apollo/react-hooks";
import { client } from "@/apollo";

const BasicLayout: React.FC = ({ children }) => {
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

export default BasicLayout;
