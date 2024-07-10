import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import StateContext from './contexts/ContextProvider.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './router'
import "./style.scss"

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <StateContext>
        <RouterProvider router={router}/>
      </StateContext>
    </QueryClientProvider>
  // </React.StrictMode>,
)
