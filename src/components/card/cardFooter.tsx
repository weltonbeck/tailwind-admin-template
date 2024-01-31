import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

type CardFooterProps = ComponentProps<'div'>

export function CardFooter({ className, ...props }: CardFooterProps) {
  return (
    <div
      className={twMerge(
        'min-h-6 border-t border-gray-300 bg-gray-200 px-3 py-2',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
