import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';

import {Root} from './components';

const containerElement = document.createElement('root');

createRoot(containerElement).render(
	<StrictMode>
		<Root/>
	</StrictMode>
);

document.body.appendChild(containerElement);
