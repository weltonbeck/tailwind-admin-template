import { render, screen } from '@testing-library/react'
import { Card } from '.'

describe('Test Card Component', () => {
  it('should render card', () => {
    render(
      <Card.Root>
        <Card.Header>Header</Card.Header>
        <Card.Content>Content</Card.Content>
        <Card.Footer>Footer</Card.Footer>
      </Card.Root>,
    )
    expect(screen.getByText('Header')).toBeInTheDocument()
    expect(screen.getByText('Content')).toBeInTheDocument()
    expect(screen.getByText('Footer')).toBeInTheDocument()
  })
})
