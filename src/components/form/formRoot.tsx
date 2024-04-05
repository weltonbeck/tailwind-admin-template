'use client'
import { ComponentProps } from 'react'
import { FormProvider, UseFormReturn } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'

type FormRootProps = ComponentProps<'form'> & {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  providerMethods: UseFormReturn<any>
}

export function FormRoot({
  className,
  providerMethods,
  ...props
}: FormRootProps) {
  return (
    <FormProvider {...providerMethods}>
      <form
        className={twMerge('grid grid-cols-12 gap-4', className)}
        {...props}
      >
        {props.children}
      </form>
    </FormProvider>
  )
}
