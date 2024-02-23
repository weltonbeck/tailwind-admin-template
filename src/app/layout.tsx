import type { Metadata } from 'next'

import '../styles/globals.css'

export const metadata: Metadata = {
  title: 'Tailwind Admin Template',
  description: 'Tailwind Admin Template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="font-sans text-gray-700">{children}</body>
    </html>
  )
}
