import Link from 'next/link'
import { Trash2Icon, SquarePenIcon } from 'lucide-react'
import { TableProps } from '.'
import { Button } from '../button'
import { Tooltip } from '../tooltip'

export function TableBody({ rows = [] }: TableProps) {
  return (
    <tbody className=" text-base text-gray-700">
      {rows.map((line, index) => (
        <tr key={index} className="text-left  odd:bg-gray-100 even:bg-gray-200">
          {line.map((value, i) => (
            <td key={i} className="border border-gray-300 px-3 py-2">
              {value}
            </td>
          ))}
          <td className="border border-gray-300 px-3 py-2">
            <div className="flex">
              <Tooltip label="Editar">
                <Button outline="gray" rounded className="mx-1" asChild>
                  <Link href="/form">
                    <SquarePenIcon size={20} />
                  </Link>
                </Button>
              </Tooltip>
              <Tooltip label="Deletar">
                <Button outline="red" rounded className="mx-1">
                  <Trash2Icon size={20} />
                </Button>
              </Tooltip>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  )
}
