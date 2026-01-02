import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'clar1ty',
  description: 'A quiet space to think things through.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

