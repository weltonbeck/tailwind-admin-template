import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Form } from '../'
import { Button } from '../../button'
import { FormRootWrapper } from '../formRoot.spec'

describe('Test form select Component', () => {
  const options = ['', 1, 2, 3, 4, 5].map((value) => {
    return {
      value: String(value),
      label: `teste ${value}`,
    }
  })
  const selectedOption = '4'

  it('should render input', () => {
    render(<Form.Select name="testInput" options={options} />)
    expect(screen.getByRole('combobox')).toBeInTheDocument()
  })

  it('should can select options in the input', async () => {
    const { container } = render(
      <Form.Select name="testInput" options={options} />,
    )
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.click(container.querySelectorAll('li')[4])
    expect(input).toHaveValue(selectedOption)
  })

  it('should can select options in hidden select', async () => {
    render(<Form.Select name="testInput" options={options} />)
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.selectOptions(input, selectedOption)
    expect(input).toHaveValue(selectedOption)
  })

  it('should can`t select options in the input', async () => {
    const { container } = render(
      <Form.Select name="testInput" options={options} disabled />,
    )
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.click(container.querySelectorAll('li')[4])
    expect(input).toHaveValue('')
  })

  it('should can`t select options in disable hidden select', async () => {
    render(<Form.Select name="testInput" options={options} disabled />)
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.selectOptions(input, selectedOption)
    expect(input).toHaveValue('')
  })

  it('should has default value', async () => {
    render(
      <FormRootWrapper
        onSubmit={() => {}}
        defaultValues={{ testInput: selectedOption }}
      >
        <Form.Select name="testInput" options={options} />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue(selectedOption)
  })

  it('should can form submit', async () => {
    const handleOnSubmitMock = jest.fn()
    const { container } = render(
      <FormRootWrapper onSubmit={handleOnSubmitMock}>
        <Form.Select name="testInput" options={options} />
        <Button type="submit" />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue('')
    await userEvent.click(container.querySelectorAll('li')[4])
    expect(input).toHaveValue(selectedOption)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    await userEvent.click(btn)
    expect(handleOnSubmitMock).toHaveBeenCalled()
    expect(handleOnSubmitMock.mock.calls[0][0]).toEqual({
      testInput: selectedOption,
    })
  })

  it('should can search the options', async () => {
    const { container } = render(
      <Form.Select name="testInput" options={options} search />,
    )
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
    expect(container.querySelectorAll('li').length).toEqual(6)
    await userEvent.type(input, selectedOption)
    expect(container.querySelectorAll('li').length).toEqual(1)
  })

  it('should can select multiple options in the input', async () => {
    const handleOnSubmitMock = jest.fn()
    const { container } = render(
      <FormRootWrapper onSubmit={handleOnSubmitMock}>
        <Form.Select
          name="testInput"
          options={options}
          multiple
          role="combobox"
        />
      </FormRootWrapper>,
    )
    const input = screen.getByRole('combobox')
    expect(input).toBeInTheDocument()
    expect(input).toHaveValue([])
    await userEvent.click(container.querySelectorAll('li')[4])
    await userEvent.click(container.querySelectorAll('li')[5])
    expect(input).toHaveValue(['4', '5'])
  })
})
