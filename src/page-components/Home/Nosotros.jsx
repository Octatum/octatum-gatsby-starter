import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';
import SectionHeader from './SectionHeader';
import { navigationIds } from '../../components/Navhub';
import SectionDiv from '../../components/SectionDiv';

const GreenBox = styled(Box)`
  background: ${props => props.theme.color.green};
`;

const Nosotros = props => (
  <section>
    <CommonContainer pt={4}>
      <SectionDiv id={navigationIds.about} />
      <SectionHeader
        topText="Conoce"
        lightText="nuestro"
        greenText="PRESENTE"
      />
      <Box py={4}>
        <Text align="right" size={3}>
          ¿Cómo
          <br />
          creamos arte
          <br />
          web?
        </Text>
      </Box>
    </CommonContainer>
    <Flex>
      <GreenBox my={3} pt={1} width={2 / 3} />
      <GreenBox py={3} width={1 / 3} />
    </Flex>
    <CommonContainer py={5} justifyContent="flex-end">
      <Box width={[1, 1, 2 / 3]} ml="auto">
        <MarkdownText size={2} align="right" lineHeight={1.5}>
          {props.description}
        </MarkdownText>
      </Box>
    </CommonContainer>
  </section>
);

export default Nosotros;
