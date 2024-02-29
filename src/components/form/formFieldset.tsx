import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'
import { FormValidation, FormValidationProps } from './formValidation'

type FormFieldsetProps = ComponentProps<'fieldset'> &
  FormValidationProps & {
    legend?: string
  }

export function FormFieldset({
  legend,
  success,
  error,
  className,
  ...props
}: FormFieldsetProps) {
  return (
    <div className="relative w-full">
      <fieldset
        data-error={!!error}
        data-success={!!success}
        className={twMerge(
          'w-full rounded border border-gray-300 bg-gray-50 p-4 data-[error=true]:border-rose-500 data-[error=true]:bg-rose-50 data-[success=true]:border-teal-500 data-[success=true]:bg-teal-50 grid grid-cols-2 gap-4 disabled:bg-gray-200 disabled:cursor-not-allowed ',
          className,
        )}
        {...props}
      >
        {!!legend && (
          <legend className="text-sm font-medium text-gray-800">
            {legend}
          </legend>
        )}
        {props.children}
      </fieldset>
      <FormValidation error={error} success={success} className="pt-[16px]" />
    </div>
  )
}
