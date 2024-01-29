'use client'

import { useState } from 'react'

type TodoListProps = {
  itens: string[]
}

export function TodoList({ itens }: TodoListProps) {
  const [list, setList] = useState(itens)
  const [inputValue, setInputValue] = useState('')

  const addNew = () => {
    if (inputValue) {
      setList([...list, inputValue])
      setInputValue('')
    }
  }

  return (
    <>
      <div className="pb-4">
        <input
          type="text"
          className="mr-2 rounded-sm border-2 border-gray-300 p-1 px-2 font-light outline-none focus:border-blue-500"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Digite aqui"
        />
        <button
          className="rounded bg-blue-500 px-4 py-2 font-medium text-white transition hover:bg-blue-700"
          onClick={addNew}
        >
          Adicionar Novo
        </button>
      </div>
      <ul className="list-disc text-white">
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </>
  )
}
