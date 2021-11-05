
export const fetchCharacters = async (url, setCharacters, setInfo) => {
    await fetch(url)
        .then(response => response.json())
        .then(data => {
            setCharacters(data.results)
            setInfo(data.info);
        }
        )
        .catch(error => console.log(error))
};
