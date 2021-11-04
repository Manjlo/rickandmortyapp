

function setColor(items) {
	const Dead = 'Dead'
	const Alive = 'Alive'
	const Unknown = 'unknown'
	const red = 'bg-red-500'
	const green = 'bg-green-400'
	const gray = 'bg-gray-500'
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