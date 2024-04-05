import { render, screen } from '@testing-library/react'
import { Form } from '.'

describe('Test form group Component', () => {
  it('should render group', () => {
    render(<Form.Group role="group">content</Form.Group>)
    expect(screen.getByRole('group')).toBeInTheDocument()
  })
})
