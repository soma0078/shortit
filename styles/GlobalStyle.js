import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

	body {
		background-color: #e4e3e8;
    color: #383640;
    margin: 0;
	}

	a {
		text-decoration: none;
		color: #212121;
	}
	
`;

export default GlobalStyle;
