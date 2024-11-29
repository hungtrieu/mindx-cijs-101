import { useState, useContext } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Store from './context';
import Header from './Header';
import Footer from './Footer';

import { DictionariesProvider } from './StoreProvider';

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const store = useContext(Store);

/* Tạo tính năng đổi theme cho toàn bộ ứng dụng
Có thể đổi ngôn ngữ tiếng Anh, Việt cho ứng dụng */

  return (
      <DictionariesProvider>
      <>
      <Header />
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Lesson 09 {store.theme}</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Footer />
    </>
    </DictionariesProvider>
  )
}

export default App
