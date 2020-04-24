import React from "react";
import { Button } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import clx from "classnames";

import styles from "./AddAddress.less";

const AddAddress: React.FC = () => (
  <Button className={clx("full-width", styles.btn)}>
    <PlusOutlined className={styles.icon} />
  </Button>
);

export default AddAddress;
