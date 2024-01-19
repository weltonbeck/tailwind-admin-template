import { TodoList } from '.'

import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

describe('Test TodoList Component', () => {
  it('should render list itens', () => {
    const value = 'novo registro de teste'
    render(<TodoList itens={[value]} />)
    expect(screen.getByText(value)).toBeInTheDocument()
  })

  it('should be able to add item to the list', async () => {
    const value = 'novo registro de teste'
    render(<TodoList itens={[]} />)

    const addNewInput = screen.getByPlaceholderText('Digite aqui')
    expect(addNewInput).toBeInTheDocument()
    await userEvent.type(addNewInput, value)

    const addNewButton = screen.getByRole('button', { name: 'Adicionar Novo' })
    expect(addNewButton).toBeInTheDocument()
    await userEvent.click(addNewButton)

    expect(screen.getByText(value)).toBeInTheDocument()
  })
})
