import { ComponentProps } from 'react'

import { Loader } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded py-2 font-medium shadow',
  variants: {
    color: {
      default: 'bg-sky-500 text-white hover:bg-sky-600',
      primary: 'bg-primary-500 text-white hover:bg-primary-600',
      success: 'bg-teal-500 text-white hover:bg-teal-600',
      error: 'bg-rose-500 text-white hover:bg-rose-600',
      gray: 'bg-gray-400 text-white hover:bg-gray-500',
      transparent:
        'border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-200',
    },
    size: {
      sm: 'min-h-6 px-4 text-sm',
      md: 'min-h-9 px-6 text-base',
      lg: 'min-h-12 px-8 text-xl',
    },
    full: {
      true: 'w-full',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'default',
    full: false,
    disabled: false,
  },
})

type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof button> & {
    loading?: boolean
  }

export function Button({
  loading = false,
  size,
  color,
  full,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ size, color, full, disabled, className })}
      disabled={disabled}
      {...props}
    >
      {loading ? <Loader className="animate-spin" /> : props.children}
    </button>
  )
}