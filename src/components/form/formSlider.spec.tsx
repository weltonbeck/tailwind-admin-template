import { fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from '.'
import { Button } from '../button'
import { FormRootWrapper } from './formRoot.spec'

describe('Test form slider Component', () => {
  it('should render input', () => {
    render(<Form.Slider name="testInput" role="slider" min={1} max={10} />)
    expect(screen.getByRole('slider')).toBeInTheDocument()
  })

  it('should can change in the input', async () => {
    render(
      <Form.Slider
        name="testInput"
        role="slider"
        min={1}
        max={10}
        defaultValue={5}
      />,
    )
    const input = screen.getByRole('slider')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('5')
    fireEvent.change(input, { target: { value: 8 } })
    expect(input).toHaveValue('8')
  })

  it('should can`t change in disable input', async () => {
    render(
      <Form.Slider
        name="testInput"
        role="slider"
        min={1}
        max={10}
        defaultValue={5}
        disabled
      />,
    )
    const input = screen.getByRole('slider')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('5')
    expect(input).toBeDisabled()
  })

  it('should has default value', async () => {
    render(
      <FormRootWrapper onSubmit={() => {}} defaultValues={{ testInput: 8 }}>
        <Form.Slider
          name="testInput"
          role="slider"
          min={1}
          max={10}
          defaultValue={5}
        />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('slider')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('8')
  })

  it('should can form submit', async () => {
    const handleOnSubmitMock = jest.fn()
    render(
      <FormRootWrapper onSubmit={handleOnSubmitMock}>
        <Form.Slider
          name="testInput"
          role="slider"
          min={1}
          max={10}
          defaultValue={5}
        />
        <Button type="submit" />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('slider')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('5')
    fireEvent.change(input, { target: { value: 8 } })
    expect(input).toHaveValue('8')
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(handleOnSubmitMock).toHaveBeenCalled()
    expect(handleOnSubmitMock.mock.calls[0][0]).toEqual({
      testInput: '8',
    })
  })
})
