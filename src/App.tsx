import React from 'react'
import Routes from './routes'

import { DrinkProvider } from './contexts/drinksContext'

import Header from '@/components/Header'

import './assets/styles/global.css'

const App: React.FC = () => {
  return (
    <>
      <Header />
      <DrinkProvider>
        <Routes />
      </DrinkProvider>
    </>
  )
}

export default App
