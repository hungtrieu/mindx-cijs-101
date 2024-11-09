import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import LikeNow from './components/LikeNow'
import Filter from './components/Filter'
import GiftItem from './components/GiftItem'
import Pagination from './components/Pagination'
import giftsList from './data';

import './App.css'


function App() {
  const [count, setCount] = useState(0)

  const closeModal = () => {
    document.getElementById("myModal").style.display = "none";
  }

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
          <div className="div1"><GiftItem item={giftsList[0]} /></div>
          <div className="div2"><GiftItem item={giftsList[1]} /></div>
          <div className="div3"><GiftItem item={giftsList[2]} /></div>
          <div className="div4"><GiftItem item={giftsList[3]} /></div>
          <div className="div5"><GiftItem item={giftsList[4]} /></div>
          <div className="div6"><GiftItem item={giftsList[5]} /></div>
          <div className="div7"><GiftItem item={giftsList[6]} /></div>
          <div className="div8"><GiftItem item={giftsList[7]} /></div>
        </div>
        <Pagination />
      </div>

      <div id="myModal" class="modal">
        <div className="modal-content">
          <span className="close" onClick={closeModal}>&times;</span>
          <p id="myModalContent">Some text in the Modal..</p>
        </div>
      </div>
    </div>
  )
}

export default App
