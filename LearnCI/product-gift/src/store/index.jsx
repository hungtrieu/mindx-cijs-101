import React from 'react'
import { createContext, useState } from 'react';
import giftsList from '../data'

export const Store = createContext({
    gifts: [],
    setGifts(newGifts) {}
});

const StoreProvider = (props) => {
  const [gifts, setGifts] = useState( () => {
    const currentGifts = localStorage.getItem("gifts") ?
      JSON.parse(localStorage.getItem("gifts")) : 
      giftsList;
    return currentGifts;
  });
  return <Store.Provider value={{gifts, setGifts}}>
    {props.children}
  </Store.Provider>
}

export default StoreProvider;