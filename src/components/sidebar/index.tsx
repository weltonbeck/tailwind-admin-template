'use client'
import { useState } from 'react'

import { MenuIcon, XIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export function Sidebar() {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <>
      <aside
        aria-label="Sidebar"
        className={twMerge(
          'fixed left-0 top-0 z-40 h-screen w-52 bg-gray-600 transition-transform md:translate-x-0',
          !openMenu ? '-translate-x-full' : '',
        )}
      >
        <header className="h-14 bg-primary-500 p-4 text-white shadow-lg">
          <button
            onClick={() => setOpenMenu(!openMenu)}
            className="fixed left-44 top-4  md:invisible"
          >
            <XIcon />
          </button>
          <h2 className="font-medium">Painel Administrativo</h2>
        </header>
        Menu
      </aside>
      <header className="h-14 border border-gray-300 bg-white p-4 shadow-lg transition-all md:ml-52">
        <button onClick={() => setOpenMenu(!openMenu)} className="md:invisible">
          <MenuIcon />
        </button>
      </header>
    </>
  )
}
