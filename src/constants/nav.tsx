import {
  LogOutIcon,
  LayoutDashboardIcon,
  FilePenLineIcon,
  StickyNoteIcon,
  ClipboardListIcon,
} from 'lucide-react'

export type NavProps = {
  active?: boolean
  type?: 'space' | 'default'
  href?: string
  title?: string
  icon?: React.ReactNode
  childrens?: NavProps[]
}

export const NAV: NavProps[] = [
  {
    active: true,
    title: 'Dashboard',
    icon: <LayoutDashboardIcon />,
    href: '/dashboard',
  },
  { title: 'Formulario', icon: <FilePenLineIcon />, href: '/form' },
  { title: 'Tabelas', icon: <ClipboardListIcon />, href: '/table' },
  {
    title: 'Páginas',
    icon: <StickyNoteIcon />,
    href: '/',
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
