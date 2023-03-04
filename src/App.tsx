import './App.css'

import React from 'react'
import { Provider } from 'react-redux'

import { Home } from '@/pages'
import store from '@/redux/store'

import { Navbar } from './components'
import { LayoutContainer } from './styled-components'

const App: React.FC<{}> = () => {
  return (
      <Provider store={store}>
          <div className="container">
            <Navbar/>
              <LayoutContainer>
                  <Home/>
              </LayoutContainer>
          </div>
      </Provider>
  )
}

export default App
