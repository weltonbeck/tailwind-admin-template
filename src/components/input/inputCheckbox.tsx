'use client'
import React, { ComponentProps } from 'react'
import { useFormContext } from 'react-hook-form'
import { CheckIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { InputLabel } from './inputLabel'
import { InputValidation, InputValidationProps } from './inputValidation'

type InputCheckboxProps = ComponentProps<'input'> &
  InputValidationProps & {
    label?: React.ReactNode
  }

export function InputCheckbox({
  label,
  id,
  checked,
  success,
  error,
  className,
  name,
  ...props
}: InputCheckboxProps) {
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
            'peer size-6 appearance-none rounded border border-gray-300 bg-gray-50 checked:bg-sky-600 checked:border-sky-700 data-[success=true]:border-teal-500 data-[error=true]:border-rose-500 cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed disabled:border-gray-300',
            className,
          )}
          {...props}
          {...(name && formContext ? { ...formContext.register(name) } : {})}
        />
        <span className="pointer-events-none absolute left-0 top-0 ml-[2px] mt-[2px] hidden text-white peer-checked:inline-block group-data-[disabled=true]:text-gray-400">
          <CheckIcon size={20} strokeWidth={4} />
        </span>
        {!!label && (
          <InputLabel
            className="m-0 ml-2 cursor-pointer font-normal text-gray-600 group-data-[disabled=true]:cursor-not-allowed"
            htmlFor={id}
          >
            {label}
          </InputLabel>
        )}
      </div>
      <InputValidation error={error} success={success} showIcons={false} />
    </div>
  )
}
