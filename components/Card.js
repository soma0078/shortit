import styled from 'styled-components';

export default function Card({ ...rest }) {
  return <StyledCard {...rest} />;
}

function CardFooter({ ...rest }) {
  return <StyledCardFooter {...rest} />;
}

Card.Footer = CardFooter;

const StyledCard = styled.div`
  background-color: #fafafc;
  border-radius: 10px;
  padding: 37px 35px;
`;

const StyledCardFooter = styled.div`
	background-color: #f1f0f5;
	border-radius: 0 0 10px 10px;
	margin: margin: 37px -35px -37px -35px;
	padding: 37px 35px;
`;
