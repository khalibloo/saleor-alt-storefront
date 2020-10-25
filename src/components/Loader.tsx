import * as React from "react";
import { Row, Col, Spin } from "antd";
import { SpinProps } from "antd/lib/spin";

interface Props extends SpinProps {
  // DO NOT USE. passed by dynamic import
  // declaring here just so we can remove them
  // and prevent them from being passed to div in DOM
  isLoading?: boolean;
  pastDelay?: any;
  timedOut?: boolean;
  retry?: any;
}
const Loader: React.FC<Props> = ({
  size,
  // strip dynamic import props
  isLoading,
  pastDelay,
  timedOut,
  retry,
  ...rest
}) => {
  return (
    <Row justify="center" align="middle" className="full-height">
      <Col>
        <Spin {...rest} size={size || "large"} />
      </Col>
    </Row>
  );
};

export default Loader;
