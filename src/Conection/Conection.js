
export const fetchCharacters = async(url, setCharacters) => {
   await fetch(url)
    .then(response => response.json())
    .then(data => setCharacters(data.results) )
    .catch(error => console.log(error))
};
