import React from 'react'
import Routes from './routes'

import { DrinkProvider } from './contexts/drinksContext'

import './assets/styles/global.css'

const App: React.FC = () => {
  return (
    <>
      <DrinkProvider>
        <Routes />
      </DrinkProvider>
    </>
  )
}

export default App
