import { createContext } from "react";


export const DisctionariesContext = createContext({
    language: 'vi',
    setLanguage: (language) => {}
})

const Store = createContext({
    theme: 'light',
    setTheme:(theme) => {}
});

export default Store;