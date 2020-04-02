import React, { DetailedHTMLProps, ImgHTMLAttributes } from "react";
import LazyLoad from "react-lazyload";

interface Props
  extends DetailedHTMLProps<
    ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  alt?: string;
  lazyload?: boolean;
  height?: number | string;
  sources?: {
    type: string;
    srcSet: string[];
  }[];
}
export default (props: Props) => {
  const { height, sources, src, alt, lazyload, ...rest } = props;
  const lastSrcSet = sources && sources[sources.length - 1];
  const lastSrc = lastSrcSet && lastSrcSet.srcSet[lastSrcSet.srcSet.length - 1];
  const content = (
    <picture>
      {sources &&
        sources.map(s => (
          <source
            key={s.srcSet.join(", ")}
            type={s.type}
            srcSet={s.srcSet.join(", ")}
          />
        ))}
      <img src={src || lastSrc || ""} alt={alt} {...rest} />
    </picture>
  );
  if (lazyload) {
    return (
      <LazyLoad height={height} offset={200}>
        {content}
      </LazyLoad>
    );
  }
  return content;
};
