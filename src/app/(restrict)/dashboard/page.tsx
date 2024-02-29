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
        <hr className="my-8 border-primary-500" />

        <div className="mb-8 flex flex-wrap items-start justify-center">
          <Button size="xs" className="m-1">
            Botão xs
          </Button>
          <Button size="sm" className="m-1">
            Botão sm
          </Button>
          <Button size="md" className="m-1">
            Botão md
          </Button>
          <Button size="lg" className="m-1">
            Botão lg
          </Button>
        </div>

        <div className="mb-8 flex flex-wrap items-start justify-center">
          <Button color="primary" className="m-1">
            Botão primary
          </Button>
          <Button color="blue" className="m-1">
            Botão blue
          </Button>
          <Button color="green" className="m-1">
            Botão green
          </Button>
          <Button color="red" className="m-1">
            Botão red
          </Button>
          <Button color="yellow" className="m-1">
            Botão yellow
          </Button>
          <Button color="gray" className="m-1">
            Botão gray
          </Button>
        </div>
        <div className="mb-8 flex flex-wrap items-start justify-center">
          <Button outline="primary" className="m-1">
            Botão primary
          </Button>
          <Button outline="blue" className="m-1">
            Botão blue
          </Button>
          <Button outline="green" className="m-1">
            Botão green
          </Button>
          <Button outline="red" className="m-1">
            Botão red
          </Button>
          <Button outline="yellow" className="m-1">
            Botão yellow
          </Button>
          <Button outline="gray" className="m-1">
            Botão gray
          </Button>
        </div>
        <div className="mb-8 flex flex-wrap items-start justify-center">
          <Button outline="gray" rounded="sm" className="m-1">
            <LayoutDashboardIcon size={20} />
          </Button>
          <Button outline="gray" rounded="md" className="m-1">
            <LayoutDashboardIcon size={25} />
          </Button>
          <Button outline="gray" rounded="lg" className="m-1">
            <LayoutDashboardIcon size={30} />
          </Button>
        </div>
        <div className="mb-8 flex flex-wrap items-start justify-center">
          <Button loading />
        </div>

        <hr className="my-8 border-primary-500" />
      </Card.Content>
      <Card.Footer>
        <Button className="ml-auto">teste</Button>
      </Card.Footer>
    </Card.Root>
  )
}
