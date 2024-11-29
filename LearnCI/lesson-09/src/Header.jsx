import React from 'react';
import Disctionaries from './dictionaries';
import Store, {DisctionariesContext} from './context';
import { useContext } from 'react';

const Header = () => {
    const store = useContext(Store);
    const dictionary = useContext(DisctionariesContext);

    const onSelectLanguage = (event) => {
        dictionary.setLanguage(event.target.value);
    }
  return (
    <div>
      <h1>{Disctionaries[dictionary.language]['a1']} {store.theme}</h1>
      <select value={dictionary.language} onChange={onSelectLanguage} >
        <option value="vi">Tiếng Việt</option>
        <option value="en">English</option>
      </select>
    </div>
  )
}

export default Header
