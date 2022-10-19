class Color {
	hex: string;

	constructor(hex: string) {
		this.hex = hex;
	}

	toString() {
		return this.hex;
	}

	opacity(value: number) {
		return `${this.hex}${
			Math.floor(value * 255).toString(16).padStart(2, '0')
		}`;
	}
}

export default Color;
