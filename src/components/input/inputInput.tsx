import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { InputValidation, InputValidationProps } from './inputValidation'

type InputInputProps = ComponentProps<'input'> & InputValidationProps

export function InputInput({
  success,
  error,
  className,
  ...props
}: InputInputProps) {
  return (
    <div className="relative w-full">
      <input
        data-error={!!error}
        data-success={!!success}
        className={twMerge(
          'w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 transition duration-200 ease-in-out focus:border-sky-500 focus:outline-none disabled:bg-gray-200 disabled:cursor-not-allowed disabled:placeholder:text-gray-400 placeholder:text-gray-300 data-[error=true]:border-rose-500 data-[error=true]:bg-rose-50 data-[success=true]:border-teal-500 data-[success=true]:bg-teal-50',
          className,
        )}
        {...props}
      />
      <InputValidation error={error} success={success} />
    </div>
  )
}
