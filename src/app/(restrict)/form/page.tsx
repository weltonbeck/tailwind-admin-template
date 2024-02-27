'use client'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Input } from '@/components/input'
import { FilePenLineIcon } from 'lucide-react'

export default function FormPage() {
  const methods = useForm()

  const actionSubmit: () => void = methods.handleSubmit(
    async (data: unknown) => {
      console.log(data)
      await new Promise((resolve) => setInterval(resolve, 3000))
      console.log('foi')
    },
  )

  return (
    <Card.Root className="min-h-full">
      <Card.Header>
        <i className="mr-2">
          <FilePenLineIcon />
        </i>
        Formulario
      </Card.Header>
      <Card.Content className="mb-10">
        <FormProvider {...methods}>
          <form action={actionSubmit}>
            <h2 className="mb-8 text-center text-xl font-bold uppercase">
              Tipos de inputs
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <Input.Group>
                <Input.Label htmlFor="text">Text:</Input.Label>
                <Input.Input id="text" name="text" />
              </Input.Group>

              <Input.Group>
                <Input.Label htmlFor="textarea">Textarea:</Input.Label>
                <Input.Textarea id="textarea" name="textarea" />
              </Input.Group>

              <Input.Group>
                <Input.Label htmlFor="checkbox">Checkbox unico:</Input.Label>
                <Input.Checkbox id="checkbox" value="teste" name="checkbox" />
              </Input.Group>

              <Input.Group>
                <Input.Fieldset legend="Checkbox" className="grid-cols-3">
                  <Input.Checkbox
                    id="checkbox01"
                    value="teste1"
                    label="valor 01"
                    name="multiCheckbox"
                  />
                  <Input.Checkbox
                    id="checkbox02"
                    value="teste2"
                    label="valor 02"
                    name="multiCheckbox"
                    defaultChecked
                  />
                  <Input.Checkbox
                    id="checkbox03"
                    value="teste3"
                    label="valor 03"
                    name="multiCheckbox"
                  />
                </Input.Fieldset>
              </Input.Group>

              <Input.Group>
                <Input.Label htmlFor="radio">Radio unico:</Input.Label>
                <Input.Radio id="radio" value="teste" name="radio" />
              </Input.Group>

              <Input.Group>
                <Input.Fieldset legend="Radio" className="grid-cols-3">
                  <Input.Radio
                    id="radio01"
                    label="valor 01"
                    value="teste1"
                    name="multiRadio"
                  />
                  <Input.Radio
                    id="radio02"
                    label="valor 02"
                    value="teste2"
                    name="multiRadio"
                  />
                  <Input.Radio
                    id="radio03"
                    label="valor 03"
                    value="teste3"
                    name="multiRadio"
                  />
                </Input.Fieldset>
              </Input.Group>

              <Input.Group>
                <Input.Label htmlFor="select">Select:</Input.Label>
                <Input.Select id="select" />
              </Input.Group>
            </div>
            <div className="mt-10 flex justify-center">
              <Button type="submit">Enviar</Button>
            </div>
          </form>
        </FormProvider>

        <hr className="my-8 border-primary-500" />

        <h2 className="my-4 text-center text-xl font-bold uppercase">
          Validações
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <Input.Group>
              <Input.Input placeholder="teste" error={['teste msg com erro']} />
            </Input.Group>
            <Input.Group>
              <Input.Textarea error />
            </Input.Group>
            <Input.Group>
              <Input.Checkbox
                label="valor checkbox"
                error="teste msg com erro"
              />
            </Input.Group>
            <Input.Group>
              <Input.Fieldset
                legend="Checkbox"
                className="grid-cols-3"
                error="teste msg com erro"
              >
                <Input.Checkbox
                  value="teste"
                  name="checkbox"
                  label="valor checkbox"
                />
              </Input.Fieldset>
            </Input.Group>
            <Input.Group>
              <Input.Radio label="valor radio" error="teste msg com erro" />
            </Input.Group>
            <Input.Group>
              <Input.Fieldset
                legend="radio"
                className="grid-cols-3"
                error="teste msg com erro"
              >
                <Input.Radio value="teste" label="valor radio" />
              </Input.Fieldset>
            </Input.Group>
          </div>
          <div>
            <Input.Group>
              <Input.Input
                id="text"
                placeholder="teste"
                success={['teste msg com sucesso']}
              />
            </Input.Group>
            <Input.Group>
              <Input.Textarea success />
            </Input.Group>
            <Input.Group>
              <Input.Checkbox success label="valor checkbox" />
            </Input.Group>
            <Input.Group>
              <Input.Fieldset
                legend="Checkbox"
                className="grid-cols-3"
                success="teste msg com sucesso"
              >
                <Input.Checkbox value="teste" label="valor checkbox" />
              </Input.Fieldset>
            </Input.Group>
            <Input.Group>
              <Input.Radio
                label="valor radio"
                success="teste msg com sucesso"
              />
            </Input.Group>
            <Input.Group>
              <Input.Fieldset
                legend="Radio"
                className="grid-cols-3"
                success="teste msg com sucesso"
              >
                <Input.Radio value="teste" label="valor radio" />
              </Input.Fieldset>
            </Input.Group>
          </div>
        </div>

        <hr className="my-8 border-primary-500" />

        <h2 className="my-4 text-center text-xl font-bold uppercase">
          Desabilitados
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Input.Group>
            <Input.Input placeholder="teste" disabled />
          </Input.Group>
          <Input.Group>
            <Input.Textarea disabled />
          </Input.Group>
          <Input.Group>
            <Input.Checkbox label="valor checkbox" disabled defaultChecked />
          </Input.Group>
          <Input.Group>
            <Input.Fieldset legend="Checkbox" className="grid-cols-3" disabled>
              <Input.Checkbox value="teste" label="valor checkbox" />
            </Input.Fieldset>
          </Input.Group>
          <Input.Group>
            <Input.Radio label="valor radio" disabled defaultChecked />
          </Input.Group>
          <Input.Group>
            <Input.Fieldset legend="Radio" className="grid-cols-3" disabled>
              <Input.Radio value="teste" label="valor radio" />
            </Input.Fieldset>
          </Input.Group>
        </div>
      </Card.Content>
    </Card.Root>
  )
}
