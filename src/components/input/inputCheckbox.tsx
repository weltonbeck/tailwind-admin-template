import React, { ComponentProps } from 'react'
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
  ...props
}: InputCheckboxProps) {
  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="checkbox"
          id={id}
          checked={checked}
          data-error={!!error}
          data-success={!!success}
          className={twMerge(
            'peer size-6 appearance-none rounded border border-gray-300 bg-gray-50 checked:bg-sky-600 checked:border-sky-700 data-[success=true]:border-teal-500 data-[error=true]:border-rose-500 cursor-pointer',
            className,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute left-0 top-0 ml-[2px] mt-[2px] hidden text-white peer-checked:inline-block">
          <CheckIcon size={20} strokeWidth={4} />
        </span>
        {!!label && (
          <InputLabel
            className="m-0 ml-2 cursor-pointer font-normal text-gray-600"
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