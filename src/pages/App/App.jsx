import { useState } from 'react';
import Title from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import Contact from '../../pages/Contact/Contact';
import Art from '../../pages/Art/Art';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <>
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'contact' ? ( <Contact /> )
      : currentPage === 'art' ? ( <Art />)
      : ( <><Title /></> )}
    </>
  );
}