import React from 'react';
import styled from 'styled-components';
import { Flex } from '@rebass/grid';
import { useStaticQuery, graphql } from 'gatsby';
import CommonContainer from '../../components/CommonContainer';
import SectionHeader from './SectionHeader';
import { mediaQueries } from '../../utils/theme';
import { navigationIds } from '../../components/Navhub';
import SectionDiv from '../../components/SectionDiv';
import ImageGridItem from './ImageGridItem';

const Grid = styled(Flex)`
  display: grid;
  grid-template-columns: 100%;
  grid-auto-rows: 12.5rem;
  justify-items: center;
  grid-row-gap: 2rem;

  ${mediaQueries.medium} {
    grid-template-columns: repeat(2, 47.5%);
    grid-column-gap: 5%;
  }

  ${mediaQueries.large} {
    grid-template-columns: repeat(3, 30%);
  }
`;

const WithImageGrid = () => {
  const projectsQueryData = useStaticQuery(graphql`
    {
      allSanityProject {
        edges {
          node {
            projectName
            coverImages {
              asset {
                id
                fluid(maxWidth: 600, maxHeight: 300) {
                  ...GatsbySanityImageFluid_noBase64
                }
              }
            }
          }
        }
      }
    }
  `);

  const projects = projectsQueryData.allSanityProject.edges.map(({ node }) => ({
    coverImages: node.coverImages || [],
    name: node.projectName || '',
  }));

  return (
    <CommonContainer>
      <SectionDiv id={navigationIds.projects} />
      <Flex justifyContent="flex-start">
        <SectionHeader
          topText="Picture grids!"
          lightText="they're also "
          greenText="responsive"
        />
      </Flex>
      <Grid>
        {projects.map(project => (
          <ImageGridItem key={project.name} project={project} />
        ))}
      </Grid>
    </CommonContainer>
  );
};

export default WithImageGrid;
