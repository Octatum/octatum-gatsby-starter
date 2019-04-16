import styled from 'styled-components';
import { Box } from 'rebass';

const CommonContainer = styled(Box).attrs({
  px: [3, 3, 5],
  w: 1,
  mx: 'auto',
})`
  position: relative;
  box-sizing: content-box;
  max-width: 1300px;
`;

export default CommonContainer;
