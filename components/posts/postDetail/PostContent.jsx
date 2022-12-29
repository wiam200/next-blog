import React from "react";
import classes from "./postContent.module.css";
import PostHeader from "./PostHeader";
import ReactMarkdown from "react-markdown";
import Image from "next/image";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
// const DUMMY_POST = {
//   title: "The fourth post",
//   image: "getting-started-nextjs.png",
//   content: "# the content detail",
//   slug: "getting-started-with-nextjs",
//   date: "2022-02-07",
// };

function PostContent(props) {
  const { post } = props;
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    paragraph(paragraph) {
      const { node } = paragraph;

      if (node.children[0].type === "image") {
        const image = node.children[0];

        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.url}`}
              alt={image.alt}
              height={300}
              width={600}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },

    code(code) {
      const { language, value } = code;
      // const language = className.split("-")[1]; // className is something like language-js => We need the "js" part here
      return (
        <SyntaxHighlighter
          style={atomDark}
          language={language}
          children={value}
        />
      );
    },
  };
  return (
    <article className={classes.content}>
      <PostHeader title={post.title} image={imagePath} />
      <ReactMarkdown renderers={customRenderers}>{post.content}</ReactMarkdown>
    </article>
  );
}

export default PostContent;
