import { render, screen } from '@testing-library/react'
import { Form } from '.'

describe('Test Label Component', () => {
  const txt = 'Content'
  it('should render label', () => {
    render(<Form.Label>{txt}</Form.Label>)
    expect(screen.getByText(txt)).toBeInTheDocument()
  })
})
