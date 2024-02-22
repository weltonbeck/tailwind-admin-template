'use client'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ArrowUpAZIcon, ArrowDownAZIcon, ArrowUpDownIcon } from 'lucide-react'
import { TableProps } from '.'

export function TableHead({ cols = [] }: TableProps) {
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
    <thead className="border border-gray-700 text-left text-sm font-semibold uppercase text-white">
      <tr>
        {cols.map((el, index) => {
          return (
            <th key={index} className="p-2">
              <div className="flex items-center">
                {el.title}
                {el.filter && (
                  <button
                    onClick={() => setOrdenation(el.field)}
                    className="ml-2 text-primary-300 hover:text-primary-200 active:text-primary-50"
                  >
                    {orderField === el.field && (
                      <>
                        {orderDirection === 'up' && <ArrowUpAZIcon size={20} />}
                        {orderDirection === 'down' && (
                          <ArrowDownAZIcon size={20} />
                        )}
                      </>
                    )}
                    {orderField !== el.field && <ArrowUpDownIcon size={20} />}
                  </button>
                )}
              </div>
            </th>
          )
        })}
        <th className="p-2">Ações</th>
      </tr>
    </thead>
  )
}
