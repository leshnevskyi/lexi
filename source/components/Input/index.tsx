import {WordInput} from './components';

interface Props {
	value: string;
	onChange: (value: string) => void;
	placeholder: string;
}

const Input = ({value, onChange, placeholder}: Props) => {
	return (		
		<WordInput 
			type='text' 
			value={value}
			onChange={event => onChange(event.target.value)}
			placeholder={placeholder}
		/>
	);
};

export default Input;
