import React from 'react'
import ReactDOM from 'react-dom'
import App from './guides'
import '../ui/core/app.scss'
ReactDOM.render(<App />, document.getElementById('root'))

if (process.env.NODE_ENV !== 'production') {
  module.hot.accept()
}
