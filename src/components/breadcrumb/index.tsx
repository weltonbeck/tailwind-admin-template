import Link from 'next/link'
import { ComponentProps } from 'react'
import { ChevronRightIcon, StickyNoteIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export type BreadcrumbProps = ComponentProps<'ul'>

export function Breadcrumb({ className, ...props }: BreadcrumbProps) {
  return (
    <ul
      className={twMerge('mb-5 flex items-center text-base gap-2', className)}
      {...props}
    >
      <li>
        <Link href="#" className="flex items-center hover:text-primary-600">
          <i className="mr-1">
            <StickyNoteIcon size={25} />
          </i>
          Páginas
        </Link>
      </li>
      <li>
        <i className="text-primary-500">
          <ChevronRightIcon size={20} strokeWidth={4} />
        </i>
      </li>
      <li>
        <Link href="#" className="hover:text-primary-600">
          subpage
        </Link>
      </li>
      <li>
        <i className="text-primary-500">
          <ChevronRightIcon size={20} strokeWidth={4} />
        </i>
      </li>
      <li>
        <span className="text-primary-600">link</span>
      </li>
    </ul>
  )
}
