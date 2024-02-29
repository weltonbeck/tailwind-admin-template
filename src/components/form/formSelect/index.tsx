'use client'
import { Controller, useFormContext } from 'react-hook-form'
import { FormValidation } from '../formValidation'
import { CustomSelect, CustomSelectProps } from './customSelect'

type FormSelectProps = CustomSelectProps

export function FormSelect({
  success,
  error,
  name,
  ...props
}: FormSelectProps) {
  const formContext = useFormContext()

  return (
    <div className="relative w-full">
      {formContext && name && (
        <Controller
          control={formContext.control}
          name={String(name)}
          render={({ field: { onChange, onBlur, value } }) => (
            <CustomSelect
              success={success}
              error={error}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              {...props}
            />
          )}
        />
      )}
      {(!formContext || !name) && (
        <CustomSelect success={success} error={error} {...props} />
      )}
      <FormValidation error={error} success={success} showIcons={false} />
    </div>
  )
}
