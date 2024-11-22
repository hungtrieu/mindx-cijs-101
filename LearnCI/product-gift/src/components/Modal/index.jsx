import React, {useState} from 'react'
import StarYellow from '../../icons/StarYellow';
import Star from '../../icons/Star';
import Close from '../../icons/Close';

import './style.css';

const Modal = (props) => {
    const {currentGift} = props;
    const [comment, setComment ] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(currentGift.name, comment);
    }

  return (
    <div id="myModal" className="modal">
        <div className="modalContent">
            <div className="row control">
                <Close onClick={props.onClose} />
            </div>
          
            <div className="row">
                <div className="image">
                    <img src={currentGift.imageSrc} />
                </div>
                <div className="information">
                    <h2 className="name irow">{currentGift.name}</h2>
                    <div className="rating irow">
                        <StarYellow />
                        <StarYellow />
                        <StarYellow />
                        <Star />
                        <Star />
                    </div>
                    <div className="price irow">
                        Giá: 42.000 VND
                    </div>
                    <div className="classified irow">
                        Phân loại:
                        <div className="buttons">
                            <button>Nhỏ</button>
                            <button>Vừa</button>
                            <button>Lớn</button>
                        </div>
                    </div>
                    <div className="addToCart">
                        <div className="amount">
                            <button>-</button>
                            <input type="text" defaultValue={0} />
                            <button>+</button>
                        </div>
                        <button className="buy">Chọn mua</button>
                    </div>
                </div>
            </div>
            <div className="description row">
                (description)
            </div>
            <div className="comment row">
                <form onSubmit={(event) => handleSubmit(event)}>
                    <textarea value={comment} onChange={ (e) => setComment(e.target.value)}></textarea>
                    <button>Comment</button>
                </form>
                
            </div>
        </div>
    </div>
  )
}

export default Modal
