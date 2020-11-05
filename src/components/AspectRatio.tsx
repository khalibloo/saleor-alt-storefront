import * as React from "react";
import clx from "classnames";

interface Props {
  width: number;
  height: number;
  noMask?: boolean;
}
const AspectRatio: React.FunctionComponent<Props> = props => {
  const { height, width, noMask, children } = props;
  return (
    <div
      className={clx("w-full relative", { ["overflow-hidden"]: !noMask })}
      style={{
        paddingTop: `${(height / width) * 100}%`,
      }}
    >
      <div className="absolute top-0 right-0 bottom-0 left-0">{children}</div>
    </div>
  );
};

export default AspectRatio;
