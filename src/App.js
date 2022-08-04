import React from "react"
import PropTypes from 'prop-types'

function Test() {
  return (
    <>
      <div>this is Test</div>
    </>
  )
}

Test.propTypes = {
  list: PropTypes.array.isRequired
}
class App extends React.Component {
  render() {
    return (
      <>
        <Test />
      </>
    )
  }
}

export default App
