import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputLabelProps = ComponentProps<'label'>

export function InputLabel({ className, ...props }: InputLabelProps) {
  return (
    <label
      className={twMerge('mb-1 text-sm font-medium text-gray-800', className)}
      {...props}
    >
      {props.children}
    </label>
  )
}
