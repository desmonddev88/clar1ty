export default function Home() {
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
        }}>
          A quiet space to think things through.
        </p>
      </div>
    </div>
  )
}

