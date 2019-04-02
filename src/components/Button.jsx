import styled from 'styled-components';
import { withTextStyle } from './Text';
import { Box } from '@rebass/grid';

const Button = styled(withTextStyle(Box)).attrs({
  as: 'button',
})`
  border: none;
  background: ${({ theme }) => theme.color.green};
  color: ${({ theme }) => theme.color.white};
`;

export default Button;
