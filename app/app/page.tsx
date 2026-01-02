'use client'

import { useState } from 'react'

export default function AppPage() {
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage = input.trim()
    setInput('')
    setMessages(prev => [...prev, { role: 'user', content: userMessage }])
    setIsLoading(true)

    try {
      // TODO: Replace with actual API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      setMessages(prev => [...prev, { 
        role: 'assistant', 
        content: 'This is a placeholder response. The API integration needs to be restored.' 
      }])
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#f8f9fa',
    }}>
      {/* Header */}
      <header style={{
        padding: '16px 24px',
        borderBottom: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
      }}>
        <h1 style={{
          fontSize: '20px',
          fontWeight: '500',
          color: '#2c2c2c',
          margin: 0,
        }}>
          clar1ty
        </h1>
      </header>

      {/* Messages */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '24px',
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
      }}>
        {messages.length === 0 && (
          <div style={{
            textAlign: 'center',
            color: '#5f6368',
            marginTop: '40px',
          }}>
            <p style={{ fontSize: '16px', marginBottom: '8px' }}>
              Start a conversation
            </p>
            <p style={{ fontSize: '14px', color: '#8a8a8a' }}>
              Type a message below to begin
            </p>
          </div>
        )}

        {messages.map((msg, idx) => (
          <div
            key={idx}
            style={{
              marginBottom: '16px',
              display: 'flex',
              justifyContent: msg.role === 'user' ? 'flex-end' : 'flex-start',
            }}
          >
            <div style={{
              maxWidth: '70%',
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: msg.role === 'user' ? '#e8e8e8' : '#fff',
              border: msg.role === 'user' ? 'none' : '1px solid rgba(0,0,0,0.1)',
            }}>
              <p style={{
                margin: 0,
                fontSize: '15px',
                lineHeight: '1.5',
                color: '#2c2c2c',
              }}>
                {msg.content}
              </p>
            </div>
          </div>
        ))}

        {isLoading && (
          <div style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginBottom: '16px',
          }}>
            <div style={{
              padding: '12px 16px',
              borderRadius: '12px',
              backgroundColor: '#fff',
              border: '1px solid rgba(0,0,0,0.1)',
            }}>
              <p style={{
                margin: 0,
                fontSize: '15px',
                color: '#8a8a8a',
                fontStyle: 'italic',
              }}>
                Thinking...
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div style={{
        padding: '16px 24px',
        borderTop: '1px solid rgba(0,0,0,0.1)',
        backgroundColor: '#fff',
        maxWidth: '900px',
        width: '100%',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          gap: '12px',
          alignItems: 'flex-end',
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault()
                handleSend()
              }
            }}
            placeholder="Type your message..."
            disabled={isLoading}
            style={{
              flex: 1,
              padding: '12px 16px',
              border: '1px solid rgba(0,0,0,0.15)',
              borderRadius: '8px',
              fontSize: '15px',
              fontFamily: 'inherit',
              resize: 'none',
              minHeight: '44px',
              maxHeight: '120px',
              outline: 'none',
            }}
            rows={1}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              padding: '12px 24px',
              backgroundColor: input.trim() && !isLoading ? '#2c2c2c' : '#e8e8e8',
              color: input.trim() && !isLoading ? '#fff' : '#8a8a8a',
              border: 'none',
              borderRadius: '8px',
              fontSize: '15px',
              fontWeight: '500',
              cursor: input.trim() && !isLoading ? 'pointer' : 'not-allowed',
              transition: 'all 0.2s',
            }}
          >
            Send
          </button>
        </div>
        <p style={{
          fontSize: '12px',
          color: '#8a8a8a',
          margin: '8px 0 0 0',
          textAlign: 'center',
        }}>
          Enter to send, Shift+Enter for new line
        </p>
      </div>
    </div>
  )
}
