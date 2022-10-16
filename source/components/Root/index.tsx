import {useState} from 'react';

import {Wrapper} from './components';

import GlobalStyle from 'style/GlobalStyle';
import Input from 'components/Input';
import Header from 'components/Header';
import Divider from 'components/Divider';

const Root = () => {
	const [value, setValue] = useState('');
	return (
		<>
			<GlobalStyle/>
			<Wrapper/>
			<Header/>
			<Input 
				value={value} 
				onChange={value => setValue(value)} 
				placeholder='new word...'
			/>
			<Divider/>
			<Input 
				value={value} 
				onChange={value => setValue(value)} 
				placeholder='meaning'
			/>
		</>
	);
};

export default Root;
