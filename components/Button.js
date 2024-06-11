import styled, { css } from 'styled-components';

export default function Button({ variant, as: AsComponent, ...rest }) {
  if (AsComponent) {
    return <StyledLink as={AsComponent} $variant={variant} {...rest} />;
  }
  return <BaseButton $variant={variant} {...rest} />;
}

const buttonStyles = css`
  padding: 17px 25px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
`;

const primaryStyles = css`
  background-color: #613ad1;
  color: #fafafc;
`;

const secondaryStyles = css`
  background-color: #383640;
  color: #fafafc;
`;

const outlineStyles = css`
  background: #fafafc;
  border: 1px solid #e4e3e8;
  color: #383640;
`;

const mininalStyles = css`
  background-color: #f1f0f5;
  color: #383640;
`;

const VARIANTS = {
  primary: primaryStyles,
  secondary: secondaryStyles,
  outline: outlineStyles,
  minimal: mininalStyles,
};

const BaseButton = styled.button`
  ${buttonStyles}
  ${({ $variant }) => VARIANTS[$variant] ?? primaryStyles}
`;

const StyledLink = styled(BaseButton)``;
