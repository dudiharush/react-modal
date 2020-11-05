import * as React from 'react'
import { render } from 'react-dom'
import { App } from './App'
import { ModalProvider } from './ReactModal/ModalProvider'

const rootElement = document.getElementById('root')
render(
  <ModalProvider>
    <App />
  </ModalProvider>,
  rootElement,
)
