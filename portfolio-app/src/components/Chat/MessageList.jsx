import React from 'react';

function MessageList({ messages }) {
  return (
    <div className="messages">
      {messages.map((msg, index) => (
        <div key={index} className={`message ${msg.sender}`}>
          {msg.text}
        </div>
      ))}
    </div>
  );
}

export default MessageList;