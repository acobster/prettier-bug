import React from 'react'
import ReactDOM from 'react-dom'

// NOTE: error is not thrown when this import is commented out.
import prettier from 'prettier'

const App = (props) => {
  return (
    <h1>Hello, Prettier!</h1>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
