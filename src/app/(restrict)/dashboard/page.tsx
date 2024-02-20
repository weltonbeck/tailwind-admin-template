import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { LayoutDashboardIcon } from 'lucide-react'

export default function Dashboard() {
  return (
    <Card.Root className="min-h-full">
      <Card.Header>
        <i className="mr-2">
          <LayoutDashboardIcon />
        </i>
        Dashboard
      </Card.Header>
      <Card.Content>
        <h2 className="text-xl font-bold uppercase">Botões</h2>
        <hr className="mx-2 my-4 bg-gray-600" />

        <div className="mb-8 flex items-start justify-center">
          <Button size="xs" className="mx-1">
            Botão xs
          </Button>
          <Button size="sm" className="mx-1">
            Botão sm
          </Button>
          <Button size="md" className="mx-1">
            Botão md
          </Button>
          <Button size="lg" className="mx-1">
            Botão lg
          </Button>
        </div>

        <div className="mb-8 flex items-start justify-center">
          <Button color="default" className="mx-1">
            Botão default
          </Button>
          <Button color="primary" className="mx-1">
            Botão primary
          </Button>
          <Button color="success" className="mx-1">
            Botão success
          </Button>
          <Button color="error" className="mx-1">
            Botão error
          </Button>
          <Button color="gray" className="mx-1">
            Botão gray
          </Button>
        </div>
        <div className="flex items-start justify-center">
          <Button outline="default" className="mx-1">
            Botão default
          </Button>
          <Button outline="primary" className="mx-1">
            Botão primary
          </Button>
          <Button outline="success" className="mx-1">
            Botão success
          </Button>
          <Button outline="error" className="mx-1">
            Botão error
          </Button>
          <Button outline="gray" className="mx-1">
            Botão gray
          </Button>
        </div>
        <hr className="mx-2 my-4 bg-gray-600" />
      </Card.Content>
      <Card.Footer>
        <Button className="ml-auto">teste</Button>
      </Card.Footer>
    </Card.Root>
  )
}
