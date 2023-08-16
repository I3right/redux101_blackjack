import React from 'react'
import ReactDOM from 'react-dom/client'
import AppClass from './AppClass.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppClass />
    </Provider>
  </React.StrictMode>,
)
