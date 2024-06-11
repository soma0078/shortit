import styled from 'styled-components';

export default function Container({ className = '', page = false, children }) {
  return <StyledContainer className={`${page ? 'page' : ''} ${className}`}>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 900px;

  &.page {
    margin: 111px 0;
  }
`;
