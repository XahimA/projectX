// Import necessary libraries
import React, { useState } from 'react';
import styled from '@emotion/styled';

// Styled components for the chat UI
const ChatContainer = styled.div`
  width: 70%;
  height: 80vh;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background-color: #000;
`;

const ChatMessages = styled.div`
  padding: 10px;
  height: calc(100% - 70px); 
  overflow-y: auto;
  background-color: #000;
`;

const Message = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #fff;
`;

const UserMessage = styled(Message)`
  background-color: #fff;
  color: #000;
  text-align: right;
`;

const BotMessage = styled(Message)`
  background-color: #000;
  text-align: left;
  color: #fff;
`;

const InputContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  border: 1px solid #fff;
  border-radius: 5px;
  margin-right: 10px;
`;

const SendButton = styled.button`
  padding: 8px 12px;
  background-color: #000;
  color: #fff;
  border: 1px solid #fff;
  border-radius: 5px;
  cursor: pointer;
`;


// Main CustomerComponent
const CustomerComponent = () => {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newUserMessage = { text: inputText, type: 'user' };
    const newBotMessage = { text: 'OK BOSS', type: 'bot' };

    setMessages([...messages, newUserMessage, newBotMessage]);
    setInputText('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <ChatContainer>
      <ChatMessages>
        {messages.map((message, index) => (
          <div key={index}>
            {message.type === 'user' ? (
              <UserMessage>{message.text}</UserMessage>
            ) : (
              <BotMessage>{message.text}</BotMessage>
            )}
          </div>
        ))}
      </ChatMessages>
      <InputContainer>
        <Input
          type="text"
          placeholder="Type your message..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </InputContainer>
    </ChatContainer>
  );
};

export default CustomerComponent;
