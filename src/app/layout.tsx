import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Next Base Project',
  description: 'Next Base Project',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
