import React, { useState } from 'react';
import './App.css';
import ChatWindow from './components/ChatWindow';


function App() {
  const [messages, setMessages] = useState([]);

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
    <div className="App">
      
      <ChatWindow messages={messages} onSendMessage={sendMessage} />
    </div>
  );
}

export default App;