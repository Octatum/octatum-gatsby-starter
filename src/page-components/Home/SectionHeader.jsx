import React from 'react';
import Text from '../../components/Text';
import { Box } from '@rebass/grid';

function SectionHeader(props) {
  const { topText, lightText, greenText } = props;
  return (
    <Box as="h1" w={1} py={4}>
      <Text size={6} font="secondary">
        {topText}
      </Text>
      <Text size={3} style={{ letterSpacing: '2px' }}>
        {lightText}
        <Text as="span" color="green" bold>
          {greenText}
        </Text>
      </Text>
    </Box>
  );
}

export default SectionHeader;
