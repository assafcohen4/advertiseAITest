import React, { useState } from 'react';
import '../App.css';
import ChatWindow from './Chat/ChatWindow';
import {useNavigate } from 'react-router-dom';
import Header from './Header';

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
              { text: 'Lets find the best formula for you ', sender: 'bot' },
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
        <Header/>
        <ChatWindow messages={messages} onSendMessage={sendMessage} />
      </>
    );
  }

  export default Home