import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import HomePage from './views/Home'

const Routes: React.FC = () => (
  <main>
    <BrowserRouter>
      <Route path='/' component={HomePage} />
    </BrowserRouter>
  </main>
)

export default Routes
