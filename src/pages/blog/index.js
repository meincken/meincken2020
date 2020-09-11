import React from "react";

import Layout from "../../components/Layout";
import BlogRoll from "../../components/BlogRoll";

export default class BlogIndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <div
          className="full-width mb-10"
          style={{
            backgroundImage: `url('/img/blog-index.jpg')`,
          }}
        >
          <h1>Latest Stories</h1>
        </div>
        <section>
          <BlogRoll />
        </section>
      </Layout>
    );
  }
}
