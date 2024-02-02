'use client'
import { createContext, useState } from 'react'

interface NavContextData {
  show: boolean
  toggleShow: () => void
}

export const NavContext = createContext<NavContextData>({} as NavContextData)

export const NavProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [show, setShow] = useState(false)

  const toggleShow = () => {
    setShow(!show)
  }

  return (
    <NavContext.Provider
      value={{
        show,
        toggleShow,
      }}
    >
      {children}
    </NavContext.Provider>
  )
}
