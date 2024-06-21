import React, { useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';
import Header from './components/Header';


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
    <>
    <Header/>
    <div className="App">
      <ChatWindow messages={messages} onSendMessage={sendMessage} />    
    </div>
    </>
  );
}

export default App;