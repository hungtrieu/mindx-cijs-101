import React from 'react'
import StarYellow from '../../icons/StarYellow';

import './style.css';

const Modal = (props) => {
    // const closeModal = () => {
    //     document.getElementById("myModal").style.display = "none";
    // }

  return (
    <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={props.onClose}>&times;</span>
          <div className="modalContent">
            <div className="row">
                <div className="image">
                    <img src="https://s3-alpha-sig.figma.com/img/4d7f/9b27/bc5102b129c443e15c6c1e76d82104af?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WY2RH~YWiRKIFMeSHLEN1MGKMqbMgLL6C2ArDQEkgSfMNGrCoF2vEiQ6kHkmRfx8EKJBQfNeW6mE1x0xRBamY6Nbz18i~yeXR~YttD-2kOmbAZjXh3RhXp-3HSajPdfoqu~sFRDXAAnZ9VO9Ug4X2jsdC7C7wRgmUmEsnBj79gM7S5WDzdAgdP~kj1O4E-k3JT6RA2K-bE-nSuRsO~0BCiXRzQKuGAHOYDYoXUf45xNvKEXuIUonGL4vpvThIIj4srZHKF3yGffw8VgMnk2vAAHYDeDlYSdN2AypKyuPBi-MAhXHP717tYCWRtVhh3v2GSwRouH9xVemG-A5AS2ShQ__" />
                </div>
                <div className="information">
                    <h2>(product name)</h2>
                    <div className="rating">
                        <StarYellow />
                        <StarYellow />
                        <StarYellow />
                    </div>
                    <div className="price">
                        (price)
                    </div>
                    <div className="classified">
                        (classified)
                    </div>
                    <div className="addToCart">
                        (add to cart)
                    </div>
                </div>
            </div>
            <div className="row">
                (description)
            </div>
          </div>
        </div>
    </div>
  )
}

export default Modal
