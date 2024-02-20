import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { PaginationInfo } from './paginationInfo'
import { PaginationNav } from './paginationNav'

export type PaginationProps = ComponentProps<'div'> & {
  pagination: {
    limitPerPage: number
    currentPage: number
    totalPages: number
    totalItens: number
  }
}

export function Pagination({
  pagination,
  className,
  ...props
}: PaginationProps) {
  return (
    <div className={twMerge('flex justify-between', className)} {...props}>
      <PaginationInfo pagination={pagination} />
      <PaginationNav pagination={pagination} />
    </div>
  )
}
