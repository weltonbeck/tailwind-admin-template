'use client'
import { useContext } from 'react'
import { NAV } from '@/constants/nav'
import { NavContext } from '@/contexts/nav'
import { XIcon } from 'lucide-react'
import { NavItem } from './navItem'

export function Nav() {
  const { show, toggleShow } = useContext(NavContext)

  return (
    <aside
      aria-label="Sidebar menu"
      data-open={show}
      className="fixed left-0 top-0 z-40 size-full min-h-screen min-w-52 translate-x-0 bg-gray-600 transition-transform max-md:data-[open=false]:-translate-x-full md:relative md:h-auto md:w-52"
    >
      <header className="flex h-14 justify-between bg-primary-600 p-4 text-white shadow-lg">
        <h2 className="font-medium">Painel Administrativo</h2>
        <button onClick={() => toggleShow()} className="md:hidden">
          <XIcon />
        </button>
      </header>
      <nav className="mt-6 font-medium text-white">
        <ul>
          {NAV.map((values, index) => {
            return <NavItem key={index} {...values} />
          })}
        </ul>
      </nav>
    </aside>
  )
}
