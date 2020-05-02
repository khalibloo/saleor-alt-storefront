import * as React from "react";
import clx from "classnames";

import styles from "./SkeletonDiv.less";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  loading?: boolean;
}
const SkeletonDiv: React.FC<Props> = props => {
  const { active, className, children, loading, ...rest } = props;
  if (!loading) {
    return <>{children}</>;
  }
  return (
    <div
      className={clx(
        "full-height full-width",
        styles.skeleton,
        { [styles.active]: active },
        className,
      )}
      {...rest}
    />
  );
};

export default SkeletonDiv;
