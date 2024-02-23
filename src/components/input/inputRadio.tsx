import React, { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputLabel } from './inputLabel'
import { InputValidation, InputValidationProps } from './inputValidation'

type InputRadioProps = ComponentProps<'input'> &
  InputValidationProps & {
    label?: React.ReactNode
  }

export function InputRadio({
  label,
  id,
  checked,
  success,
  error,
  className,
  ...props
}: InputRadioProps) {
  return (
    <div className="relative">
      <div className="flex items-center">
        <input
          type="radio"
          id={id}
          checked={checked}
          data-error={!!error}
          data-success={!!success}
          className={twMerge(
            'peer size-6 appearance-none rounded-full border border-gray-300 bg-gray-50 checked:bg-sky-600 checked:border-sky-700 data-[success=true]:border-teal-500 data-[error=true]:border-rose-500 cursor-pointer',
            className,
          )}
          {...props}
        />
        <span className="pointer-events-none absolute left-0 top-0 ml-[5px] mt-[5px] hidden size-[14px] rounded-full bg-white peer-checked:inline-block"></span>
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
