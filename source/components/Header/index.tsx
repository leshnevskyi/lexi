import {useState} from 'react';

import {Container} from './components';
import {Switch} from 'components';

import {ReactComponent as PencilIcon} from 'assets/icons/pencil.svg';
import {ReactComponent as BookIcon} from 'assets/icons/book.svg';
import {ReactComponent as CogIcon} from 'assets/icons/cog.svg';

enum Mode {
	Editor,
	Dictionary,
	Settings,
}

const Header = () => {
	const [mode, setMode] = useState(Mode.Editor);

	return (
		<Container>
			<Switch 
				value={mode}
				onChange={mode => setMode(mode)}
				options={[
					{icon: <PencilIcon/>, value: Mode.Editor},
					{icon: <BookIcon/>, value: Mode.Dictionary},
					{icon: <CogIcon/>, value: Mode.Settings},
				]}
			/>
		</Container>
	);
};

export default Header;
