import { forwardRef } from 'react';
import styled from 'styled-components';

const BaseInput = styled.input`
  background-color: #fafafc;
  border: 1px solid #c8c6d0;
  border-radius: 5px;
  padding: 18px 21px;
  color: #383640;
  outline: none;

  &:focus {
    padding: 17px 20px;
    border-color: #613ad1;
    border-width: 2px;
  }

  &::placeholder {
    color: #c8c6d0;
  }
`;

export default forwardRef(function Input({ ...rest }, ref) {
  return <BaseInput {...rest} ref={ref} />;
});
