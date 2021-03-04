import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';

export default function MyFiles (props) {
  console.log( props.data );

  return (
    <Layout>
      <div>
        <h1>Project Files</h1>
        <table>
          <thead>
            <tr>
              <th>relativePath</th>
              <th>prettySize</th>
              <th>extension</th>
              <th>birthTime</th>
            </tr>
          </thead>
          <tbody>
            {
              props.data.allFile.edges.map((item, index) => (
                <tr key={index}>
                  <td>{ item.node.relativePath }</td>
                  <td>{ item.node.prettySize }</td>
                  <td>{ item.node.extension }</td>
                  <td>{ item.node.birthTime }</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile {
      edges {
        node {
          relativePath
          prettySize
          extension
          birthTime(fromNow: true)
        }
      }
    }
  }
`;
