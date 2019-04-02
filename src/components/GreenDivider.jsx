import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

const GreenBox = styled(Box)`
  background: ${props => props.theme.color.green};
`;

const GreenDivider = ({ left }) => {
  if (left) {
    return (
      <Flex>
        <GreenBox py={3} width={1 / 3} />
        <GreenBox my={3} pt={1} width={2 / 3} />
      </Flex>
    );
  } else {
    return (
      <Flex>
        <GreenBox my={3} pt={1} width={2 / 3} />
        <GreenBox py={3} width={1 / 3} />
      </Flex>
    );
  }
};

export default GreenDivider;
