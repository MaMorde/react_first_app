import React from 'react';
import './App.css';
import Header from './components/Header/Header.js';
import Navbar from './components/Navbar/Navbar.js';
import Content from './components/Profile/Profile.js';


function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <Content />
    </div>
  );
}


export default App;
