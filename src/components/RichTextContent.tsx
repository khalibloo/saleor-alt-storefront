import React from "react";
import { sanitize } from "dompurify";
import draftToHtml from "draftjs-to-html";
import Truncate from "react-truncate-html";

interface IProps {
  contentJson: string;
  lines?: number;
}

const RichTextContent: React.FC<IProps> = ({ contentJson, lines }) => {
  if (!contentJson) {
    return null;
  }
  return (
    <>
      {lines ? (
        <Truncate
          lines={lines}
          dangerouslySetInnerHTML={{
            __html: sanitize(draftToHtml(JSON.parse(contentJson))),
          }}
        />
      ) : (
        <div
          dangerouslySetInnerHTML={{
            __html: sanitize(draftToHtml(JSON.parse(contentJson))),
          }}
        />
      )}
    </>
  );
};

export default RichTextContent;
