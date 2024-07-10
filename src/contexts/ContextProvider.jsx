import { createContext } from "react"

const UserContext = createContext([

])

export default function StateContext({ children }) {
  return (
    <UserContext.Provider value={{

        }
    }>
        {children}
    </UserContext.Provider>    
  )
}
