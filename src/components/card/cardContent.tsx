import { ComponentProps } from 'react'

import { twMerge } from 'tailwind-merge'

type CardContentProps = ComponentProps<'div'>

export function CardContent({ className, ...props }: CardContentProps) {
  return (
    <div className={twMerge('px-3 py-2', className)} {...props}>
      {props.children}
    </div>
  )
}
