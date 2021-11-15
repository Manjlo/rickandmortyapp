

function setColor(items) {
	const Dead = 'Dead'
	const Alive = 'Alive'
	const Unknown = 'unknown'
	const red = 'red-500'
	const green = 'green-400'
	const gray = 'gray-500'
	if (items === Dead) {
		return red
	}
	if (items === Alive) {
		return green
	}
	if (items === Unknown) {
		return gray
	}
}
export default setColor