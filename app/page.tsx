'use client'

import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        textAlign: 'center',
        maxWidth: '600px',
      }}>
        <h1 style={{
          fontSize: '48px',
          fontWeight: '500',
          marginBottom: '24px',
          fontFamily: "'Dancing Script', cursive",
        }}>
          clar1ty
        </h1>
        <p style={{
          fontSize: '18px',
          color: '#5f6368',
          lineHeight: '1.6',
          marginBottom: '32px',
        }}>
          A quiet space to think things through.
        </p>
        <button
          onClick={() => router.push('/app')}
          style={{
            padding: '14px 32px',
            fontSize: '16px',
            fontWeight: '400',
            color: '#2c2c2c',
            backgroundColor: 'rgba(44, 44, 44, 0.03)',
            border: '1px solid rgba(44, 44, 44, 0.15)',
            borderRadius: '4px',
            cursor: 'pointer',
            transition: 'all 0.2s ease',
            fontFamily: 'inherit',
          }}
        >
          Continue
        </button>
      </div>
    </div>
  )
}

