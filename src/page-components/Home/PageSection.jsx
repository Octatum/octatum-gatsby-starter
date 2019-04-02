import React from 'react';
import styled from 'styled-components';
import { Box, Flex } from '@rebass/grid';

import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';
import SectionHeader from './SectionHeader';
import { navigationIds } from '../../components/Navhub';
import SectionDiv from '../../components/SectionDiv';
import GreenDivider from '../../components/GreenDivider';

const PageSection = ({ text }) => (
  <section>
    <CommonContainer pt={4}>
      <SectionDiv id={navigationIds.about} />
      <SectionHeader
        topText="We got text too"
        lightText="Nice and "
        greenText="spacious"
      />
      <Box py={4}>
        <Text align="right" size={3}>
          Subheaders
          <br />
          are nice too~
          <br />
          I'm sure
        </Text>
      </Box>
    </CommonContainer>
    <GreenDivider />
    <CommonContainer py={5} justifyContent="flex-end">
      <Box width={[1, 1, 2 / 3]} ml="auto">
        <MarkdownText size={2} align="right" lineHeight={1.5}>
          {text.about}
        </MarkdownText>
      </Box>
    </CommonContainer>
    <GreenDivider left />
    <CommonContainer py={5} justifyContent="flex-end">
      <Box width={[1, 1, 2 / 3]} mr="auto">
        <MarkdownText size={2} align="left" lineHeight={1.5}>
          {text.moreText}
        </MarkdownText>
      </Box>
    </CommonContainer>
  </section>
);

export default PageSection;
