import React from 'react';
import MessageList from './MessageList';
import InputArea from './InputArea';

function ChatWindow({ messages, onSendMessage }) {
  
  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <InputArea onSendMessage={onSendMessage} />
    </div>
  );
}

export default ChatWindow;