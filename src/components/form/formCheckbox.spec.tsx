import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from '.'
import { Button } from '../button'
import { FormRootWrapper } from './formRoot.spec'

describe('Test form checkbox Component', () => {
  const baseValue = 'hello-world'

  it('should render input', () => {
    render(<Form.Checkbox name="testInput" />)
    expect(screen.getByRole('checkbox')).toBeInTheDocument()
  })

  it('should can click on the input', async () => {
    render(<Form.Checkbox name="testInput" />)
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
    expect(input).not.toBeChecked()
    await userEvent.click(input)
    expect(input).toBeChecked()
  })

  it('should can`t click in disable input', async () => {
    render(<Form.Checkbox name="testInput" disabled />)
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
    expect(input).not.toBeChecked()
    await userEvent.click(input)
    expect(input).not.toBeChecked()
  })

  it('should has default value', async () => {
    render(
      <FormRootWrapper
        onSubmit={() => {}}
        defaultValues={{ testInput: baseValue }}
      >
        <Form.Checkbox name="testInput" value={baseValue} />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
    expect(input).toBeChecked()
  })

  it('should can form submit', async () => {
    const handleOnSubmitMock = jest.fn()
    render(
      <FormRootWrapper onSubmit={handleOnSubmitMock}>
        <Form.Checkbox name="testInput" value={baseValue} />
        <Button type="submit" />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('checkbox')
    expect(input).toBeInTheDocument()
    expect(input).not.toBeChecked()
    await userEvent.click(input)
    expect(input).toBeChecked()
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(handleOnSubmitMock).toHaveBeenCalled()
    expect(handleOnSubmitMock.mock.calls[0][0]).toEqual({
      testInput: baseValue,
    })
  })
})
