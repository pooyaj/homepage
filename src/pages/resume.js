import React from "react";
import Layout from "../components/layout";
import { graphql } from "gatsby";
import { Parser } from "html-to-react";

const htmlToReactParser = new Parser();

const Resume = props => {
  const { data } = props;
  const name = data.prismicResume.data.name.text;
  const desc = data.prismicResume.data.description.html;
  const sections = data.prismicResume.data.body;

  return (
    <Layout isResume>
      <h1>{name}</h1>
      {htmlToReactParser.parse(desc)}

      {sections.map(i => (
        <div class="section">
          <h2>{i.primary.title.text}</h2>
          <div>{i.items.map(j => htmlToReactParser.parse(j.content.html))}</div>
        </div>
      ))}
    </Layout>
  );
};

export const pageData = graphql`
  query {
    prismicResume {
      data {
        name {
          text
        }
        description {
          html
        }
        body {
          ... on PrismicResumeBodySection {
            items {
              content {
                html
              }
            }
            primary {
              title {
                text
              }
            }
          }
        }
      }
    }
  }
`;

export default Resume;
