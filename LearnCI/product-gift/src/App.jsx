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

  /* 
  List rendering
  - Dùng map trước, 
  - Sort() để sau

  Câu 2:
  Ý tưởng:
  - Truyền giftList vào ModalCreate
  - useState để 'lắng nghe' biến gifts
  - Thêm mới sản phẩm, render lại gifts

  Câu 3:
  Ý tưởng:
  - thêm 1 key 'notes' vào currentGift, với nội dung là biến comment của component <Modal>
  - Lưu ý: Cần kiểm tra, nếu đã có 'notes' thì bổ sung comment là phần tử mới của mảng notes
  - kỳ vọng:
      currentGift.notes = ["Good", "Okay", "Not good"]
  */

  const [gifts, setGifts] = useState( () => {
    const currentGifts = localStorage.getItem("gifts") ?
      JSON.parse(localStorage.getItem("gifts")) : 
      giftsList;
    return currentGifts;
  });

  console.log(gifts);

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
          {gifts.sort( (a, b) => {
            return new Date(b.addDate).getTime() - new Date(a.addDate).getTime();
          }).slice(0, 8).map( (gift, index) => {
            return <div className={`div${index + 1}`} 
                onClick={ () => handleOpenModal(true, gift) }>
                <GiftItem item={gift} />
              </div>
          })}
        </div>
        <Pagination />
      </div>

      { openModal && <Modal 
          currentGift={selectedGift} 
          setGift={ (gift) => {
            const updatedGifts = gifts.map( item => {
              return (item.id === gift.id) ? gift : item
            });

            localStorage.setItem("gifts", JSON.stringify(updatedGifts));

            setGifts([...updatedGifts])
          }}
          onClose={ () => handleOpenModal(false) } 
      />}
      { openModalCreate && <ModalCreate 
          setGifts={ () => {
            gifts.push(
              {...newGift,
                id: gifts.length + 1,
                addDate: new Date()
              }
            );

            localStorage.setItem("gifts", JSON.stringify(gifts));

            setGifts([...gifts])
          }}
          newGift={newGift} 
          setNewGift={setNewGift} 
          onClose={ () => handleOpenModalCreate(false) } 
        /> }
    </div>
  )
}

export default App
