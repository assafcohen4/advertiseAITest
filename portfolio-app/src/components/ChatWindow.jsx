import React from 'react';
import MessageList from './Chat/MessageList';
import InputArea from './Chat/InputArea';

function ChatWindow({ messages, onSendMessage }) {
  return (
    <div className="chat-window">
      <MessageList messages={messages} />
      <InputArea onSendMessage={onSendMessage} />
    </div>
  );
}

export default ChatWindow;