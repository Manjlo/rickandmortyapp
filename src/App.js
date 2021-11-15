import React, { useEffect, useState } from 'react';
import './App.css';
import Characters from './components/cardsCharacters';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Searcher from './components/Searcher';
import { fetchCharacters } from './api_conection/Conection';
import Pagination from './components/Pagination';
import { handlePagination } from './api_conection/apiPagination'
import Modal from './components/Modal';


function App() {
  const [url, setUrl] = useState('https://rickandmortyapi.com/api/character/');
  const [characters, setcharacters] = useState([]);
  const [info, setInfo] = useState({next: null, prev: null});
  const [open, setOpen] = useState(false)
  const [modalContent, setModalContent] = useState()

  const updateUrl = (newUrl) => {
    handlePagination(newUrl, setUrl)

  }

  useEffect(() => {
    fetchCharacters(url, setcharacters, setInfo, setModalContent, setOpen)
  },
    [url])

  return (
    <>

      <Navbar />
      <Header />
      < Searcher updateUrl={updateUrl} />
      <Pagination updateUrl={updateUrl} next={info.next} prev={info.prev} />
      <Characters characters={characters} setModalContent={setModalContent} setOpen={setOpen }/>
      <Pagination updateUrl={updateUrl} next={info.next} prev={info.prev} />
      <Modal open={open} setOpen={setOpen} modalContent={modalContent}/>
    </>
  );
}

export default App;
