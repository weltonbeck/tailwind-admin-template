import { TodoList } from '@/components/todoList'

export default function Page() {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-800">
      <h1 className="text-3xl font-black text-white">Hello world!</h1>
      <div className="pt-4">
        <TodoList itens={['exemplo', 'configurar projeto']} />
      </div>
    </div>
  )
}
