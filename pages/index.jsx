import React, { Fragment } from "react";
import FeaturedPost from "../components/home_page/FeaturedPost";
import Hero from "../components/home_page/Hero";
import { getFeaturedPosts } from "../lib/posts-util";
import Head from "next/head";
import Statistiques from "../components/home_page/statistiques";
import AboutUs from "../components/home_page/AboutUs";
function HomePage(props) {
  return (
    <Fragment>
      <Head>
        <title>wiam' Blog</title>
        <meta
          name="description"
          content="I post about programming and web development."
        />
      </Head>
      <Hero />
      <Statistiques />
      <AboutUs />
      <FeaturedPost posts={props.posts} />
    </Fragment>
  );
}
export function getStaticProps() {
  const featuredPosts = getFeaturedPosts();

  return {
    props: {
      posts: featuredPosts,
    },
    revalidate: 60,
  };
}

export default HomePage;
