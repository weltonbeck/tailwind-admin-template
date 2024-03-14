'use client'
import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { FormValidation, FormValidationProps } from './formValidation'

type FormToggleProps = ComponentProps<'input'> & FormValidationProps

export function FormToggle({
  id,
  checked,
  success,
  error,
  className,
  name,
  ...props
}: FormToggleProps) {
  const formContext = useFormContext()

  return (
    <div className="relative">
      <div className="group flex items-center" data-disabled={props.disabled}>
        <input
          type="checkbox"
          id={id}
          checked={checked}
          data-error={!!error}
          data-success={!!success}
          className={twMerge(
            'peer h-8 w-16 appearance-none rounded-full border border-gray-300 bg-gray-50 checked:bg-sky-100  data-[success=true]:border-teal-500 data-[error=true]:border-rose-500 cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border-gray-300',
            className,
          )}
          {...props}
          {...(name && formContext
            ? {
                ...formContext.register(name),
              }
            : {})}
        />
        <span className="pointer-events-none absolute left-0 top-0 ml-[4px] mt-[4px] size-[24px] rounded-full bg-gray-500 transition-all peer-checked:left-8 peer-checked:bg-sky-500 group-data-[disabled=true]:bg-gray-400"></span>
      </div>
      <FormValidation error={error} success={success} showIcons={false} />
    </div>
  )
}
