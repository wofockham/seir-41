import React from "react";
import { graphql } from 'gatsby';

import Layout from '../components/Layout';

export default function Home(props) {
  return (
    <Layout>
      <h1>{ props.data.site.siteMetadata.title }</h1>
      <p>I love Facebook</p>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
