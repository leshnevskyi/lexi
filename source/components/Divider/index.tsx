import styled from 'styled-components';

import palette from 'style/palette';

interface Props {
	isVertical?: boolean;
}

const Divider = styled.div<Props>`
  --stroke-width: 0.1rem;

  height: ${({isVertical}) => !isVertical 
		? 'var(--stroke-width)' 
		: '100%'};
  width: ${({isVertical}) => isVertical
		? 'var(--stroke-width)' 
		: '100%'};
  background: ${palette.ghostgrey};
`;

export default Divider;
