import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type InputGroupProps = ComponentProps<'div'>

export function InputGroup({ className, ...props }: InputGroupProps) {
  return (
    <div className={twMerge('mb-2', className)} {...props}>
      {props.children}
    </div>
  )
}
