import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/* 
Yêu cầu: Click button, thì cập nhật tăng số Đếm lên 1
Giải pháp:
- Khai báo khu vực / dữ liệu cần quan tâm cho ReactJS
- Thực hiện thay đổi dữ liệu, ReactJS cần kiểm tra và cập nhật lại thay đổi trên giao diện

webhook
wordpress hook

useState
- Trả về mảng gồm 2 phần tử
  - Phần tử đầu tiên (index=0) giá trị hiện tại
  - Phần tử thứ 2 (index=1) là hàm cập nhật giá trị

  - Có thể dùng useState cho nhiều biến khác nhau
  - State của component nào thì component đấy dùng, không bị lẫn sang component khác
*/

function App() {
  // let [count, setCount] = useState(0);

  // count += 5;

  // let [year, setYear] = useState(2024);
  // let [population, setPopulation] = useState(100000000);

  let lesson_number = 5;

  // const handleClick = () => {
  //   // count += 1;
  //   // document.getElementById('count').innerText = count;
  //   setCount(count + 1);
  //   console.log(count);
  // };

  // const handleClick2 = () => {
  //   setYear(year + 1);
  // };

  // const handleClick3 = () => {
  //   setPopulation(population + 10000000);
  // };

  // const [person, setPerson] = useState({
  //   name: "MindX",
  //   age: 10
  // });

  // const increaseAge = () => {
	// 	person.age = person.age + 1;
  //   console.log(person.age);
  //   // const newData = {
  //   //   name: person.name,
  //   //   age: person.age
  //   // }
	// 	setPerson({...person});
	// }

  const [isDark, setIsDark] = useState(false);

  const toogleTheme = () => {
    setIsDark(!isDark);
  }

  const [tasks, setTasks] = useState([]);

  const addNewTask = () => {
    setTasks([...tasks,
      {
        id: tasks.length,
        value: `New task ${tasks.length}` 
      }
    ]);
  }

  return (
    <div className={isDark ? 'dark' : 'light'}>
      <h1>Lesson {lesson_number}</h1>
      {/* <p>Đếm: <span id="count">{count}</span></p> */}
      {/* <p>Đếm: {count}</p> */}
      {/* <p>Năm: {year}</p>
      <p>Dân số: {population}</p> */}
      {/* <button onClick={handleClick}>Tăng đếm lên 1</button> */}
      {/* <button onClick={handleClick2}>Tăng năm lên 1</button>
      <button onClick={handleClick3}>Tăng dân số</button> }

      <p>Hello! I'm {person.name}. I'm {person.age} years old.</p>
      <button onClick={increaseAge}>Happy birthday</button> */}

      <button onClick={toogleTheme}>Chuyển chế độ</button>

      <hr />
      <div>
        <button onClick={addNewTask}>Add new task</button>
      </div>
      <ul>
        {tasks.map( item => (
          <li key={item.id}>{item.value}</li>
        ))}
        {/* <li>Task T01</li>
        <li>Task T02</li>
        <li>Task T03</li> */}
      </ul>
    </div>
  );
}

export default App
