import React from 'react';
import Text from './Text';
import { Box } from 'rebass';
import Input from './Input';

function LabelInput(props) {
  const { text, ...rest } = props;
  return (
    <label>
      <Box py={2}>
        <Text fontSize={2}>{text}</Text>
      </Box>
      <Input {...rest} />
    </label>
  );
}

export default LabelInput;
