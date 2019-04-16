import { Text as RebassText } from 'rebass';
import styled from 'styled-components';

const Button = styled(RebassText)`
  border: none;
`;

Button.defaultProps = {
  as: 'button',
  color: 'white',
  fontSize: 2,
  bg: 'green',
};

export default Button;
