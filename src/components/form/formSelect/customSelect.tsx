'use client'
import { ComponentProps, useRef, useState } from 'react'
import useOutsideClick from '@/helpers/useOutsideClick'
import { ChevronDownIcon, ChevronUpIcon, XIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { FormValidationProps } from '../formValidation'

type ValueProps = string | string[] | null

type OptionProps = {
  value: ValueProps
  label: string
}

export type CustomSelectProps = ComponentProps<'select'> &
  FormValidationProps & {
    placeholder?: string
    options?: OptionProps[]
    value?: ValueProps
    onChange?: (value: ValueProps) => void
  }

export function CustomSelect({
  success,
  error,
  className,
  options,
  placeholder,
  onChange,
  onBlur,
  value,
  disabled,
}: CustomSelectProps) {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<ValueProps>(value || null)

  const selectRef = useRef(null)
  useOutsideClick(selectRef, () => {
    setOpen(false)
  })

  function setValue(newValue: ValueProps) {
    if (!disabled) {
      setSelected(newValue)
      if (onChange) {
        onChange(newValue)
      }
    }
    setOpen(false)
  }

  return (
    <div
      ref={selectRef}
      className="group relative"
      data-open={isOpen}
      data-error={!!error}
      data-success={!!success}
      data-disabled={disabled}
      onBlur={onBlur}
    >
      <div
        className={twMerge(
          'w-full flex justify-between rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 transition duration-200 ease-in-out disabled:bg-gray-200 disabled:cursor-not-allowed group-data-[error=true]:border-rose-500 group-data-[error=true]:bg-rose-50 group-data-[success=true]:border-teal-500 group-data-[success=true]:bg-teal-50 group-data-[disabled=true]:bg-gray-200 group-data-[disabled=true]:cursor-not-allowed',
          className,
        )}
        onClick={() => {
          if (!disabled) {
            setOpen((prev) => !prev)
          }
        }}
      >
        <div>
          {options?.find((item) => item.value === selected)?.label ||
            placeholder}
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          {!disabled && value && (
            <i
              className="ml-auto cursor-pointer"
              onClick={() => {
                setValue(null)
              }}
            >
              <XIcon size={20} />
            </i>
          )}

          <i className="pointer-events-none border-l border-gray-300">
            {isOpen && <ChevronUpIcon />}
            {!isOpen && <ChevronDownIcon />}
          </i>
        </div>
      </div>
      <div className="invisible absolute z-50 mt-1 max-h-0 w-full overflow-auto rounded border border-gray-300 shadow-lg transition-all group-data-[open=true]:visible group-data-[open=true]:max-h-[200px]">
        <ul>
          {options?.map((item) => (
            <li
              data-selected={selected === item.value}
              key={String(item.value)}
              onClick={() => {
                setValue(item.value)
              }}
              className="cursor-pointer border-b border-gray-300 bg-gray-200 p-2 text-sm text-gray-700 last:border-0 hover:bg-gray-300 data-[selected=true]:bg-sky-500 data-[selected=true]:text-white"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
