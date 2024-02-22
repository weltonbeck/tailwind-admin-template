import { AlertCircleIcon, CheckCircleIcon } from 'lucide-react'

export type InputValidationProps = {
  showIcons?: boolean
  error?: boolean | string | string[]
  success?: boolean | string | string[]
}

export function InputValidation({
  error,
  success,
  showIcons = true,
}: InputValidationProps) {
  return (
    <>
      {error && (
        <>
          {showIcons && (
            <i className="absolute -ml-8 mt-2 text-rose-500">
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
            <i className="absolute -ml-8 mt-2 text-teal-500">
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
