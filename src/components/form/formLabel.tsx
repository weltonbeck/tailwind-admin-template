import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type FormLabelProps = ComponentProps<'label'>

export function FormLabel({ className, ...props }: FormLabelProps) {
  return (
    <label
      className={twMerge('mb-1 text-sm font-medium text-gray-800', className)}
      {...props}
    >
      {props.children}
    </label>
  )
}
