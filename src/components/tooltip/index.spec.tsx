import { render, screen } from '@testing-library/react'
import { Tooltip } from '.'

describe('Test Tooltip Component', () => {
  it('should render tooltip', () => {
    render(<Tooltip label="Label">Content</Tooltip>)
    expect(screen.getByText('Label')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
  })
})
