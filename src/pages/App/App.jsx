import { useState } from 'react';
import Title from '../../components/Title/Title';
import Nav from '../../components/Nav/Nav';
import Contact from '../../pages/Contact/Contact';
import Art from '../../pages/Art/Art';
import 'animate.css';
import './App.css';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  return (
    <div className="App">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === 'contact' ? ( <Contact /> )
      : currentPage === 'art' ? ( <Art />)
      : ( <><Title /></> )}
    </div>
  );
}