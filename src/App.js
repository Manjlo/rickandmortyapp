import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/cardsCharacters';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Searcher from './components/Searcher';
import { fetchCharacters } from './Conection/Conection';



function App() {
  const initUrl = "https://rickandmortyapi.com/api/character/?name="

  const [characters, setcharacters] = useState([]);

  useEffect(() => {
    fetchCharacters(initUrl, setcharacters);

  },
    [])

  return (
    <>
      <Navbar />
      <Header />
      < Searcher />
      <Characters characters={characters} />
    </>
  );
}

export default App;
