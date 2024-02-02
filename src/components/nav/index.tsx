'use client'
import { useContext } from 'react'
import { NavContext } from '@/contexts/nav'
import {
  XIcon,
  LogOutIcon,
  LayoutDashboardIcon,
  FilePenLineIcon,
  StickyNoteIcon,
  ClipboardListIcon,
} from 'lucide-react'
import { NavItem, NavItemProps } from './navItem'

export function Nav() {
  const { show, toggleShow } = useContext(NavContext)

  const menu: NavItemProps[] = [
    {
      active: true,
      title: 'Dashboard',
      icon: <LayoutDashboardIcon />,
      href: '/dashboard',
    },
    { title: 'Formulario', icon: <FilePenLineIcon />, href: '/form' },
    { title: 'Tabelas', icon: <ClipboardListIcon />, href: '/table' },
    {
      title: 'Paginas',
      icon: <StickyNoteIcon />,
      href: '/dashboard',
      childrens: [
        {
          title: 'Login',
          href: '/',
        },
        { title: 'Esqueci a senha', href: '/dashboard' },
        { type: 'space' },
        {
          title: 'Erro 404',
          href: '/404',
        },
      ],
    },
    { type: 'space' },
    { title: 'Sair', icon: <LogOutIcon />, href: '/' },
  ]

  return (
    <aside
      aria-label="Sidebar menu"
      data-open={show}
      className="fixed left-0 top-0 z-40 h-auto min-h-screen w-52 translate-x-0 bg-gray-600 transition-transform max-md:data-[open=false]:-translate-x-full md:relative"
    >
      <header className="h-14 bg-primary-600 p-4 text-white shadow-lg">
        <button
          onClick={() => toggleShow()}
          className="fixed left-44 top-4  md:invisible"
        >
          <XIcon />
        </button>
        <h2 className="font-medium">Painel Administrativo</h2>
      </header>
      <nav className="mt-6 font-medium text-white">
        <ul>
          {menu.map((values, index) => {
            return <NavItem key={index} {...values} />
          })}
        </ul>
      </nav>
    </aside>
  )
}
