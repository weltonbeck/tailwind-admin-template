import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('Test Button Component', () => {
  it('should render button', () => {
    render(<Button>Btn</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should be able to click button', async () => {
    const onClickButtonMock = jest.fn()
    render(<Button onClick={onClickButtonMock}>Btn</Button>)
    const testButton = screen.getByRole('button')
    expect(testButton).toBeInTheDocument()
    await userEvent.click(testButton)
    expect(onClickButtonMock).toHaveBeenCalled()
  })

  it('should not be able to click disabled button', async () => {
    const onClickButtonMock = jest.fn()
    render(
      <Button disabled onClick={onClickButtonMock}>
        Btn
      </Button>,
    )
    const testButton = screen.getByRole('button')
    expect(testButton).toBeInTheDocument()
    await userEvent.click(testButton)
    expect(onClickButtonMock).not.toHaveBeenCalled()
  })

  it('should not be able to click loading button', async () => {
    const onClickButtonMock = jest.fn()
    render(
      <Button loading onClick={onClickButtonMock}>
        Btn
      </Button>,
    )
    const testButton = screen.getByRole('button')
    expect(testButton).toBeInTheDocument()
    await userEvent.click(testButton)
    expect(onClickButtonMock).not.toHaveBeenCalled()
  })
})
