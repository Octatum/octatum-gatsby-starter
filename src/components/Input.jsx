import styled from 'styled-components';
import { Field } from 'formik';

const withInputStyle = Component => styled(Component)`
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
