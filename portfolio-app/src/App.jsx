import React, { useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NewPage from './components/Newpage';


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

function Home() {
  const [messages, setMessages] = useState([{ text: 'Tell me about your product and together we will make it succeed', sender: 'bot' }]);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  const sendMessage = (message) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      setCounter(counter+1)

      // Simulate bot response
      if(counter !==2){
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'This is a bot response. '  + counter, sender: 'bot' },
          ]);
        }, 1000);
      }
      else {
        setTimeout(() => {
          setMessages((prevMessages) => [
            ...prevMessages,
            { text: 'Lets find the best formula for you '  + counter, sender: 'bot' },
          ]);
        }, 1000);
        setTimeout(() => {
          navigate('/newpage')
        }, 3000);
      }

      
    
    }
  };

  

  return (
    <>
      <ChatWindow messages={messages} onSendMessage={sendMessage} />
    </>
  );
}

export default App;