import React from "react"
import PropTypes from 'prop-types'
// 函数组件默认值 1. 使用defaultProps 2. 函数参数默认值（推荐方案）
// 区别：第一种在使用的时候组件内部已经有了pageSize这个prop 第二种只有传递的时候组件内部才有这个prop

function Test(props) {
  return (
    <>
      <div>this is Test</div>
      {props.pageSize}
    </>
  )
}
// function Test({pageSize = 10}) {
//   return (
//     <>
//       <div>this is Test</div>
//       {pageSize}
//     </>
//   )
// }

Test.propTypes = {
  list: PropTypes.array.isRequired
}

// Test.defaultProps = {
//   pageSize: 10
// }
class App extends React.Component {
  render() {
    return (
      <>
        <Test pageSize={20} />
      </>
    )
  }
}

export default App
