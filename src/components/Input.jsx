import styled from 'styled-components';
import { Field } from 'formik';
import { withTextStyle } from './Text';

const withInputStyle = Component => styled(withTextStyle(Component))`
  width: 100%;
  background: #f1f1f1;
  border: none;
  padding: 6px 5px;

  textarea& {
    resize: none;
    height: 10em;
  }
`;

const Input = withInputStyle(Field);

export default Input;
