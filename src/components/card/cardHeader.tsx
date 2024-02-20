import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardHeaderProps = ComponentProps<'div'>

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={twMerge(
        'min-h-6 border-b border-gray-300 bg-gray-200 p-3 flex justify-start items-center text-gray-700',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
