'use client';

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
  const [chatHistory, setChatHistory] = useState<ChatMessage[]>(() => [
    {
      id: 1,
      text: "Hi there! I'm your Ebook Assistant. How can I help you today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);

  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (endOfMessagesRef.current) {
      endOfMessagesRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatHistory]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      text: message,
      sender: 'user',
      timestamp: new Date(),
    };

    setChatHistory((prev) => [...prev, userMessage]);
    setMessage('');

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

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase();

    if (input.includes('book') || input.includes('ebook')) {
      return "We have a wide variety of ebooks! Are you looking for fiction, non-fiction, academic, or self-help titles?";
    } else if (input.includes('price') || input.includes('cost')) {
      return "Each ebook costs only Ksh 50. You can purchase bundles too for discounts!";
    } else if (input.includes('help') || input.includes('support')) {
      return "I can assist with browsing, buying, and downloading ebooks. Feel free to ask!";
    } else if (input.includes('thank')) {
      return "You're welcome! Let me know if you need anything else.";
    } else if (input.includes('format') || input.includes('compatible')) {
      return "Our ebooks are available in PDF, EPUB, and MOBI formats—compatible with most devices.";
    } else if (input.includes('buy') || input.includes('purchase')) {
      return "To buy an ebook, just visit our website and click 'Buy Now' next to your preferred title. Payment via M-Pesa is supported!";
    } else if (input.includes('payment') || input.includes('m-pesa')) {
      return "We accept M-Pesa payments! You’ll get instructions during checkout.";
    } else if (input.includes('download')) {
      return "After purchasing, you'll receive a download link via email instantly.";
    } else {
      return "I'm here to help with anything related to ebooks, pricing, formats, or purchases. How can I assist you today?";
    }
  };

  const formatTime = (date: Date): string => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="fixed right-6 bottom-6 z-50">
      {/* Chat Button */}
      <Button
        className={`rounded-full p-5 shadow-lg transition-colors ${
          isOpen ? 'bg-book-secondary' : 'bg-book-primary'
        }`}
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
      >
        {isOpen ? <X size={32} /> : <MessageCircle size={32} />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 md:w-[28rem] z-50 shadow-xl border-book-primary/20 overflow-hidden animate-in fade-in-0 zoom-in-95">
          <CardHeader className="bg-book-primary text-white py-4 px-5">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 border-2 border-white">
                <AvatarImage src="/bot-avatar.png" alt="Chatbot" />
                <AvatarFallback className="bg-white text-book-primary">EB</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-base">EbookHaven Assistant</h3>
                <p className="text-xs text-white/80">Online · Ask me anything!</p>
              </div>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            <div className="h-[28rem] overflow-y-auto p-4 bg-gray-50">
              {chatHistory.map((msg) => (
                <div
                  key={msg.id}
                  className={`mb-3 flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg px-4 py-2 text-sm ${
                      msg.sender === 'user'
                        ? 'bg-book-primary text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <p>{msg.text}</p>
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

          <CardFooter className="p-3 bg-white border-t">
            <form onSubmit={handleSendMessage} className="w-full flex gap-2">
              <Input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="flex-1 text-sm"
                aria-label="Chat message input"
              />
              <Button
                type="submit"
                size="icon"
                className="bg-book-primary hover:bg-book-secondary"
                aria-label="Send message"
              >
                <Send size={20} />
              </Button>
            </form>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default Chatbot;
