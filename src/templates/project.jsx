import React from 'react';
import Template from '../page-components/Project/Template';
import { graphql } from 'gatsby';

function TemplateProject(props) {
  const { data } = props;

  return <Template data={data} />;
}

export default TemplateProject;

export const pageQuery = graphql`
  query($name: String!) {
    sanityProject(projectName: { eq: $name }) {
      projectName
      customerName
      url
      description
      images {
        file {
          asset {
            url
            fluid(maxWidth: 1300) {
              ...GatsbySanityImageFluid
            }
          }
        }
        alt
      }

      thumbnails: images {
        file {
          asset {
            url
            fluid(maxWidth: 325) {
              ...GatsbySanityImageFluid
            }
          }
        }
        alt
      }
    }
  }
`;
