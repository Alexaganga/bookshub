'use client'; // Important: Mark this as a client component

import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, X } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface ChatMessage {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => {
    // Initialize with a bot message
    return [
      {
        id: 1,
        text: "Hi there! I'm your ebook assistant. How can I help you today?",
        sender: 'bot',
        timestamp: new Date(),
      },
    ];
  });
  
  const endOfMessagesRef = useRef<HTMLDivElement>(null);
  
  // Automatically scroll to the bottom when messages change
  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) return;
    
    // Add user message
    const userMessage: ChatMessage = {
      id: Date.now(), // Using timestamp for unique IDs
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');
    
    // Simulate bot response after a short delay
    setTimeout(() => {
      const responseText = getBotResponse(message);
      const botResponse: ChatMessage = {
        id: Date.now() + 1,
        text: responseText,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setChatHistory((prev) => [...prev, botResponse]);
    }, 1000);
  };
  
  // Simple bot response logic
  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();
    
    if (input.includes('book') || input.includes('ebook')) {
      return "We have a great selection of ebooks across various categories. Is there a specific topic or genre you're looking for?";
    } else if (input.includes('price') || input.includes('cost')) {
      return "Our ebooks range from $9.99 to $29.99 depending on the category and content. We also offer bundle deals if you're interested in multiple books!";
    } else if (input.includes('help') || input.includes('support')) {
      return "I'm here to help! You can ask me about our ebooks, pricing, formats, or how to purchase. If you need more assistance, you can also contact our support team at support@ebookhaven.com";
    } else if (input.includes('thank')) {
      return "You're welcome! Is there anything else I can help you with today?";
    } else if (input.includes('format') || input.includes('compatible')) {
      return "All our ebooks come in PDF, EPUB, and MOBI formats, making them compatible with virtually all e-readers, tablets, smartphones, and computers.";
    } else {
      return "Thank you for your message. How can I assist you with our ebook collection today?";
    }
  };
  
  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat Button */}
      <Button
        className={`rounded-full p-4 shadow-lg transition-colors ${
          isOpen ? 'bg-book-secondary' : 'bg-book-primary'
        }`}
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>
      
      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-20 right-6 w-80 md:w-96 z-50 shadow-xl border-book-primary/20 overflow-hidden animate-in fade-in-0 zoom-in-95">
          <CardHeader className="bg-book-primary text-white py-3 px-4">
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border-2 border-white">
                <AvatarImage src="/bot-avatar.png" alt="Chatbot" />
                <AvatarFallback className="bg-white text-book-primary">EB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-medium text-sm">EbookHaven Assistant</h3>
                <p className="text-xs text-white/70">Online</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0">
            <div className="h-96 overflow-y-auto p-4 bg-gray-50">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 ${
                      msg.sender === 'user'
                        ? 'bg-book-primary text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <p className="text-sm">{msg.text}</p>
                    <p
                      className={`text-xs mt-1 ${
                        msg.sender === 'user' ? 'text-white/70' : 'text-gray-500'
                      }`}
                    >
                      {formatTime(msg.timestamp)}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={endOfMessagesRef} />
            </div>
          </CardContent>
          
          <CardFooter className="p-2 bg-white border-t">
            <form onSubmit={handleSendMessage} className="w-full flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1"
                aria-label="Chat message input"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-book-primary hover:bg-book-secondary"
                aria-label="Send message"
              >
                <Send size={18} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Chatbot;