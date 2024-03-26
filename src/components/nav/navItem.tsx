import Link from 'next/link'
import { useContext } from 'react'
import { NavProps } from '@/constants/nav'
import { NavContext } from '@/contexts/nav'
import { PlusSquareIcon, MinusSquareIcon } from 'lucide-react'

export type NavItemProps = NavProps & {
  onLinkClick?: () => void
}

function NavItemChild({
  type = 'default',
  active = false,
  href = '#',
  title,
  onLinkClick,
}: NavItemProps) {
  if (type === 'space') {
    return (
      <li className="flex items-center">
        <div className="w-5 self-stretch border-r border-gray-400" />
        <div className="h-1 w-full border-b border-gray-400" />
        <div className="flex w-2 items-center p-2"></div>
      </li>
    )
  }

  return (
    <li>
      <Link
        data-active={active}
        href={href}
        onClick={onLinkClick}
        className="flex items-center text-sm hover:bg-gray-900  active:bg-gray-950 data-[active=true]:bg-gray-900"
      >
        <div className="w-5 self-stretch border-r border-gray-400" />
        <div className="h-1 w-3 border-b border-gray-400" />
        <div className="flex w-full items-center p-2">{title}</div>
      </Link>
    </li>
  )
}

export function NavItem({
  type = 'default',
  active = false,
  href = '#',
  title,
  icon,
  childrens,
}: NavItemProps) {
  const { toggleShow } = useContext(NavContext)

  if (type === 'space') {
    return (
      <li>
        <hr className="m-4 border-gray-400" />
      </li>
    )
  }

  return (
    <li data-active={active} className="group">
      <Link
        href={href}
        onClick={toggleShow}
        className="flex items-center bg-gray-600 text-base group-hover:bg-gray-700 group-hover:shadow-lg group-hover:active:bg-gray-800 group-data-[active=true]:bg-gray-700 group-data-[active=true]:shadow-lg"
      >
        <div className="w-2 self-stretch group-hover:bg-primary-600 group-data-[active=true]:bg-primary-600" />
        <div className="flex w-full items-center py-2 pl-1 pr-2">
          <i className="mr-2">{icon}</i>
          {title}
          {childrens && (
            <>
              <PlusSquareIcon
                size={15}
                className="ml-auto hidden group-hover:hidden group-data-[active=true]:hidden md:inline-block"
              />
              <MinusSquareIcon
                size={15}
                className="ml-auto hidden md:group-hover:inline-block md:group-data-[active=true]:inline-block"
              />
            </>
          )}
        </div>
      </Link>
      {childrens && (
        <ul className="max-h-0 overflow-hidden bg-gray-800 md:group-hover:max-h-fit md:group-data-[active=true]:max-h-fit">
          {childrens.map((values, index) => (
            <NavItemChild key={index} {...values} onLinkClick={toggleShow} />
          ))}
        </ul>
      )}
    </li>
  )
}
