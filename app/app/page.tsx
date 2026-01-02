'use client'

export default function AppPage() {
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
          fontSize: '32px',
          fontWeight: '500',
          marginBottom: '24px',
        }}>
          Welcome to clar1ty
        </h1>
        <p style={{
          fontSize: '16px',
          color: '#5f6368',
          lineHeight: '1.6',
        }}>
          The main application will be available here.
        </p>
      </div>
    </div>
  )
}

