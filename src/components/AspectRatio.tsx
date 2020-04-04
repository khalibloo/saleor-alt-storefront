import * as React from "react";
import clx from "classnames";
import styles from "./AspectRatio.less";

interface Props {
  width: number;
  height: number;
  noMask?: boolean;
}
const AspectRatio: React.FunctionComponent<Props> = props => {
  const { height, width, noMask, children } = props;
  return (
    <div
      className={clx("full-width relative", { mask: !noMask })}
      style={{
        paddingTop: `${(height / width) * 100}%`,
      }}
    >
      <div className={clx("absolute", styles.container)}>{children}</div>
    </div>
  );
};

export default AspectRatio;
