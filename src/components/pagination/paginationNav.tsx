'use client'
import Link from 'next/link'
import { usePathname, useSearchParams } from 'next/navigation'
import {
  ChevronFirstIcon,
  ChevronLastIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from 'lucide-react'
import { PaginationProps } from '.'

type PaginationNavItemProps = {
  page: number
  icon?: React.ReactNode
  title?: string
  active?: boolean
}

function PaginationNavItem({
  page,
  icon,
  title,
  active = false,
}: PaginationNavItemProps) {
  const searchParams = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const pathname = usePathname()
  params.set('page', page.toString())
  return (
    <li
      data-active={active}
      className={
        'border border-gray-300 bg-white text-gray-500 transition-colors first-of-type:rounded-s-lg -of-type:rounded-e-lg hover:bg-gray-100 hover:text-gray-700 active:bg-gray-200 data-[active=true]:bg-primary-100 data-[active=true]:text-primary-600 data-[active=true]:hover:bg-primary-200 data-[active=true]:active:bg-primary-300'
      }
    >
      <Link
        href={`${pathname}?${params.toString()}`}
        className="flex h-10 min-w-10 items-center justify-center px-3"
      >
        {icon}
        {title}
      </Link>
    </li>
  )
}

export function PaginationNav({ pagination }: PaginationProps) {
  const nav = []
  if (pagination.currentPage && pagination.currentPage > 1) {
    nav.push(
      <PaginationNavItem key="first" page={1} icon={<ChevronFirstIcon />} />,
    )
    nav.push(
      <PaginationNavItem
        key="previous"
        page={pagination.currentPage - 1}
        icon={<ChevronLeftIcon />}
      />,
    )
  }
  const amount = 2
  const firt =
    pagination.currentPage <= amount ? 1 : pagination.currentPage - amount
  const last =
    pagination.currentPage >= pagination.totalPages - amount
      ? pagination.totalPages
      : pagination.currentPage + amount
  for (let i = firt; i <= last; i++) {
    const active = pagination && i === pagination.currentPage
    nav.push(
      <PaginationNavItem
        key={i}
        page={i}
        title={i.toString()}
        active={active}
      />,
    )
  }
  if (
    pagination.currentPage &&
    pagination.currentPage < pagination.totalPages
  ) {
    nav.push(
      <PaginationNavItem
        key="next"
        page={pagination.currentPage + 1}
        icon={<ChevronRightIcon />}
      />,
    )
    nav.push(
      <PaginationNavItem
        key="last"
        page={pagination.totalPages}
        icon={<ChevronLastIcon />}
      />,
    )
  }

  return (
    <nav aria-label="navigation">
      <ul className="inline-flex -space-x-px text-base">{nav}</ul>
    </nav>
  )
}
