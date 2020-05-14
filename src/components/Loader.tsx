import * as React from "react";
import { Row, Col, Spin } from "antd";
import { SpinProps } from "antd/lib/spin";

interface Props extends SpinProps {}
const Loader: React.FC<Props> = ({ size, ...rest }) => {
  return (
    <Row justify="center" align="middle" className="full-height">
      <Col>
        <Spin {...rest} size={size || "large"} />
      </Col>
    </Row>
  );
};

export default Loader;
