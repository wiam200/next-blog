import React, { Fragment } from "react";
import PostContent from "../../components/posts/postDetail/PostContent";
import { getPostData, getPostsFiles } from "../../lib/posts-util";
import Head from "next/head";

function PostDetailPage(props) {
  return (
    <Fragment>
      <Head>
        <title>{props.post.title}</title>
        <meta name="description" content={props.post.excerpt} />
      </Head>
      <PostContent post={props.post} />;
    </Fragment>
  );
}

export function getStaticProps(context) {
  const { params } = context;
  const { slug } = params;
  const postData = getPostData(slug);

  return {
    props: {
      post: postData,
    },
    revalidate: 600,
  };
}

export function getStaticPaths() {
  const postFileName = getPostsFiles();
  const slugs = postFileName.map((postFileName) =>
    postFileName.replace(/\.md$/, "")
  );

  return {
    paths: slugs.map((slug) => ({ params: { slug: slug } })),
    fallback: false,
  };
}
export default PostDetailPage;
