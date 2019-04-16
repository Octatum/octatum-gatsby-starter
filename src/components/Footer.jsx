import React from 'react';
import { Box } from 'rebass';
import Text from './Text';
import styled from 'styled-components';
import CommonContainer from './CommonContainer';

const Border = styled('div')`
  border-top: 1px solid ${({ theme }) => theme.colors.green};
`;

function Footer() {
  return (
    <React.Fragment>
      <Border />
      <CommonContainer py={4}>
        <Box width={1}>
          <Text fontSize={2} textAlign="center" fontFamily="serif">
            Copyright © All rights reserved.{' '}
            <Text fontSize={2} as="span" color="green" bold fontFamily="serif">
              Fake company {new Date().getFullYear()}.
            </Text>
          </Text>
        </Box>
      </CommonContainer>
    </React.Fragment>
  );
}

export default Footer;
