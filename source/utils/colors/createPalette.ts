import Color from './Color';

function createPalette(hexColors: Record<string, string>) {
	return Object.entries(hexColors).reduce(
		(colorPalette, [colorName, hexValue]) => {
			return Object.assign(
				colorPalette, {[colorName]: new Color(hexValue)}
			);
		}, 
		{} as Record<keyof typeof hexColors, Color>
	);
}

export default createPalette;
