import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

export const UserContext =React.createContext()
export const ColorContext =React.createContext()
const initalval = "i am here"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext.Provider value={initalval}>
    <ColorContext.Provider value={'Green'}><App /></ColorContext.Provider>
    
    </UserContext.Provider>
    
  </React.StrictMode>,
)
