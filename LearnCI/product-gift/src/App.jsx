import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LikeNow from './components/LikeNow'
import Filter from './components/Filter'
import GiftItem from './components/GiftItem'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <LikeNow />
      <Filter />
      <div className="productGifts">
        <div className="topGift">
          <h2>Quà tặng</h2>
          <button>Tạo</button>
        </div>
        <div className="contentGifts">
          <div class="div1"><GiftItem /></div>
          <div class="div2"><GiftItem /></div>
          <div class="div3"><GiftItem /></div>
          <div class="div4"><GiftItem /></div>
          <div class="div5"><GiftItem /></div>
          <div class="div6"><GiftItem /></div>
          <div class="div7"><GiftItem /></div>
          <div class="div8"><GiftItem /></div>
        </div>
        <div className="bottomPagination">
          (pagination)
        </div>
      </div>
    </div>
  )
}

export default App
