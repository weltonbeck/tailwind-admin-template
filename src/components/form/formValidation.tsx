import { ComponentProps } from 'react'
import { AlertCircleIcon, CheckCircleIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'

export type FormValidationProps = ComponentProps<'i'> & {
  showIcons?: boolean
  error?: boolean | string | string[]
  success?: boolean | string | string[]
}

export function FormValidation({
  className,
  error,
  success,
  showIcons = true,
}: FormValidationProps) {
  return (
    <>
      {error && (
        <>
          {showIcons && (
            <i
              className={twMerge(
                'absolute right-0 top-0 pr-[8px] pt-[8px] text-rose-500',
                className,
              )}
            >
              <AlertCircleIcon size={20} />
            </i>
          )}
          <span className="ml-1 text-sm text-rose-500">
            {Array.isArray(error) ? error.join(', ') : error}
          </span>
        </>
      )}
      {success && (
        <>
          {showIcons && (
            <i
              className={twMerge(
                'absolute right-0 top-0 pr-[8px] pt-[8px] text-teal-500',
                className,
              )}
            >
              <CheckCircleIcon size={20} />
            </i>
          )}
          <span className="ml-1 text-sm text-teal-500">
            {Array.isArray(success) ? success.join(', ') : success}
          </span>
        </>
      )}
    </>
  )
}
