import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Card from './Card.jsx';
import './App.css'

const xName = 'MindX CIJS-101';
const year = 2024;

const xStyle = {color: 'white', backgroundColor: 'red'};

const Element = (props) => {
  // console.log(props);
  
  // const newProps = {...props};
  // newProps.name = 'abc'; 
  /*
    props:
    - là 1 object
    - mỗi attribute trên component là một key của object props 
    - read-only

    Ý nghĩa
    - Linh động các tham số truyền vào component
    - Tái sử dụng được component
   */
  return (
    <h1 className="title" style={xStyle}>Hello {props.name} {props.year} </h1>
  )
}

const triggerClick = () => {
  console.log('Button clicked. Call from function')
}

const Btn = () => {
  return (
    <button onClick={triggerClick}>Click me!</button>
  )
}

const cards = [
  { name: "Macbook", price : "100000000" },
  { name: "Thinkpad", price: "220000"},
  { name: "Lenovo", price: "2700000"}
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      <Element name={xName} year={year} />

      { cards.map( card => (
        <Card {...card} />
      )) }

      <Btn />
    </div>
  )
}

export default App
