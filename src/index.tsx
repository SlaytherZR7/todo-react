import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'todomvc-app-css/index.css'

const rootEl = document.getElementById('root')
if (rootEl != null) {
  const root = ReactDOM.createRoot(rootEl)
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}
