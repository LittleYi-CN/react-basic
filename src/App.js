import React from "react"
import PropTypes from 'prop-types'

function Test({list}) {
  return (
    <>
      <div>this is Test</div>
      {list.map(item => <span key={item}>{item}</span>)}
    </>
  )
}

Test.propTypes = {
  list: PropTypes.array
}
class App extends React.Component {
  render() {
    return (
      <>
        <Test list={9} />
      </>
    )
  }
}

export default App
