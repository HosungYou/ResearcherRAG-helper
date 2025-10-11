'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { BookOpen, Send, Loader2, Github } from 'lucide-react'

interface Message {
  role: 'user' | 'assistant'
  content: string
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Hi! I\'m the ResearcherRAG Helper chatbot. I can help you with:\n\n- Understanding the 5-stage workflow\n- Query design and search strategies\n- PRISMA configuration\n- RAG system setup\n- Troubleshooting common issues\n\nWhat would you like to know?',
      timestamp: new Date()
    }
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      role: 'user',
      content: input,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        })
      })

      if (!response.ok) {
        const error = await response.json()
        throw new Error(error.error || 'Failed to get response')
      }

      const data = await response.json()

      const assistantMessage: Message = {
        role: 'assistant',
        content: data.message,
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])

    } catch (error: any) {
      console.error('Chat error:', error)
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: `Sorry, I encountered an error: ${error.message}. Please check your API key and try again.`,
        timestamp: new Date()
      }])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="w-8 h-8 text-primary-600" />
            <h1 className="text-2xl font-bold">ResearcherRAG Helper</h1>
          </Link>
          <nav className="flex gap-6">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <Link href="/guide" className="hover:text-primary-600">Guide</Link>
            <Link href="/chat" className="text-primary-600 font-semibold">Chatbot</Link>
            <Link href="/resources" className="hover:text-primary-600">Resources</Link>
            <a href="https://github.com/HosungYou/ResearcherRAG-helper" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4">AI-Powered Chatbot</h2>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Get instant answers about ResearcherRAG with RAG-powered assistance
            </p>
          </div>

          {/* Chat Container */}
          <div className="card h-[600px] flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {messages.map((message, i) => (
                <div
                  key={i}
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-4 rounded-lg ${
                      message.role === 'user'
                        ? 'bg-primary-600 text-white'
                        : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100'
                    }`}
                  >
                    <div className="text-sm whitespace-pre-wrap">{message.content}</div>
                    <div className={`text-xs mt-2 ${
                      message.role === 'user' ? 'text-primary-100' : 'text-gray-500 dark:text-gray-400'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </div>
                  </div>
                </div>
              ))}

              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-lg flex items-center gap-2">
                    <Loader2 className="w-5 h-5 animate-spin text-gray-500" />
                    <span className="text-sm text-gray-500 dark:text-gray-400">Thinking...</span>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="border-t border-gray-200 dark:border-gray-700 p-6">
              <div className="flex gap-3">
                <textarea
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about ResearcherRAG workflow, PRISMA, queries, troubleshooting..."
                  className="flex-1 resize-none rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                  rows={3}
                  disabled={isLoading}
                />
                <button
                  onClick={sendMessage}
                  disabled={!input.trim() || isLoading}
                  className="bg-primary-600 text-white px-6 rounded-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-2"
                  aria-label="Send message"
                >
                  <Send className="w-5 h-5" />
                  <span className="font-medium">Send</span>
                </button>
              </div>
              <div className="flex items-center justify-between mt-3">
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Powered by Claude 3.5 Sonnet | Press Enter to send, Shift+Enter for new line
                </p>
                <Link href="/guide" className="text-xs text-primary-600 hover:underline">
                  View Documentation
                </Link>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="mt-8 grid md:grid-cols-3 gap-4">
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-2">Example Questions</h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• How do I design a focused query?</li>
                <li>• What is PRISMA screening?</li>
                <li>• Show me Stage 1 workflow</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-2">Troubleshooting</h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• PRISMA returned 0 papers</li>
                <li>• PDF download failed</li>
                <li>• API key error</li>
              </ul>
            </div>
            <div className="card p-4">
              <h3 className="font-bold text-sm mb-2">Code Examples</h3>
              <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Show YAML template</li>
                <li>• Query syntax example</li>
                <li>• Research profile config</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
