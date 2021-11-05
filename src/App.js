import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/cardsCharacters';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Searcher from './components/Searcher';
import { fetchCharacters } from './api_conection/Conection';
import Pagination from './components/Pagination';
import { handlePagination } from './api_conection/apiPagination'


function App() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState([]);

  const updateUrl = (position) => {
    handlePagination(info.next, info.prev, setUrl, position)
  }

  useEffect(() => {
    fetchCharacters(url, setcharacters, setInfo);

  },
    [url])

  return (
    <>
      <Navbar />
      <Header />
      < Searcher />
      <Pagination updateUrl={updateUrl} next={ info.next } prev={ info.prev }/>
      <Characters characters={characters} />
      <Pagination updateUrl={updateUrl} next={info.next} prev={ info.prev} />

    </>
  );
}

export default App;
