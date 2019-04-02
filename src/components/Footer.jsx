import React from 'react';
import { Box } from '@rebass/grid';
import Text from './Text';
import styled from 'styled-components';
import CommonContainer from './CommonContainer';

const Border = styled('div')`
  border-top: 1px solid ${({ theme }) => theme.color.green};
`;

function Footer() {
  return (
    <React.Fragment>
      <Border />
      <CommonContainer py={4}>
        <Box width={1}>
          <Text align="center" font="secondary">
            Copyright © Todos los derechos reservados.{' '}
            <Text as="span" color="green" bold font="secondary">
              Interaxo Labs S.A. de C.V. 2019.
            </Text>
          </Text>
        </Box>
      </CommonContainer>
    </React.Fragment>
  );
}

export default Footer;
