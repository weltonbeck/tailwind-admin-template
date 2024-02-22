import { ComponentProps } from 'react'
import { CheckIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { InputValidation, InputValidationProps } from './inputValidation'

type InputCheckboxProps = ComponentProps<'input'> & InputValidationProps

export function InputCheckbox({
  checked,
  success,
  error,
  className,
  ...props
}: InputCheckboxProps) {
  return (
    <div className="relative">
      <input
        type="checkbox"
        checked={checked}
        data-error={!!error}
        data-success={!!success}
        className={twMerge(
          'peer size-6 appearance-none rounded border border-gray-300 bg-gray-50 checked:bg-sky-600 checked:border-sky-700 data-[success=true]:border-teal-500 data-[error=true]:border-rose-500',
          className,
        )}
        {...props}
      />
      <span className="pointer-events-none absolute left-0 top-0 ml-[2px] mt-[2px] hidden text-white peer-checked:inline-block">
        <CheckIcon size={20} />
      </span>
      <InputValidation error={error} success={success} showIcons={false} />
    </div>
  )
}
