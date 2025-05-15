import React from 'react';

interface Message {
  text: string;
  isUser: boolean;
}

interface MessageBubbleProps {
  message: Message;
}

const MessageBubble: React.FC<MessageBubbleProps> = ({ message }) => {
  return (
    <div className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      <div
        className={`rounded-lg p-3 max-w-xs lg:max-w-md ${
          message.isUser
            ? 'bg-primary text-white'
            : 'bg-white text-gray-800 border border-gray-300'
        }`}
      >
        {message.text}
      </div>
    </div>
  );
};

export default MessageBubble;