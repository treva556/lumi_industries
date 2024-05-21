// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
     <div className=' bg-black h-10'>
      <p className=' text-white'> X </p>
       </div>
       <div className=' bg-yellow-400 h-10 text-4xl'> LUMI INDUSTRIES</div>

     <div className=' bg-yellow-400 h-10'>
      <Nav/>
       </div>
       <div className=' bg-yellow-400 h-2 text-4xl'> </div>

    </div>
  );
}

export default App;


