import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)

  /*
  Yêu cầu:
  - Tải trang, nếu chưa có dữ liệu thì hiện Loading...
  - Nếu có dữ liệu, thì tắt Loading và hiển thị dữ liệu
  */

  // const [data, setData] = useState(null);
  // const [loading, setLoading] = useState(true);

	useEffect(() => {
		document.title = `You clicked ${count} times`;
    console.log('Thực hiện useEffect');

    // Call API, đợi trả về
    // setTimeout( () => {
    //  setData(<h1>Hello CIJS-101</h1>);
    //   setLoading(false);
    // }, 3000);

    // const interval = setInterval(() =>{
    //   setCount(count + 1);
    // }, 1000);

    return () => {
      // clearInterval(interval);
      // console.log('Thực hiện Clean Up')
    }
	});


/*
Lưu ý về dependencies:
- Không truyền gì cả => Bất cứ thay đổi nào cũng sẽ thực hiện useEffect
- Truyền mảng có phần tử => chỉ khi phần tử thay đổi, thì mới thực hiện useEffect
- Truyền mảng rỗng [] => Có 'đăng ký' dependency, nhưng không thực hiện lại

Lưu ý:
- Khai báo, không khai báo dependency cần được cân nhắc kỹ
- Cần có xử lý lỗi trong useEffect để dừng 'tiến trình' side effect
- Cần suy nghĩ clean up ngay trước khi khai useEffect
*/

  // console.log('Component loaded');

  return (
    <>
      <h1>Lesson 8</h1>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p>You clicked {count1} times</p>
      <button onClick={() => setCount1(count1 + 1)}>
        Click me 1
      </button>
      <p>You clicked {count2} times</p>
      <button onClick={() => setCount2(count2 + 1)}>
        Click me 2
      </button>
      {/* {loading && <p>Loading...</p>} */}

      {/* {data && data} */}
    </>
  )
}

export default App
