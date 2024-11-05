import React from 'react'
import Cart from '../../icons/Cart'

const GiftItem = () => {
  return (
    <div className="giftItem">
      <img src="https://s3-alpha-sig.figma.com/img/4d7f/9b27/bc5102b129c443e15c6c1e76d82104af?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WY2RH~YWiRKIFMeSHLEN1MGKMqbMgLL6C2ArDQEkgSfMNGrCoF2vEiQ6kHkmRfx8EKJBQfNeW6mE1x0xRBamY6Nbz18i~yeXR~YttD-2kOmbAZjXh3RhXp-3HSajPdfoqu~sFRDXAAnZ9VO9Ug4X2jsdC7C7wRgmUmEsnBj79gM7S5WDzdAgdP~kj1O4E-k3JT6RA2K-bE-nSuRsO~0BCiXRzQKuGAHOYDYoXUf45xNvKEXuIUonGL4vpvThIIj4srZHKF3yGffw8VgMnk2vAAHYDeDlYSdN2AypKyuPBi-MAhXHP717tYCWRtVhh3v2GSwRouH9xVemG-A5AS2ShQ__" width="100" />
      <div className="information">
        <span>Granola siêu hạt ăn kiêng 15% yến mạch</span>
        <Cart />
      </div>
      <div className="price">
        133.000 VND
        <span className="discount">-99%</span>
      </div>
    </div>
  )
}

export default GiftItem
