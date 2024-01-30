import { ComponentProps } from 'react'

import { Loader } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded py-2 font-medium shadow',
  variants: {
    color: {
      primary: 'bg-sky-500 text-white hover:bg-sky-600',
      secondary: 'bg-zinc-400 text-white hover:bg-zinc-500',
      success: 'bg-teal-500 text-white hover:bg-teal-600',
      error: 'bg-rose-500 text-white hover:bg-rose-600',
      transparent:
        'border border-zinc-500 bg-transparent text-zinc-500 hover:bg-zinc-200',
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
    color: 'primary',
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
  ...props
}: ButtonProps) {
  return (
    <button
      className={button({ size, color, full, disabled })}
      disabled={disabled}
      {...props}
    >
      {loading ? <Loader className="animate-spin" /> : props.children}
    </button>
  )
}
