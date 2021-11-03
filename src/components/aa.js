() => {
	const Dead = 'Dead'
	const Alive = 'Alive'
	const Unknown = 'unknown'
	const red = 'Text-color-red'
	const green = 'text-green-500'
	const gray = 'text-gray-500'
	if (items.status === Dead) {
		return red

	}
	if (items.status === Alive) {
		return green

	}
	if (items.status === Unknown) {
		return gray
	}

}
