
export const fetchCharacters = async (url, setCharacters, setInfo) => {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.results) {
                setCharacters(data.results)
                setInfo(data.info);
            }
            else {
                setCharacters()
                setInfo([])

            }

        }
        )
        .catch(error => console.log(error))
};
