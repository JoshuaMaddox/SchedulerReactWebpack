const React = require('react')
const { render } = require('react-dom')
const App = require('./components/App')
require('./css/stylesheet.css') 

render(
  <App />,
  document.getElementById('root')
)