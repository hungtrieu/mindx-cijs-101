import { useState } from 'react';
import Input from './Input';
import ErrorMessage from './ErrorMessage';
import './App.css'

// Component chính
function App() {

  // const [inputValue, setInputValue] = useState('');
  // const handleChange = (e) => {
  //   // Dùng JS để lấy giá trị của input text nhận email
  //   // console.log(document.getElementById('email').value);
  //   console.log(e.target.value);
  //   setInputValue(e.target.value);
  // }

  // const handleSubmit = (e) => {
  //   // Send to login api
  //   //...
  //   e.preventDefault();
  //   setInputValue('');
  // }

  /*
  Tư tưởng:
  - Thay vì lấy giá trị của ô input, thì sẽ lấy dữ liệu để đưa cho input hiển thị
   */

  const [userName, setUserName ] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setError('');

    if(!userName) {
      setError('Enter your username')
      return;
    }

    if(userName.length > 10) {
      setError('Your username is too long');
      return;
    }

    if(!password) {
      setError('Enter your password')
      return;
    }
  }

  return (
    <>
      <h1>Lesson 06</h1>
      {/* <form onSubmit={ (e) => handleSubmit(e)}>
        <h3>Input trong Component App</h3>
        <input id="email" value={inputValue} type="text" placeholder='Enter your email' onChange={ (e) => handleChange(e) } />
        <hr />
        <h4>Input trong component Input</h4>
        <Input cValue={inputValue} handleChange={ (e) => handleChange(e)} />
        <hr />
        <button type="submit">Submit</button>
      </form> */}

      {/* 
      Validate form login
      Username và password không được rỗng
      Username không được quá 10 ký tự
       */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} placeholder='Username' onChange={ (e) => {
          console.log(e.target);
          setUserName(e.target.value)
        }} />
        <input type="password" value={password} placeholder='Password' onChange={ (e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
        <ErrorMessage error={error} />
      </form>
      
    </>
  );
}

export default App
