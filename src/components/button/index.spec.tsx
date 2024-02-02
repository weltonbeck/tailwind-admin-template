import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Button } from '.'

describe('Test Button Component', () => {
  it('should render button', () => {
    render(<Button>Btn</Button>)
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('should be able to click button', async () => {
    const onClickButton = jest.fn()
    render(<Button onClick={onClickButton}>Btn</Button>)

    const testButton = screen.getByRole('button')
    expect(testButton).toBeInTheDocument()
    await userEvent.click(testButton)

    expect(onClickButton).toHaveBeenCalled()
  })

  it('should not be able to click disabled button', async () => {
    const onClickButton = jest.fn()
    render(
      <Button disabled onClick={onClickButton}>
        Btn
      </Button>,
    )

    const testButton = screen.getByRole('button')
    expect(testButton).toBeInTheDocument()
    await userEvent.click(testButton)

    expect(onClickButton).not.toHaveBeenCalled()
  })
})
