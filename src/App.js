import React from "react"
import {Input,Table,Popconfirm} from 'antd'
import axios from 'axios'
import './app.css';

const {Search} = Input
class App extends React.Component {
  state = {
    // onSearch: '搜索'
    list: [],
    columns: [
      {
        title: '任务编号',
        dataIndex: 'id',
        key: 'id',
      },
      {
        title: '任务名称',
        dataIndex: 'name',
        key: 'name',
      },
      {
        title: '任务描述',
        dataIndex: 'des',
        key: 'des',
      },
      {
        title: '操作',
        dataIndex: 'do',
        key: 'do',
        render: (_, record) =>
          <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.id)}>
            <a>Delete</a>
          </Popconfirm>
      },
    ]
  }
  // 搜索
  onSearch = async (value) => {
    console.log(value)
    // 搜索接口
    const res = await axios.get(`http://localhost:3001/data/?q=${value}`)
    this.setState({
      list: res.data
    })
  }
  // 删除
  handleDelete = async (id) => {
    console.log(id)
    // 调用删除接口
    await axios.delete(`http://localhost:3001/data/${id}`)
    // 重新获取列表
    this.loadList()
  }
  loadList = async () => {
    const res = await axios.get('http://localhost:3001/data')
    console.log(res)
    this.setState({
      list: res.data
    })
  }
  componentDidMount() {
    this.loadList()
  }
  render() {
    return (
      <>
        <div>this is todo-test</div>
        {/* 搜索框 */}
        <Search
          placeholder="input search text"
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />
        {/* table 依赖两个必要数据 一个定义列 一个用来遍历渲染 */}
        <Table dataSource={this.state.list} columns={this.state.columns} rowKey={(record) => record.id} />;
      </>
    )
  }
}

export default App
