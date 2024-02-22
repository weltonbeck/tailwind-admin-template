import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Input } from '@/components/input'
import { FilePenLineIcon } from 'lucide-react'

export default function FormPage() {
  return (
    <Card.Root className="min-h-full">
      <Card.Header>
        <i className="mr-2">
          <FilePenLineIcon />
        </i>
        Formulario
      </Card.Header>
      <Card.Content className="mb-10">
        <form action="">
          <h2 className="mb-8 text-xl font-bold uppercase">Tipos de inputs</h2>

          <div className="grid grid-cols-2 gap-4">
            <Input.Group>
              <Input.Label htmlFor="text">Text:</Input.Label>
              <Input.Input id="text" />
            </Input.Group>
            <Input.Group>
              <Input.Label htmlFor="textarea">Textarea:</Input.Label>
              <Input.Textarea id="textarea" />
            </Input.Group>
            <Input.Group>
              <Input.Label htmlFor="select">Select:</Input.Label>
            </Input.Group>

            <Input.Group>
              <Input.Label htmlFor="checkbox">checkbox:</Input.Label>
              <Input.Checkbox id="checkbox" value="teste" checked />
              <Input.Checkbox id="checkbox" />
              <Input.Checkbox id="checkbox" />
            </Input.Group>
          </div>

          <hr className="my-8 border-primary-500" />

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Input.Group>
                <Input.Input
                  placeholder="teste"
                  error={['teste msg com erro', 'teste msg com erro']}
                />
              </Input.Group>
              <Input.Group>
                <Input.Textarea error />
              </Input.Group>
              <Input.Group>
                <Input.Checkbox error />
              </Input.Group>
            </div>
            <div>
              <Input.Group>
                <Input.Input
                  id="text"
                  placeholder="teste"
                  success={['teste msg com sucesso', 'teste msg com sucesso']}
                />
              </Input.Group>
              <Input.Group>
                <Input.Textarea success />
              </Input.Group>
              <Input.Group>
                <Input.Checkbox success />
              </Input.Group>
            </div>
          </div>
          <div className="mt-10 flex justify-center">
            <Button type="submit">Enviar</Button>
          </div>
        </form>
      </Card.Content>
    </Card.Root>
  )
}
