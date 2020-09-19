import * as React from "react";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  height: number | string;
}
const VSpacing: React.FC<Props> = props => {
  const { height, style, ...rest } = props;
  return <div {...rest} style={{ ...style, height }} />;
};

export default VSpacing;
