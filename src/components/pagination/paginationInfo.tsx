import { PaginationProps } from '.'

export function PaginationInfo({ pagination }: PaginationProps) {
  const fromValue = pagination.limitPerPage * (pagination.currentPage - 1) + 1
  let toValue = fromValue - 1 + pagination.limitPerPage
  toValue = pagination.totalItens < toValue ? pagination.totalItens : toValue
  return (
    <div>
      {'Mostrando de '}
      <span className="font-bold text-primary-500">{fromValue}</span>
      {' a '}
      <span className="font-bold text-primary-500">{toValue}</span>
      {' de '}
      <span className="font-bold text-primary-500">
        {pagination.totalItens}
      </span>
      {' resultados'}
    </div>
  )
}
