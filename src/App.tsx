import './App.css'

import React from 'react'

import { Home } from '@/pages'

import { Navbar } from './components'
import { LayoutContainer } from './styled-components'

const App: React.FC<{}> = () => {
  return (
      <div className="container">
        <Navbar/>
          <LayoutContainer>
              <Home/>
          </LayoutContainer>
      </div>
  )
}

export default App
