import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardFooterProps = ComponentProps<'div'>

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={twMerge(
        'min-h-6 border-t border-gray-300 bg-gray-200 p-3 flex justify-start items-center text-gray-700',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
