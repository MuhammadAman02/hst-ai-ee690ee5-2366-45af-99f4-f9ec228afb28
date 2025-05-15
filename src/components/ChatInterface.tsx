import React, { useState } from 'react';
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import MessageBubble from './MessageBubble';
import QuickSelect from './QuickSelect';
import { getMedicalResponse } from '../utils/medicalData';

interface Message {
  text: string;
  isUser: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newUserMessage: Message = { text: inputText, isUser: true };
    const botResponse: Message = { text: getMedicalResponse(inputText), isUser: false };

    setMessages([...messages, newUserMessage, botResponse]);
    setInputText('');
  };

  const handleQuickSelect = (scenario: string) => {
    const newUserMessage: Message = { text: scenario, isUser: true };
    const botResponse: Message = { text: getMedicalResponse(scenario), isUser: false };

    setMessages([...messages, newUserMessage, botResponse]);
  };

  const clearChat = () => {
    setMessages([]);
  };

  return (
    <div className="flex flex-col h-screen max-w-2xl mx-auto">
      <div className="bg-primary text-white p-4 text-center">
        <h1 className="text-2xl font-bold">Medical Assistant Chatbot</h1>
      </div>
      <div className="flex-grow overflow-auto p-4 bg-gray-100">
        {messages.map((message, index) => (
          <MessageBubble key={index} message={message} />
        ))}
      </div>
      <QuickSelect onSelect={handleQuickSelect} />
      <div className="p-4 bg-white">
        <div className="flex space-x-2">
          <Input
            type="text"
            placeholder="Type your medical question..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button onClick={handleSend}>Send</Button>
        </div>
        <div className="mt-2 text-center">
          <Button variant="outline" onClick={clearChat}>Clear Chat</Button>
        </div>
        <p className="text-xs text-gray-500 mt-2 text-center">
          Disclaimer: This chatbot provides general information and is not a substitute for professional medical advice.
        </p>
      </div>
    </div>
  );
};

export default ChatInterface;