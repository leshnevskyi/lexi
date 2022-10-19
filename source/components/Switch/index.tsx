import {useCallback, useEffect} from 'react';
import {isObject} from 'lodash';

import {Track, Thumb, IconContainer, IconWrapper} from './components';

import {useElement, useMutationObserver} from 'hooks';

type Option<T> = T | {
	icon?: JSX.Element;
	value: T;
}

type Options<T> = [Option<T>, Option<T>, ...Option<T>[]];

interface Props<T> {
	value: T,
	onChange: (value: T) => void,
	options?: Options<T>;
}

const toggleOptions = [false, true];

const Switch = <T, >({
	value,
	onChange: handleChange,
	options = toggleOptions as Options<T>,
}: Props<T>) => {
	const normalizedOptions = options.map(option => {
		return isObject(option) ? option : {value: option};
	});

	const selectedOptionIndex = normalizedOptions
		.findIndex(option => option.value === value);

	const renderedIcons = normalizedOptions.map(({value, icon}) => {
		return (
			<IconWrapper 
				key={String(value)} 
				onClick={() => handleChange(value)}
			>
				{icon}
			</IconWrapper>
		);
	});
	
	const [
		iconContainerRef, iconContainerElement,
	] = useElement<HTMLDivElement>();

	const getThumbClippingMask = useCallback((thumbElement: HTMLDivElement) => {
		const parentRect = (
			thumbElement.offsetParent || document.body
		).getBoundingClientRect();
		const thumbRect = thumbElement.getBoundingClientRect();
		const radius = thumbRect.height / 2;

		return `circle(${radius}px at ${
			radius + thumbRect.left - parentRect.left
		}px ${
			thumbRect.top - parentRect.top + radius
		}px`; 
	}, []);

	const clipIconContainerToThumb = useCallback(
		(thumbElement: HTMLDivElement) => {
			if (!iconContainerElement) return;

			iconContainerElement.style.clipPath 
				= getThumbClippingMask(thumbElement);
		}, [iconContainerElement]
	);

	const [thumbRef, thumbElement] = useMutationObserver<HTMLDivElement>(
		clipIconContainerToThumb, {attributes: true}
	);

	useEffect(() => {
		thumbElement && clipIconContainerToThumb(thumbElement);
	}, [thumbElement]);

	return (
		<Track 
			role='switch'
			length={options.length}
		>
			<IconContainer color='retroblack'>
				{renderedIcons}
			</IconContainer>
			<Thumb 
				layout={true}
				ref={element => {
					thumbRef(element);
				}}
				tabIndex={0}	
				style={{gridColumnStart: selectedOptionIndex + 1}}
			/>
			<IconContainer 
				ref={iconContainerRef} 
			>
				{renderedIcons}
			</IconContainer>
		</Track>
	);
};

export default Switch;
