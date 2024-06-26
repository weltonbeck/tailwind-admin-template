'use client'
import { ComponentProps, useRef, useState } from 'react'
import useOutsideClick from '@/helpers/useOutsideClick'
import { ChevronDownIcon, ChevronUpIcon, SearchIcon, XIcon } from 'lucide-react'
import { twMerge } from 'tailwind-merge'
import { FormInput } from '../formInput'
import { FormValidationProps } from '../formValidation'

type ValueProps = string | string[] | null

type OptionProps = {
  value: string
  label: string
}

export type CustomSelectProps = ComponentProps<'select'> &
  FormValidationProps & {
    search?: boolean
    placeholder?: string
    options?: OptionProps[]
    value?: ValueProps
    onChange?: (value: ValueProps) => void
    disabled?: boolean
    multiple?: boolean
    name?: string
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
  multiple,
  search = false,
  ...props
}: CustomSelectProps) {
  const [isOpen, setOpen] = useState(false)
  const [selected, setSelected] = useState<ValueProps>(value || null)
  const [searchValue, setSearchValue] = useState<string>('')

  const selectRef = useRef(null)
  useOutsideClick(selectRef, () => {
    onClose()
  })

  function setValue(newValue: string | null) {
    if (!disabled) {
      if (multiple) {
        let currentSelected = selected
        if (!Array.isArray(currentSelected) || !currentSelected) {
          currentSelected = []
        }
        if (Array.isArray(currentSelected) && newValue) {
          if (!currentSelected.includes(newValue)) {
            currentSelected.push(newValue)
          } else {
            // remove caso já esteja la
            currentSelected = currentSelected.filter(
              (item) => item !== newValue,
            )
          }
          setSelected(currentSelected)
          if (onChange) {
            onChange(currentSelected)
          }
        }
      } else {
        setSelected(newValue)
        if (onChange) {
          onChange(newValue)
        }
      }
    }
    onClose()
  }

  function onClose() {
    setSearchValue('')
    setOpen(false)
  }

  function getLabelFromValue(value: string) {
    return options?.find((item) => item.value === value)?.label
  }

  const filteredOptions = options?.filter((item) => {
    if (searchValue) {
      return item.label
        .toLocaleLowerCase()
        .includes(searchValue.toLocaleLowerCase())
    }
    return true
  })

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
      <select
        value={(selected as string | string[]) || undefined}
        multiple={!!multiple}
        disabled={!!disabled}
        onChange={(e) => {
          setValue(String(e.target.value))
        }}
        {...props}
        className="hidden"
      >
        {filteredOptions?.map((item, i) => (
          <option key={i} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
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
        <div className="flex flex-wrap gap-1">
          {(!multiple && getLabelFromValue(String(selected))) || placeholder}
          {multiple &&
            Array.isArray(selected) &&
            selected.map((item, i) => {
              return (
                <span
                  key={i}
                  className="inline-flex cursor-pointer rounded-lg bg-sky-500 px-2 py-1 pr-1 text-xs text-white"
                  onClick={() => {
                    setValue(String(item))
                  }}
                >
                  {getLabelFromValue(String(item))}
                  <i className="ml-1">
                    <XIcon size={15} />
                  </i>
                </span>
              )
            })}
        </div>
        <div className="flex items-center gap-1 text-gray-600">
          {!multiple && !disabled && value && (
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
      <div className="invisible fixed inset-0 z-50 flex max-h-screen flex-col overflow-hidden rounded border border-gray-400 bg-black/85 p-5 shadow-lg transition-all  group-data-[open=true]:visible md:absolute md:inset-auto md:mt-1  md:max-h-0 md:min-h-0 md:w-full md:p-0 md:group-data-[open=true]:max-h-[250px]">
        <div
          className="mb-4 ml-auto cursor-pointer text-white md:hidden"
          onClick={onClose}
        >
          <XIcon size={30} />
        </div>
        {search && (
          <div className="flex items-center gap-2 bg-gray-500 p-2">
            <i className="text-white">
              <SearchIcon />
            </i>
            <FormInput
              placeholder="Buscar..."
              value={searchValue}
              className="py-1 focus:border-gray-300"
              onChange={(e) => {
                setSearchValue((e.target as HTMLTextAreaElement).value)
              }}
            />
          </div>
        )}
        <ul className="overflow-auto">
          {filteredOptions?.map((item) => (
            <li
              data-selected={
                (!multiple && selected === item.value) ||
                (multiple &&
                  Array.isArray(selected) &&
                  selected.includes(item.value))
              }
              key={String(item.value)}
              onClick={() => {
                setValue(item.value)
              }}
              className="cursor-pointer border-b border-gray-300 bg-gray-50 p-2 text-sm text-gray-700  last:border-0 hover:bg-sky-100 data-[selected=true]:bg-sky-500 data-[selected=true]:text-white"
            >
              {item.label}
            </li>
          ))}
          {filteredOptions && filteredOptions?.length <= 0 && (
            <li className="bg-gray-200 p-2 text-sm text-gray-700">
              Nenhum item encontrado
            </li>
          )}
        </ul>
      </div>
    </div>
  )
}
