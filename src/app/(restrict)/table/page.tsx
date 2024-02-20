import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Pagination } from '@/components/pagination'
import { Table } from '@/components/table'
import { ClipboardListIcon } from 'lucide-react'

export default function TablePage({
  searchParams,
}: {
  searchParams: { page?: string; orderField?: string; orderDirection?: string }
}) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1

  const data = [0, 1, 2, 3, 4, 5, 6].map((value) => [
    value,
    `Produto ${value}`,
    `Categ ${value}`,
  ])

  return (
    <Card.Root className="min-h-full">
      <Card.Header>
        <i className="mr-2">
          <ClipboardListIcon />
        </i>
        Tabelas
      </Card.Header>
      <Card.Content className="mb-10">
        <div className="mb-8">
          <Button>Adicionar novo</Button>
        </div>

        <Table
          cols={[
            {
              field: 'id',
              title: 'id',
              filter: true,
            },
            {
              field: 'name',
              title: 'Nome',
              filter: true,
            },
            {
              field: 'category_id',
              title: 'categoria',
              filter: false,
            },
          ]}
          rows={data}
        />
        <Pagination
          pagination={{
            currentPage,
            limitPerPage: 10,
            totalPages: 10,
            totalItens: 95,
          }}
        />
      </Card.Content>
    </Card.Root>
  )
}
