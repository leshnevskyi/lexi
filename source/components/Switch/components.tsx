import styled from 'styled-components';
import {motion} from 'framer-motion';

import palette from 'style/palette';

interface TrackProps {
	length: number;
}

const Track = styled(motion.div)<TrackProps>`
	--track-padding: 0.2rem;

	position: relative;
	height: 3.5rem;
	aspect-ratio: ${({length}) => length} / 1;
	display: grid;
	grid-template-columns: repeat(${({length}) => length}, 1fr);
	grid-template-rows: 100%;
	padding: var(--track-padding);
	border-radius: 100vmax;
	box-shadow: inset 0px 3px 3px 0px rgba(0, 0, 0, 0.1);
	box-sizing: content-box;
	cursor: pointer;
`;

const Thumb = styled(motion.div).attrs({
	transition: {
		type: 'spring', 
		stiffness: 370, 
		bounce: 1, 
		damping: 23,
	},
})`
	aspect-ratio: 1 / 1;
	height: 100%;
	background: ${palette.retroblack.hex};
	border-radius: 100vmax;
	box-shadow: 
		0px 3px 5px -1px ${palette.retroblack.opacity(0.5)}, 
		0px 1px 3px -1px ${palette.retroblack.opacity(0.7)}, 
		0px 0px 1px 0px ${palette.retroblack.hex};
`;

interface IconContainerProps {
	color?: keyof typeof palette;
}

const IconContainer = styled.div<IconContainerProps>`
	position: absolute;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	padding: var(--track-padding);
	display: flex;
	color: ${({color}) => color ? palette[color].hex : 'white'};
`;

const IconWrapper = styled.div`
	height: 100%;
	aspect-ratio: 1 / 1;
	display: flex;
	align-items: center;
	justify-content: center;

	& > svg {
		height: 50%;
		stroke-width: 0.2rem;
	}
`;

export {Track, Thumb, IconContainer, IconWrapper};
