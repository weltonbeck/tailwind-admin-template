'use client'
import { useContext } from 'react'
import { NavContext } from '@/contexts/nav'
import { MenuIcon } from 'lucide-react'

export function Header() {
  const { toggleShow } = useContext(NavContext)

  return (
    <header className="h-14 border-b border-gray-300 bg-white p-4 shadow-lg transition-all">
      <button onClick={() => toggleShow()} className="md:invisible">
        <MenuIcon />
      </button>
    </header>
  )
}
