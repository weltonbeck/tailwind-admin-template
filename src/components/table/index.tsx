import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { TableBody } from './tableBody'
import { TableHead } from './tableHead'

export type TableProps = ComponentProps<'table'> & {
  cols?: {
    title: string
    field?: string
    filter?: boolean
  }[]
  rows?: React.ReactNode[][]
}

export function Table({
  cols = [],
  rows = [],
  className,
  ...props
}: TableProps) {
  return (
    <table
      className={twMerge(
        'mb-5 w-full table-auto overflow-hidden rounded-t bg-gray-700',
        className,
      )}
      {...props}
    >
      <TableHead cols={cols} />
      <TableBody rows={rows} />
    </table>
  )
}
