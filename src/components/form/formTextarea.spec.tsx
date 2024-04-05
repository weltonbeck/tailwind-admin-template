import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from '.'
import { Button } from '../button'
import { FormRootWrapper } from './formRoot.spec'

describe('Test form textarea Component', () => {
  const baseValue = 'hello world'

  it('should render input', () => {
    render(<Form.Textarea name="testInput" />)
    expect(screen.getByRole('textbox')).toBeInTheDocument()
  })

  it('should can type in the input', async () => {
    render(<Form.Textarea name="testInput" />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.type(input, baseValue)
    expect(input).toHaveValue(baseValue)
  })

  it('should can`t type in disable input', async () => {
    render(<Form.Textarea name="testInput" disabled />)
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.type(input, baseValue)
    expect(input).toHaveValue('')
  })

  it('should has default value', async () => {
    render(
      <FormRootWrapper
        onSubmit={() => {}}
        defaultValues={{ testInput: baseValue }}
      >
        <Form.Textarea name="testInput" />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(baseValue)
  })

  it('should can form submit', async () => {
    const handleOnSubmitMock = jest.fn()
    render(
      <FormRootWrapper onSubmit={handleOnSubmitMock}>
        <Form.Textarea name="testInput" />
        <Button type="submit" />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.type(input, baseValue)
    expect(input).toHaveValue(baseValue)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(handleOnSubmitMock).toHaveBeenCalled()
    expect(handleOnSubmitMock.mock.calls[0][0]).toEqual({
      testInput: baseValue,
    })
  })
})
