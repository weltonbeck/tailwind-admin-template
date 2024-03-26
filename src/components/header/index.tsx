'use client'
import Link from 'next/link'
import { useContext } from 'react'
import { NavContext } from '@/contexts/nav'
import { ChevronDownIcon, MenuIcon } from 'lucide-react'

export function Header() {
  const { toggleShow } = useContext(NavContext)

  return (
    <header className="flex h-14 items-center border-b border-gray-300 bg-white p-2 px-4 shadow-lg transition-all">
      <button onClick={() => toggleShow()} className="md:invisible">
        <MenuIcon />
      </button>

      <div className="group relative ml-auto text-base">
        <span className="flex text-primary-500">
          Meu usuario
          <i>
            <ChevronDownIcon />
          </i>
        </span>
        <ul className="invisible absolute right-0 z-50 min-w-36 overflow-hidden rounded-md border border-gray-300 bg-white text-sm group-hover:visible">
          <li className="text-center  hover:bg-primary-100">
            <Link href="/" className="block px-2 py-1">
              Editar Perfil
            </Link>
          </li>
          <li className=" text-center  hover:bg-primary-100">
            <Link href="/" className="block px-2 py-1">
              Editar senha
            </Link>
          </li>
          <li className="border-b border-gray-300 text-center last:border-none"></li>
          <li className="text-center hover:bg-primary-100">
            <Link href="/" className="block px-2 py-1">
              Sair
            </Link>
          </li>
        </ul>
      </div>
    </header>
  )
}
