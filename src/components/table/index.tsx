'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ComponentProps } from 'react'
import {
  Trash2Icon,
  SquarePenIcon,
  ArrowUpAZIcon,
  ArrowDownAZIcon,
  ArrowUpDownIcon,
} from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { Button } from '../button'

type TableProps = ComponentProps<'table'> & {
  cols?: {
    title: string
    field: string
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
  const searchParams = useSearchParams()
  const orderField = searchParams.get('orderField') || 'id'
  const orderDirection = searchParams.get('orderDirection') || 'down'
  const pathname = usePathname()
  const { replace } = useRouter()

  const setOrdenation = (term: string) => {
    const params = new URLSearchParams(searchParams)
    let newDirection = orderDirection === 'down' ? 'up' : 'down'
    newDirection = term !== orderField ? 'down' : newDirection
    if (term) {
      params.set('page', '1')
      params.set('orderField', term)
      params.set('orderDirection', newDirection)
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <table
      className={twMerge(
        'mb-5 w-full table-auto overflow-hidden rounded-t bg-gray-700',
        className,
      )}
      {...props}
    >
      <thead className="border border-gray-700 text-left text-sm font-semibold uppercase text-white">
        <tr>
          {cols.map((el, index) => {
            return (
              <th key={index} className="p-2">
                <div className="flex items-center">
                  {el.title}
                  {el.filter && (
                    <button onClick={() => setOrdenation(el.field)}>
                      {orderField === el.field && (
                        <>
                          {orderDirection === 'up' && (
                            <ArrowUpAZIcon
                              className="ml-2 text-primary-300"
                              size={20}
                            />
                          )}
                          {orderDirection === 'down' && (
                            <ArrowDownAZIcon
                              className="ml-2 text-primary-300"
                              size={20}
                            />
                          )}
                        </>
                      )}
                      {orderField !== el.field && (
                        <ArrowUpDownIcon
                          className="ml-2 text-primary-300"
                          size={20}
                        />
                      )}
                    </button>
                  )}
                </div>
              </th>
            )
          })}
          <th className="p-2">Ações</th>
        </tr>
      </thead>
      <tbody className=" text-base text-gray-700">
        {rows.map((line, index) => (
          <tr
            key={index}
            className="text-left  odd:bg-gray-100 even:bg-gray-200"
          >
            {line.map((value, i) => (
              <td key={i} className="border border-gray-300 px-3 py-2">
                {value}
              </td>
            ))}
            <td className="border border-gray-300 px-3 py-2">
              <div className="flex">
                <div className="group relative flex justify-center">
                  <Button
                    outline="gray"
                    size="sm"
                    className="mx-1 size-9 rounded-full p-1"
                  >
                    <SquarePenIcon size={20} />
                  </Button>
                  <span className="pointer-events-none invisible absolute -top-8 rounded-full bg-gray-400 px-3 py-1 text-sm text-white group-hover:visible">
                    Editar
                  </span>
                </div>
                <div className="group relative flex justify-center">
                  <Button
                    outline="error"
                    size="sm"
                    className="mx-1 size-9 rounded-full p-1"
                  >
                    <Trash2Icon size={20} />
                  </Button>
                  <span className="pointer-events-none invisible absolute -top-8 rounded-full bg-gray-400 px-3 py-1 text-sm text-white group-hover:visible">
                    Deletar
                  </span>
                </div>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
