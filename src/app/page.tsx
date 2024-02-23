import Link from 'next/link'
import { Button } from '@/components/button'
import { Card } from '@/components/card'
import { Input } from '@/components/input'

export default function Homepage() {
  return (
    <main className="flex h-screen items-center justify-center bg-gray-400">
      <Card.Root className="min-w-[320px]">
        <Card.Content>
          <h2 className="mb-3 text-center text-2xl font-bold">Login</h2>
          <form action="/dashboard">
            <div className="mb-2">
              <Input.Label htmlFor="email">E-mail:</Input.Label>
              <Input.Input id="email" type="text" />
            </div>
            <div className="mb-2">
              <Input.Label htmlFor="password">Senha:</Input.Label>
              <Input.Input id="password" type="password" />
            </div>

            <Button type="submit" color="primary" full className="my-4">
              Entrar
            </Button>
          </form>

          <div className="text-right">
            <Link href="#" className="text-sm text-gray-500 hover:underline">
              Esqueceu a senha?
            </Link>
          </div>
        </Card.Content>
      </Card.Root>
    </main>
  )
}
