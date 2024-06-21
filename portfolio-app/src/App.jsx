import React, { useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import NewPage from './components/Newpage';


function App() {
  const [messages, setMessages] = useState([{ text: 'Tell me about your product and together we will make it succeed', sender: 'bot' }]);
  
  const sendMessage = (message) => {
    if (message.trim()) {
      setMessages([...messages, { text: message, sender: 'user' }]);
      // Simulate bot response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'This is a bot response.', sender: 'bot' },
        ]);
      }, 1000);
    }
  };
  
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ChatWindow messages={messages} onSendMessage={sendMessage} />} />
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
      <NavigateButton />
    </div>
  </Router>
  );
}

function NavigateButton() {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate('/newpage')}>Click me</button>
  );
}

export default App;