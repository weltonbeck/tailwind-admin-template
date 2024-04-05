import { render, screen } from '@testing-library/react'
import { Form } from '.'

describe('Test form fieldset Component', () => {
  it('should render fieldset', () => {
    render(<Form.Fieldset role="fieldset">content</Form.Fieldset>)
    expect(screen.getByRole('fieldset')).toBeInTheDocument()
  })
})
