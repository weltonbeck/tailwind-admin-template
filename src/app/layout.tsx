import type { Metadata } from 'next'

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
