import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const div = tv({
  base: 'col-span-12',
  variants: {
    grid: {
      col1: 'col-span-12 md:col-span-1',
      col2: 'col-span-12 md:col-span-2',
      col3: 'col-span-12 md:col-span-3',
      col4: 'col-span-12 md:col-span-4',
      col5: 'col-span-12 md:col-span-5',
      col6: 'col-span-12 md:col-span-6',
      col7: 'col-span-12 md:col-span-7',
      col8: 'col-span-12 md:col-span-8',
      col9: 'col-span-12 md:col-span-9',
      col10: 'col-span-12 md:col-span-10',
      col11: 'col-span-12 md:col-span-11',
      col12: 'col-span-12',
    },
  },
  defaultVariants: {
    grid: 'col12',
  },
})

type FormGroupProps = ComponentProps<'div'> & VariantProps<typeof div>

export function FormGroup({ grid, className, ...props }: FormGroupProps) {
  return (
    <div
      className={div({
        grid,
        className,
      })}
      {...props}
    >
      {props.children}
    </div>
  )
}
