import React from 'react';
import logo from './logo.svg';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div className='header'>
        <div className='header-box w-full z-0 h-48 absolute'> </div>
        <div className='circle absolute'></div>
      </div>
      <footer className=' absolute bottom-0'>
        footer
      </footer>
    </div>
  );
}

export default App;
