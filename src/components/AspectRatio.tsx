import * as React from "react";
import clx from "classnames";
import styles from "./AspectRatio.less";

interface Props {
  width: number;
  height: number;
}
const AspectRatio: React.FunctionComponent<Props> = props => {
  const { height, width, children } = props;
  return (
    <div
      className={clx("full-width mask relative")}
      style={{
        paddingTop: `${(height / width) * 100}%`,
      }}
    >
      <div className={clx("absolute", styles.container)}>{children}</div>
    </div>
  );
};

export default AspectRatio;
