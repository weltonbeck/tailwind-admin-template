import Link from 'next/link'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Form } from '@/components/form'
import { Pagination } from '@/components/pagination'
import { Table } from '@/components/table'
import { ClipboardListIcon, SearchIcon } from 'lucide-react'

type searchParamsProps = {
  searchParams: { page?: string; orderField?: string; orderDirection?: string }
}

export default async function TablePage({ searchParams }: searchParamsProps) {
  const currentPage = searchParams.page ? Number(searchParams.page) : 1
  const limit = 10

  const response = await fetch(
    'https://pokeapi.co/api/v2/pokemon?' +
      new URLSearchParams({
        limit: limit.toString(),
        offset: (limit * (currentPage - 1)).toString(),
      }),
    {
      next: {
        tags: ['get-list'],
      },
    },
  )
  const data = await response.json()

  return (
    <Card.Root className="min-h-full">
      <Card.Header>
        <i className="mr-2">
          <ClipboardListIcon />
        </i>
        Tabelas
      </Card.Header>
      <Card.Content className="mb-10">
        <div className="mb-12 grid grid-cols-2 gap-4">
          <div className="flex">
            <Button color="primary" asChild>
              <Link href="/form">Adicionar</Link>
            </Button>
          </div>
          <form className="flex" method="get">
            <Form.Input
              type="text"
              name="search"
              className="min-h-11 rounded-r-none"
              placeholder="Buscar..."
            />
            <Button type="submit" className="rounded-l-none">
              <SearchIcon size={20} strokeWidth={3} />
            </Button>
          </form>
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
              title: 'Link',
              filter: false,
            },
          ]}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          rows={data.results.map((value: any, index: number) => {
            return [index, value.name, value.url]
          })}
        />
        <Pagination
          pagination={{
            currentPage,
            limitPerPage: limit,
            totalPages: 10,
            totalItens: 95,
          }}
        />
      </Card.Content>
    </Card.Root>
  )
}
