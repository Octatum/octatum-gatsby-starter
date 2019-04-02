import React, { useState, useEffect } from 'react';
import { Box } from '@rebass/grid';
import styled from 'styled-components';
import GatsbyImage from 'gatsby-image';
import { useTransition, animated } from 'react-spring';
import { Link } from 'gatsby';
import { getCleanName } from '../../utils/functions';

const ImageBox = styled(Box)`
  position: relative;
  height: 11rem;
  max-width: 29rem;
  width: 100%;
  -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19),
    0 6px 6px rgba(0, 0, 0, 0.23);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`;

const Image = animated(GatsbyImage);

const imageStyles = {
  position: 'absolute',
  height: '100%',
  top: '0',
  left: '0',
  width: '100%',
};

const ImageGridItem = props => {
  const { project } = props;
  const projectCleanName = getCleanName(project.name);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const maxTime = 3000;
    const minTime = 2000;
    const time = Math.random() * (maxTime - minTime) + minTime;
    const interval = setTimeout(() => {
      setCurrentImageIndex((currentImageIndex + 1) % 2);
    }, time);

    return () => {
      clearInterval(interval);
    };
  }, [currentImageIndex]);

  const transitions = useTransition(
    project.coverImages[currentImageIndex],
    item => item.asset.id,
    {
      from: { opacity: 0 },
      enter: { opacity: 1 },
      leave: { opacity: 0 },
    }
  );

  return (
    <ImageBox
      as={Link}
      name={`Ver detalles de proyecto ${project.name}`}
      to={`/proyecto/${projectCleanName}`}
      key={projectCleanName}
    >
      {transitions.map(({ item, key, props: p }) => (
        <Image
          key={key}
          alt={project.name}
          fluid={item.asset.fluid}
          style={{ ...p, ...imageStyles }}
        />
      ))}
    </ImageBox>
  );
};

export default ImageGridItem;
