import { useState } from 'react'
import './App.css'

/*
Đề bài:
- In ra danh sách các công việc phải làm từ một array cho sẵn
- Cho phép thêm task mới
- Tìm kiếm và lọc danh sách công việc từ keyword được nhập từ ô tìm kiếm
- Bổ sung tính năng xoá một công việc

Vấn đề:
- Làm thế nào để in mảng ra mà không phải copy paste từng item?

Giải pháp
- Dùng array method .map()

*/

function App() {
  const [tasks, setTasks] = useState([
    {id: 1, text: 'Đi học'}, 
    {id: 2, text: 'Làm bài'}, 
    {id: 3, text: 'Chơi game'}
  ]);

  const [newTask, setNewTask] = useState('');

  const [searchText, setSearchText] = useState('');

  const handleAdd = () => {
    tasks.push(newTask);
    setTasks([...tasks]);
    setNewTask('');
    // console.log(newTask);
    // console.log(tasks)
  }

  // const tasksList = tasks.map( item => { 
  //   return <li>{item}</li>
  // });

  const handleDelete = (taskId) => {
    const updatedTasks = tasks.filter( item => item.id !== taskId);
    setTasks(updatedTasks);
  }


  const [isLoggedIn, setIsLoggedIn] = useState('')

	let button = null
	
	// if (isLoggedIn) {
	// 	button = <button onClick={() => {setIsLoggedIn(false)}}>Logout</button>
	// } else {
	// 	button = <button onClick={() => {setIsLoggedIn(true)}}>Login</button>
	// }

  const filteredTask = tasks.filter( item => {
    return item.text.includes(searchText)
  })
  .map( item => { 
    return <li key={item.id}>
      <input type="checkbox" />
      {item.text} -   <button onClick={() => handleDelete(item.id)}>X</button>
      </li>
  });

  return (
    <>
      <h1>Lesson 7</h1>
      <hr />
      <h2>Conditional Rendering</h2>
      <div>
      {/* {isLoggedIn 
				? <button onClick={() => {setIsLoggedIn(false)}}>Logout</button> 
				: <button onClick={() => {setIsLoggedIn(true)}}>Login</button>
			} */}
      {!isLoggedIn && <button>Login</button> }
      </div>
      <hr />
      <h2>To do list</h2>
      <input placeholder='Nhập tên công việc'
        value={newTask}
        onChange={ (e) => setNewTask(e.target.value)} />
      <button onClick={handleAdd}>Thêm</button>
      <h3>Danh sách</h3>
      <input placeholder='Tìm kiếm'
       value={searchText}
       onChange={(e) => {
        setSearchText(e.target.value)
       }}
       />
      <ul>
        {filteredTask.length ? filteredTask : <p>Không có kết quả phù hợp.</p>}
      </ul>
    </>
  )
}

export default App
