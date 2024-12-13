// import React, { useRef, useState } from 'react';
// import React, { useState } from 'react';
// import React, { useState, useMemo } from 'react';
import { useState, useCallback, useEffect } from "react";
import './App.css'

// memo
// Component ListItem được ghi nhớ
// const ListItem = React.memo(({ item }) => {
//   console.log('Rendering item:', item.id);
//   return <li>{item.text}</li>;
// });

// const List = ({ items }) => {
//   return (
//       <ul>
//           {items.map(item => (
//               <ListItem key={item.id} item={item} />
//           ))}
//       </ul>
//   );
// };

function App() {

  // useRef example 1
  // const inputRef = useRef(null);

  //   const focusInput = () => {
  //       // truy xuất giá trị hiện tại qua thuộc tính current của ref
  //       // do component render xong, ref được gán vào input, nên giá trị inputRef sẽ là thẻ input và sử dụng như DOM bình thường
  //       console.log(inputRef.current.value)
  //       inputRef.current.focus();
  //   };

  // useRef example 2

  // const [startTime, setStartTime] = useState(null);
  // const [now, setNow] = useState(null);
  // const intervalRef = useRef(null);

  // function handleStart() {
  //   setStartTime(Date.now());
  //   setNow(Date.now());

  //   clearInterval(intervalRef.current);
  //   intervalRef.current = setInterval(() => {
  //     setNow(Date.now());
  //   }, 10);
  // }

  // function handleStop() {
  //   clearInterval(intervalRef.current);
  // }

  // let secondsPassed = 0;
  // if (startTime != null && now != null) {
  //   secondsPassed = (now - startTime) / 1000;
  // }

  // memo

//   const [items, setItems] = useState([
//     { id: 1, text: 'Item 1' },
//     { id: 2, text: 'Item 2' },
//     { id: 3, text: 'Item 3' }
// ]);

// const updateItem = () => {
//     const newItems = [...items];
//     newItems[1] = {
//         ...newItems[1],
//         text: 'Updated text item 2'
//     };
//     setItems(newItems);
// };

//useMemo

  // const [count, setCount] = useState(0);
  //   const [inputValue, setInputValue] = useState('');

  //   const expensiveCalculation = (num) => {
  //       console.log('Calculating...');
  //       // Giả sử đây là một tính toán đắt đỏ
  //       for (let i = 0; i < 1000000000; i++) {
  //           num += 1;
  //       }
  //       console.log('Calculated.');
  //       return num;
  //   };

  //   const memoizedValue = useMemo(() => expensiveCalculation(count), [count]);

  // useCallback
  const [user, setUser] = useState(null);

  const fetchData = useCallback(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((resJson) => {
        setUser(resJson.results[0]);
      });
  }, []);
  
  // lúc này ta truyền deps là fetchData, khi component re-render, fetchData vẫn giữ tham thiếu cũ của nó, cho nên useEffect vẫn chỉ chạy 1 lần duy nhất sau khi render
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
      <>
        <h1>Lesson 12</h1>

        {/*
        useRef example 1
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusInput}>Focus Input</button>
        </div> */}

      {/* 
      memo
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button> */}

      {/* <div>
            <List items={items} />
            <button onClick={updateItem}>Update Item 2</button>
        </div> */}

        {/* <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
            />
            <p>Computed Value: {memoizedValue}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
             */}

      <button onClick={fetchData}>Refresh</button>
      {user ? (
        <div>
          <img src={user.picture.medium} alt="" />
          <p>
            {user.name.first} {user.name.last}
          </p>
        </div>
      ) : null}
      </>
  );
}

export default App
