import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type CardHeaderProps = ComponentProps<'div'>

export function CardHeader({ className, ...props }: CardHeaderProps) {
  return (
    <div
      className={twMerge(
        'min-h-6 border-b border-gray-300 bg-gray-200 px-3 py-2',
        className,
      )}
      {...props}
    >
      {props.children}
    </div>
  )
}
