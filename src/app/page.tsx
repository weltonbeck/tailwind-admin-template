import { Button } from '@/components/button'
import { Card } from '@/components/card'

export default function Homepage() {
  return (
    <main className="flex h-screen items-center justify-center">
      <Card.Root>
        <Card.Content>
          <h2 className="mb-3 text-center text-2xl font-bold">Login</h2>
          <form action="">
            <div className="mb-2">
              <label
                htmlFor="email"
                className="mb-1 text-sm font-medium text-gray-800"
              >
                E-mail:
              </label>
              <input
                id="email"
                type="text"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 transition duration-200 ease-in-out placeholder:text-gray-300 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="mb-2">
              <label
                htmlFor="password"
                className="mb-1 text-sm font-medium text-gray-800"
              >
                Senha:
              </label>
              <input
                id="password"
                type="password"
                className="w-full rounded border border-gray-300 bg-gray-50 px-3 py-2 text-sm text-gray-500 transition duration-200 ease-in-out placeholder:text-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div className="my-4 text-center">
              <Button color="primary" full>
                Entrar
              </Button>
            </div>

            <div className="text-right">
              <a href="" className="text-sm text-gray-500 hover:underline">
                Esqueceu a senha?
              </a>
            </div>
          </form>
        </Card.Content>
      </Card.Root>
    </main>
  )
}
