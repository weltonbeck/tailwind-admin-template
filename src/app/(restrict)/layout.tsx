import type { Metadata } from 'next'
import { Breadcrumb } from '@/components/breadcrumb'
import { Header } from '@/components/header'
import { Nav } from '@/components/nav'
import { NavProvider } from '@/contexts/nav'

import '@/styles/globals.css'

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
      <body className="font-sans text-gray-700">
        <section className="bg-gray-50">
          <NavProvider>
            <div className="flex">
              <Nav />
              <div className="grow">
                <Header />
                <main className="m-4 mt-6">
                  <Breadcrumb />
                  {children}
                </main>
              </div>
            </div>
          </NavProvider>
        </section>
      </body>
    </html>
  )
}
