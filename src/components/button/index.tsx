'use client'
import { ComponentPropsWithoutRef } from 'react'
import { useFormStatus } from 'react-dom'
import { Slot } from '@radix-ui/react-slot'
import { Loader } from 'lucide-react'
import { tv, VariantProps } from 'tailwind-variants'

const button = tv({
  base: 'flex items-center justify-center rounded py-2 font-medium shadow-md transition-colors',
  variants: {
    color: {
      primary:
        'bg-primary-500 text-white hover:bg-primary-600  active:bg-primary-700',
      blue: 'bg-sky-500 text-white hover:bg-sky-600 active:bg-sky-700',
      green: 'bg-teal-500 text-white hover:bg-teal-600 active:bg-teal-700',
      red: 'bg-rose-500 text-white hover:bg-rose-600 active:bg-rose-700',
      yellow: 'bg-amber-500 text-white hover:bg-amber-600 active:bg-amber-700',
      gray: 'bg-gray-400 text-white hover:bg-gray-500 active:bg-gray-600',
    },
    outline: {
      primary:
        'border border-primary-500 bg-transparent text-primary-500 hover:bg-primary-100 active:bg-primary-200',
      blue: 'border border-sky-500 bg-transparent text-sky-500 hover:bg-sky-100 active:bg-sky-200',
      green:
        'border border-teal-500 bg-transparent text-teal-500 hover:bg-teal-100 active:bg-teal-200',
      red: 'border border-rose-500 bg-transparent text-rose-500 hover:bg-rose-100 active:bg-rose-200',
      yellow:
        'border border-amber-500 bg-transparent text-amber-500 hover:bg-amber-100 active:bg-amber-200',
      gray: 'border border-gray-500 bg-transparent text-gray-500 hover:bg-gray-300 active:bg-gray-400',
    },
    size: {
      xs: 'min-h-5 px-2 py-1 text-xs',
      sm: 'min-h-8 px-4 text-sm',
      md: 'min-h-11 px-4 text-base',
      lg: 'min-h-14 px-5 text-xl',
    },
    full: {
      true: 'w-full',
    },
    rounded: {
      true: 'size-8 min-h-0 rounded-full p-1 text-sm',
      sm: 'size-8 min-h-0 rounded-full p-1 text-sm',
      md: 'size-11 min-h-0 rounded-full p-1 text-base',
      lg: 'size-14 min-h-0 rounded-full p-1 text-xl',
    },
    disabled: {
      true: 'cursor-not-allowed opacity-50',
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'blue',
    full: false,
    disabled: false,
    rounded: false,
  },
})

type ButtonProps = ComponentPropsWithoutRef<'button'> &
  VariantProps<typeof button> & {
    loading?: boolean
    asChild?: boolean
  }

export function Button({
  loading = false,
  size,
  color,
  outline,
  full,
  rounded,
  disabled,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const { pending } = useFormStatus()
  const Comp = asChild ? Slot : 'button'
  return (
    <Comp
      className={button({
        size,
        color,
        outline,
        full,
        rounded,
        disabled,
        className,
      })}
      disabled={disabled || (props.type === 'submit' && pending) || loading}
      {...props}
    >
      {(props.type === 'submit' && pending) || loading ? (
        <Loader className="animate-spin" />
      ) : (
        props.children
      )}
    </Comp>
  )
}
