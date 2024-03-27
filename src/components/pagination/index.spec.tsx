import mockRouter from 'next-router-mock'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Pagination } from '.'

describe('Test Pagination Component', () => {
  const baseData = {
    limitPerPage: 10,
    currentPage: 1,
    totalPages: 10,
    totalItens: 100,
  }

  it('should render pagination', () => {
    render(<Pagination pagination={baseData} />)
    expect(screen.getByLabelText('navigation')).toBeInTheDocument()
  })

  it('should have an active page', () => {
    const { container } = render(
      <Pagination pagination={{ ...baseData, currentPage: 2 }} />,
    )
    expect(container.querySelector('li[data-active=true]')).toBeInTheDocument()
    expect(
      container.querySelector('li[data-active=true]')?.textContent,
    ).toEqual('2')
  })

  it('should be able to go to next page', async () => {
    render(<Pagination pagination={baseData} />, {
      wrapper: MemoryRouterProvider,
    })
    const nextPageBtn = screen.getByText('2')
    expect(nextPageBtn).toBeInTheDocument()
    expect(mockRouter.asPath).not.toContain('page=2')
    await userEvent.click(nextPageBtn)
    expect(mockRouter.asPath).toContain('page=2')
  })

  it('should show info', () => {
    render(<Pagination pagination={baseData} />)
    expect(
      screen.getByText('Mostrando de', { exact: false }).textContent,
    ).toEqual('Mostrando de 1 a 10 de 100 resultados')
  })
})
