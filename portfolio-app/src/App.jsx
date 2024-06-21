import React from 'react';
import './App.css';

import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NewPage from './components/Newpage';
import Home from './Home'

function App() {
  
 
  return (

    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </div>

  );
}



export default App;