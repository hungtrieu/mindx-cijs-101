import { useState } from 'react'
import LikeNow from './components/LikeNow'
import Filter from './components/Filter'
import GiftItem from './components/GiftItem'
import Pagination from './components/Pagination'
import Modal from './components/Modal'
import ModalCreate from './components/ModalCreate'
import giftsList from './data';

import './App.css'


function App() {
  const [openModal, setOpenModal] = useState(false);
  const [openModalCreate, setOpenModalCreate] = useState(false);
  const [selectedGift, setSelectedGift] = useState();

  const handleOpenModal = (open, gift) => {
    setOpenModal(open);
    setSelectedGift(gift);
  }

  const handleOpenModalCreate = (open) => {
    setOpenModalCreate(open);
    setNewGift({
      name: '',
      price: 0,
      imageSrc: '',
      rating: 0
    })
  }

  const [ newGift, setNewGift ] = useState( {
    name: '',
    price: 0,
    imageSrc: '',
    rating: 0
  } );

  return (
    <div className="container">
      <LikeNow />
      <Filter />
      <div className="productGifts">
        <div className="topGift">
          <h2>Quà tặng</h2>
          <button onClick={ () => handleOpenModalCreate(true) }>Tạo</button>
        </div>
        <div className="contentGifts">
          <div className="div1" onClick={ () => handleOpenModal(true, giftsList[0]) }>
            <GiftItem item={giftsList[0]} />
            </div>
          <div className="div2" onClick={ () => handleOpenModal(true, giftsList[1]) }>
            <GiftItem item={giftsList[1]} />
            </div>
          <div className="div3" onClick={ () => handleOpenModal(true, giftsList[2]) }>
            <GiftItem item={giftsList[2]} />
            </div>
          <div className="div4"><GiftItem item={giftsList[3]} /></div>
          <div className="div5"><GiftItem item={giftsList[4]} /></div>
          <div className="div6"><GiftItem item={giftsList[5]} /></div>
          <div className="div7"><GiftItem item={giftsList[6]} /></div>
          <div className="div8"><GiftItem item={giftsList[7]} /></div>
        </div>
        <Pagination />
      </div>

      { openModal ? <Modal currentGift={selectedGift} onClose={ () => handleOpenModal(false) } /> : null }
      { openModalCreate ? <ModalCreate newGift={newGift} setNewGift={setNewGift} onClose={ () => handleOpenModalCreate(false) } /> : null }
    </div>
  )
}

export default App
