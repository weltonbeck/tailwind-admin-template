import Link from 'next/link'
import { Trash2Icon, SquarePenIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { TableProps } from '.'
import { Button } from '../button'
import { Tooltip } from '../tooltip'

export function TableBody({ rows = [], cols }: TableProps) {
  return (
    <tbody className=" text-base text-gray-700">
      {rows.map((line, index) => {
        return (
          <tr
            key={index}
            className="text-left odd:bg-gray-100 even:bg-gray-200"
          >
            {line.map((value, i) => {
              let trClass = 'hidden md:table-cell'
              if ((cols && cols[i] && cols[i].showMobile) || i === 0) {
                trClass = ''
              }
              return (
                <td
                  key={i}
                  className={twMerge(
                    trClass,
                    'text-wrap break-all border border-gray-300 px-3 py-2 md:break-normal',
                  )}
                >
                  {value}
                </td>
              )
            })}
            <td className="border border-gray-300 px-3 py-2">
              <div className="flex flex-col md:flex-row">
                <Tooltip label="Editar">
                  <Button outline="gray" rounded className="m-1" asChild>
                    <Link href="/form">
                      <SquarePenIcon size={20} />
                    </Link>
                  </Button>
                </Tooltip>
                <Tooltip label="Deletar">
                  <Button outline="red" rounded className="m-1">
                    <Trash2Icon size={20} />
                  </Button>
                </Tooltip>
              </div>
            </td>
          </tr>
        )
      })}
    </tbody>
  )
}
