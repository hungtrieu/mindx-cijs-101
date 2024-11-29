import React from 'react';
import Disctionaries from './dictionaries';
import Store, {DisctionariesContext} from './context';
import { useContext } from 'react';

const Footer = () => {
    const store = useContext(Store);
    const dictionary = useContext(DisctionariesContext);

    const onSelectTheme = (event) => {
        store.setTheme(event.target.value);
    }

  return (
    <div>
      <h2>{Disctionaries[dictionary.language]['a2']} {store.theme}</h2>
      <select value={store.theme} onChange={onSelectTheme} >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  )
}

export default Footer
