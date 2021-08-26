import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

function render() {
  ReactDOM.render(<App/>, document.getElementById('root'))
}
render()

if (module && module.hot) {
  module.hot.accept('./App.jsx', () => render())
}