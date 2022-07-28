// react如何完成列表渲染
// 技术方案: map 重复渲染的是哪个模板 就return谁
// 注意事项：遍历列表时同样需要一个类型为number/string不可重复的key 提高diff性能
// key仅仅在react框架内部使用，不会出现在真实的dom中
const songs = [
  { id: 1, name: '夜的第七章' },
  { id: 2, name: '彩虹' },
  { id: 3, name: '夜曲' }
]

function App() {
  return(
    <div className="App">
      <ul>
        { songs.map(song => <li key={song.id}>{song.name}</li>) }
      </ul>
    </div>
  )
}

export default App;
