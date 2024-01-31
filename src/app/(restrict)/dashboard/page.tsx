import { Button } from '@/components/button'
import { Card } from '@/components/card'

export default function Dashboard() {
  return (
    <Card.Root className="min-h-full">
      <Card.Header>Titulo</Card.Header>
      <Card.Content>teste</Card.Content>
      <Card.Footer>
        <Button className="ml-auto">teste</Button>
      </Card.Footer>
    </Card.Root>
  )
}
