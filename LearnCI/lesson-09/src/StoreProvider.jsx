import {useState} from 'react';
import Store, {DisctionariesContext} from './context';

export const DictionariesProvider = (props) => {
    const [language, setLanguage] = useState('vi');

    return <DisctionariesContext.Provider value={{language, setLanguage}}>
        {props.children}
    </DisctionariesContext.Provider>
}

const StoreProvider = (props) => {
    const [theme, setTheme] = useState('light');
  return <Store.Provider value={{theme, setTheme}}>
    {/* component sử dụng context Store */}
    {props.children}
  </Store.Provider>
}

export default StoreProvider
