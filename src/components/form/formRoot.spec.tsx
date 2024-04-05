import { ComponentPropsWithoutRef } from 'react'
import { useForm } from 'react-hook-form'
import { render, screen } from '@testing-library/react'
import { Form } from '.'

export function FormRootWrapper({
  children,
  onSubmit,
  defaultValues,
}: ComponentPropsWithoutRef<'form'> & {
  onSubmit: () => void
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  defaultValues?: any
}) {
  const methods = useForm({
    defaultValues,
  })
  return (
    <Form.Root
      role="form"
      onSubmit={methods.handleSubmit(onSubmit)}
      providerMethods={methods}
    >
      {children}
    </Form.Root>
  )
}

describe('Test form root Component', () => {
  it('should render form', () => {
    render(<FormRootWrapper onSubmit={() => null} />)
    expect(screen.getByRole('form')).toBeInTheDocument()
  })
})
