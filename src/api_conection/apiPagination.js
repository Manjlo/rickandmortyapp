
export function handlePagination(nextUrl, prevUrl, setUrl, position) {
	if (position==='prev') {
		setUrl(prevUrl)
	}
	else {
	setUrl(nextUrl);
	}
}