import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type FormGroupProps = ComponentProps<'div'>

export function FormGroup({ className, ...props }: FormGroupProps) {
  return (
    <div className={twMerge('mb-2', className)} {...props}>
      {props.children}
    </div>
  )
}
