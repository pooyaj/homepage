import React from 'react';
import Layout from '../components/layout';
import main from '../../img/main.jpg';

import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

function Image() {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "img/main.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fixed(width: 250, height: 250) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  console.log(data);
  return <Img fixed={data.file.childImageSharp.fixed} alt="Pooya Jaferian" />;
}

class Course extends React.Component {
  render() {
    return (
      <Layout>
        <div className="container">
          <div className=" columns">
            <div className="column is-4 hoverable">
              <figure
                className="image round-border"
                style={{
                  margin: '0 auto',
                  width: '250px',
                  height: '250px',
                  overflow: 'hidden',
                }}
              >
                <Image />
              </figure>
            </div>
            <div className="column is-8 ">
              <h1 className="title is-size-2-mobile has-text-centered-touch">
                Pooya Jaferian
              </h1>
              <h2 className="subtitle is-size-5-mobile has-text-centered-touch">
                PhD in Computer Engineering from{' '}
                <a
                  href="https://www.ubc.ca"
                  aria-label="UBC Website"
                  alt="UBC Website"
                >
                  UBC
                </a>{' '}
                <br /> Engineering Manager at{' '}
                <a
                  href="https://www.segment.com/"
                  aria-label="Segment"
                  alt="Segment"
                >
                  Segment
                </a>
              </h2>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Course;
