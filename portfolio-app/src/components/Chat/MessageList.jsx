import React, {useEffect,useRef} from 'react';

function MessageList({ messages }) {



  const messagesEndRef = useRef(null);

  // Function to scroll to the bottom of the message list
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Scroll to bottom on initial load and whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);


  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
       <div ref={messagesEndRef} /> {/* This div is used to scroll to the bottom */}
    </div>
  );
}

export default MessageList;