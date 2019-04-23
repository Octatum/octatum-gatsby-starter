import React from 'react';
import { Box } from 'rebass';

import CommonContainer from '../../components/CommonContainer';
import Text, { MarkdownText } from '../../components/Text';

const PageSection = ({ text }) => (
  <section>
    <CommonContainer pt={4}>
      <Box py={4}>
        <Text fontSize={5} as="h1">
          {text.header}
        </Text>
      </Box>
    </CommonContainer>
    <CommonContainer py={3} justifyContent="flex-end">
      <Box width={[1, 1, 2 / 3]}>
        <MarkdownText fontSize={2} textAlign="left" lineHeight={1.5}>
          {text.about}
        </MarkdownText>
      </Box>
    </CommonContainer>
    <CommonContainer py={5} justifyContent="flex-end">
      <Box width={[1, 1, 2 / 3]} mr="auto">
        <MarkdownText fontSize={2} textAlign="left" lineHeight={1.5}>
          {text.moreText}
        </MarkdownText>
      </Box>
    </CommonContainer>
  </section>
);

export default PageSection;
