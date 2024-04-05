'use client'
import { ComponentProps, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { twMerge } from 'tailwind-merge'
import { FormValidation, FormValidationProps } from './formValidation'

type FormSliderProps = ComponentProps<'input'> &
  FormValidationProps & {
    min: number
    max: number
    step?: number
  }

export function FormSlider({
  success,
  error,
  className,
  name,
  min,
  max,
  step = 1,
  value,
  disabled,
  ...props
}: FormSliderProps) {
  const formContext = useFormContext()
  const [selected, setSelected] = useState<number>(
    name && formContext ? formContext.getValues(name) : value,
  )

  return (
    <div className="relative w-full">
      <div
        className="group flex items-center"
        data-error={!!error}
        data-success={!!success}
        data-disabled={!!disabled}
      >
        <div className="mt-2 w-full">
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            className={twMerge(
              `w-full h-3 appearance-none bg-gray-50 border border-gray-300 rounded disabled:bg-gray-200 disabled:cursor-not-allowed
          group-data-[error=true]:border-rose-500 group-data-[error=true]:bg-rose-50 group-data-[success=true]:border-teal-500 group-data-[success=true]:bg-teal-50
            [&::-webkit-slider-runnable-track]:rounded
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:-mt-1
            [&::-webkit-slider-thumb]:size-8
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-sky-500
            [&::-webkit-slider-thumb]:disabled:bg-gray-500
            [&::-webkit-slider-thumb]:disabled:cursor-not-allowed
            [&::-webkit-slider-thumb]:transition-all
            [&::-webkit-slider-thumb]:duration-150
            [&::-webkit-slider-thumb]:ease-in-out

            [&::-moz-range-track]:rounded
            [&::-moz-range-thumb]:appearance-none
            [&::-moz-range-thumb]:-mt-2
            [&::-moz-range-thumb]:size-6
            [&::-moz-range-thumb]:border-none
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-sky-500
            [&::-moz-range-thumb]:disabled:bg-gray-500
            [&::-moz-range-thumb]:disabled:cursor-not-allowed
            [&::-moz-range-thumb]:transition-all
            [&::-moz-range-thumb]:duration-150
            [&::-moz-range-thumb]:ease-in-out
          `,
              className,
            )}
            {...props}
            {...(name && formContext
              ? {
                  ...formContext.register(name, {
                    onChange: (e) => {
                      if (!disabled) {
                        setSelected(Number(e.target.value))
                      }
                    },
                  }),
                }
              : {
                  onChange: (e) => {
                    if (!disabled) {
                      setSelected(Number(e.target.value))
                    }
                  },
                })}
          />
          <ul className="flex justify-between px-2 text-xs text-gray-600">
            <li>{min.toString()}</li>

            <li>{max.toString()}</li>
          </ul>
        </div>
        <div className="ml-2 min-h-8 min-w-10 rounded border border-gray-300 bg-gray-50 px-2 py-1 text-center text-sm text-gray-500 group-data-[disabled=true]:cursor-not-allowed group-data-[error=true]:border-rose-500 group-data-[success=true]:border-teal-500 group-data-[disabled=true]:bg-gray-200 group-data-[error=true]:bg-rose-50 group-data-[success=true]:bg-teal-50">
          {selected && selected.toString()}
        </div>
      </div>

      <FormValidation error={error} success={success} showIcons={false} />
    </div>
  )
}
