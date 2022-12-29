import React from "react";
import PostsGrid from "../posts/PostsGrid";
import classes from "./FeaturedPost.module.css";

function FeaturedPost(props) {
  return (
    <section className={classes.latest}>
      <h2> Featured posts</h2>
      <PostsGrid posts={props.posts} />
    </section>
  );
}

export default FeaturedPost;
