import type { Metadata } from 'next'

import { Sidebar } from '@/components/sidebar'

import '../../styles/globals.css'

export const metadata: Metadata = {
  title: 'Tailwind Admin Template',
  description: 'Tailwind Admin Template',
}

export default function RestricLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 font-sans">
        <Sidebar />
        <div className="flex h-screen flex-col">
          <main className="p-4 transition-all duration-300 md:ml-52 md:pl-8">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
