import React from 'react';
import '../App.css';

import Header from './Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NewPage from './Newpage';
import Home from './Home'

function App() {
  
 
  return (

    <div className="App">
      
      <Routes>
        <Route path="/advertiseAITest" element={<Home/>} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </div>

  );
}



export default App;