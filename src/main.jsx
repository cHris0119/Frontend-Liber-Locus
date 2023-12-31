import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'

import './index.css'
import { NextUIProvider } from '@nextui-org/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

  <NextUIProvider>

    <BrowserRouter>
      <App />
    </BrowserRouter>

  </NextUIProvider>

  </Provider>
)
