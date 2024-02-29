'use client'
// import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Form } from '@/components/form'
import { FilePenLineIcon } from 'lucide-react'

export default function FormPage() {
  const methods = useForm({
    // defaultValues: {
    //   text: 'valor de teste',
    //   textarea: 'valor de teste',
    //   select: '2',
    //   checkbox: true,
    //   multiCheckbox: '2',
    //   radio: true,
    //   multiRadio: '2',
    // },
  })

  async function onSubmit(data: unknown) {
    console.log(data)
    // await new Promise((resolve) => setInterval(resolve, 3000))
    // console.log('foi')
  }

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
          <form onSubmit={methods.handleSubmit(onSubmit)}>
            <h2 className="mb-8 text-center text-xl font-bold uppercase">
              Tipos de inputs
            </h2>

            <div className="grid grid-cols-2 gap-4">
              <Form.Group>
                <Form.Label htmlFor="text">Text:</Form.Label>
                <Form.Input id="text" name="text" />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="textarea">Textarea:</Form.Label>
                <Form.Textarea id="textarea" name="textarea" />
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="checkbox">Checkbox unico:</Form.Label>
                <Form.Checkbox id="checkbox" name="checkbox" />
              </Form.Group>

              <Form.Group>
                <Form.Fieldset legend="Checkbox" className="grid-cols-3">
                  <Form.Checkbox
                    id="checkbox01"
                    value="1"
                    label="valor 01"
                    name="multiCheckbox"
                  />
                  <Form.Checkbox
                    id="checkbox02"
                    value="2"
                    label="valor 02"
                    name="multiCheckbox"
                  />
                  <Form.Checkbox
                    id="checkbox03"
                    value="3"
                    label="valor 03"
                    name="multiCheckbox"
                  />
                </Form.Fieldset>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="radio">Radio unico:</Form.Label>
                <Form.Radio id="radio" name="radio" />
              </Form.Group>

              <Form.Group>
                <Form.Fieldset legend="Radio" className="grid-cols-3">
                  <Form.Radio
                    id="radio01"
                    label="valor 01"
                    value="1"
                    name="multiRadio"
                  />
                  <Form.Radio
                    id="radio02"
                    label="valor 02"
                    value="2"
                    name="multiRadio"
                  />
                  <Form.Radio
                    id="radio03"
                    label="valor 03"
                    value="3"
                    name="multiRadio"
                  />
                </Form.Fieldset>
              </Form.Group>

              <Form.Group>
                <Form.Label htmlFor="select">Select:</Form.Label>
                <Form.Select
                  id="select"
                  name="select"
                  options={[1, 2, 3].map((value) => {
                    return {
                      value: String(value),
                      label: `teste ${value}`,
                    }
                  })}
                />
              </Form.Group>
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
            <Form.Group>
              <Form.Input placeholder="teste" error={['teste msg com erro']} />
            </Form.Group>
            <Form.Group>
              <Form.Textarea error />
            </Form.Group>
            <Form.Group>
              <Form.Checkbox
                label="valor checkbox"
                error="teste msg com erro"
              />
            </Form.Group>
            <Form.Group>
              <Form.Fieldset
                legend="Checkbox"
                className="grid-cols-3"
                error="teste msg com erro"
              >
                <Form.Checkbox
                  value="teste"
                  name="checkbox"
                  label="valor checkbox"
                />
              </Form.Fieldset>
            </Form.Group>
            <Form.Group>
              <Form.Radio label="valor radio" error="teste msg com erro" />
            </Form.Group>
            <Form.Group>
              <Form.Fieldset
                legend="radio"
                className="grid-cols-3"
                error="teste msg com erro"
              >
                <Form.Radio value="teste" label="valor radio" />
              </Form.Fieldset>
            </Form.Group>
            <Form.Group>
              <Form.Select
                options={[1, 2, 3].map((value) => {
                  return {
                    value: String(value),
                    label: `teste ${value}`,
                  }
                })}
                error="teste msg com erro"
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group>
              <Form.Input
                id="text"
                placeholder="teste"
                success={['teste msg com sucesso']}
              />
            </Form.Group>
            <Form.Group>
              <Form.Textarea success />
            </Form.Group>
            <Form.Group>
              <Form.Checkbox success label="valor checkbox" />
            </Form.Group>
            <Form.Group>
              <Form.Fieldset
                legend="Checkbox"
                className="grid-cols-3"
                success="teste msg com sucesso"
              >
                <Form.Checkbox value="teste" label="valor checkbox" />
              </Form.Fieldset>
            </Form.Group>
            <Form.Group>
              <Form.Radio label="valor radio" success="teste msg com sucesso" />
            </Form.Group>
            <Form.Group>
              <Form.Fieldset
                legend="Radio"
                className="grid-cols-3"
                success="teste msg com sucesso"
              >
                <Form.Radio value="teste" label="valor radio" />
              </Form.Fieldset>
            </Form.Group>
            <Form.Group>
              <Form.Select
                options={[1, 2, 3].map((value) => {
                  return {
                    value: String(value),
                    label: `teste ${value}`,
                  }
                })}
                success="teste msg com sucesso"
              />
            </Form.Group>
          </div>
        </div>

        <hr className="my-8 border-primary-500" />

        <h2 className="my-4 text-center text-xl font-bold uppercase">
          Desabilitados
        </h2>

        <div className="grid grid-cols-2 gap-4">
          <Form.Group>
            <Form.Input placeholder="teste" disabled />
          </Form.Group>
          <Form.Group>
            <Form.Textarea disabled />
          </Form.Group>
          <Form.Group>
            <Form.Checkbox label="valor checkbox" disabled defaultChecked />
          </Form.Group>
          <Form.Group>
            <Form.Fieldset legend="Checkbox" className="grid-cols-3" disabled>
              <Form.Checkbox value="teste" label="valor checkbox" />
            </Form.Fieldset>
          </Form.Group>
          <Form.Group>
            <Form.Radio label="valor radio" disabled defaultChecked />
          </Form.Group>
          <Form.Group>
            <Form.Fieldset legend="Radio" className="grid-cols-3" disabled>
              <Form.Radio value="teste" label="valor radio" />
            </Form.Fieldset>
          </Form.Group>
          <Form.Group>
            <Form.Select
              options={[1, 2, 3].map((value) => {
                return {
                  value: String(value),
                  label: `teste ${value}`,
                }
              })}
              value="2"
              disabled
            />
          </Form.Group>
        </div>
      </Card.Content>
    </Card.Root>
  )
}
