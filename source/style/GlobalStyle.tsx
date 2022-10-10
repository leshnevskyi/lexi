import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	:root {
		font-family: system-ui;
		font-size: calc(10 / 16 * 100%);
	}

	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}
`;

export default GlobalStyle;
