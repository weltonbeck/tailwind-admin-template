'use client'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Form } from '@/components/form'
import { FilePenLineIcon } from 'lucide-react'

export default function FormPage() {
  const methods = useForm({
    defaultValues: {
      text: 'valor de teste',
      textarea: 'valor de teste',
      select: '2',
      multiSelect: ['2', '4'],
      checkbox: true,
      multiCheckbox: '2',
      radio: true,
      multiRadio: '2',
      slider: 3,
      toggle: true,
    },
  })

  async function onSubmit(data: unknown) {
    console.log(data)
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
        <h2 className="mb-8 text-center text-xl font-bold uppercase">
          Tipos de inputs
        </h2>
        <Form.Root
          onSubmit={methods.handleSubmit(onSubmit)}
          providerMethods={methods}
        >
          <Form.Group grid="col6">
            <Form.Label htmlFor="text">Text:</Form.Label>
            <Form.Input id="text" name="text" />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="textarea">Textarea:</Form.Label>
            <Form.Textarea id="textarea" name="textarea" />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="checkbox">Checkbox unico:</Form.Label>
            <Form.Checkbox id="checkbox" name="checkbox" />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Fieldset legend="Checkbox" className="grid-cols-2">
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
            </Form.Fieldset>
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="radio">Radio unico:</Form.Label>
            <Form.Radio id="radio" name="radio" />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Fieldset legend="Radio" className="grid-cols-2">
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
            </Form.Fieldset>
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="select">Select:</Form.Label>
            <Form.Select
              id="select"
              name="select"
              allowSearch
              options={[
                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18,
                19, 20,
              ].map((value) => {
                return {
                  value: String(value),
                  label: `teste ${value}`,
                }
              })}
            />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="multiSelect">Multiple Select:</Form.Label>
            <Form.Select
              id="multiSelect"
              name="multiSelect"
              multiple
              options={[1, 2, 3, 4, 5, 6, 7, 8].map((value) => {
                return {
                  value: String(value),
                  label: `teste ${value}`,
                }
              })}
            />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="slider">Slider:</Form.Label>
            <Form.Slider id="slider" name="slider" min={0} max={10} step={1} />
          </Form.Group>

          <Form.Group grid="col6">
            <Form.Label htmlFor="toggle">Toggle:</Form.Label>
            <Form.Toggle id="toggle" name="toggle" />
          </Form.Group>

          <Form.Group className="mt-10 flex justify-center">
            <Button type="submit">Enviar</Button>
          </Form.Group>
        </Form.Root>

        <hr className="my-8 border-primary-500" />

        <h2 className="my-4 text-center text-xl font-bold uppercase">
          Validações
        </h2>

        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-6">
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
                className="grid-cols-2"
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
                className="grid-cols-2"
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
            <Form.Group>
              <Form.Slider
                min={0}
                max={5}
                step={1}
                error="teste msg com erro"
              />
            </Form.Group>
            <Form.Group>
              <Form.Toggle error="teste msg com erro" />
            </Form.Group>
          </div>
          <div className="col-span-12 md:col-span-6">
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
                className="grid-cols-2"
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
                className="grid-cols-2"
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
            <Form.Group>
              <Form.Slider
                min={0}
                max={5}
                step={1}
                success="teste msg com sucesso"
              />
            </Form.Group>
            <Form.Group>
              <Form.Toggle success="teste msg com sucesso" />
            </Form.Group>
          </div>
        </div>

        <hr className="my-8 border-primary-500" />

        <h2 className="my-4 text-center text-xl font-bold uppercase">
          Desabilitados
        </h2>

        <div className="grid grid-cols-12 gap-4">
          <Form.Group grid="col6">
            <Form.Input placeholder="teste" disabled />
          </Form.Group>
          <Form.Group grid="col6">
            <Form.Textarea disabled />
          </Form.Group>
          <Form.Group grid="col6">
            <Form.Checkbox label="valor checkbox" disabled defaultChecked />
          </Form.Group>
          <Form.Group grid="col6">
            <Form.Fieldset legend="Checkbox" className="grid-cols-2" disabled>
              <Form.Checkbox value="teste" label="valor checkbox" />
            </Form.Fieldset>
          </Form.Group>
          <Form.Group grid="col6">
            <Form.Radio label="valor radio" disabled defaultChecked />
          </Form.Group>
          <Form.Group grid="col6">
            <Form.Fieldset legend="Radio" className="grid-cols-2" disabled>
              <Form.Radio value="teste" label="valor radio" />
            </Form.Fieldset>
          </Form.Group>
          <Form.Group grid="col6">
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
          <Form.Group grid="col6">
            <Form.Slider min={0} max={5} step={1} disabled />
          </Form.Group>
          <Form.Group grid="col6">
            <Form.Toggle disabled />
          </Form.Group>
        </div>
      </Card.Content>
    </Card.Root>
  )
}
