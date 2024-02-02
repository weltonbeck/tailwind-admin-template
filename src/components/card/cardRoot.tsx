import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardRootProps = ComponentProps<'div'>

export function CardRoot({ className, ...props }: CardRootProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col overflow-hidden rounded-lg border border-gray-300 bg-white shadow-lg',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
