import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type TooltipProps = ComponentProps<'div'> & {
  label: string
}

export function Tooltip({ label, className, ...props }: TooltipProps) {
  return (
    <div className="group relative flex justify-center">
      {props.children}
      <span
        className={twMerge(
          'pointer-events-none invisible absolute -top-8 rounded-full bg-primary-400 px-3 py-1 text-sm text-white group-hover:visible',
          className,
        )}
        {...props}
      >
        {label}
      </span>
    </div>
  )
}
