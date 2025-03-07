import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

const useDarkMode = (key, initialValue) => {
    const [darkMode, setDarkMode] = useLocalStorage(key, initialValue)

    useEffect(() => {
        if(darkMode) {
            document.body.classList.add('dark-mode');
        }   else {
            document.body.classList.remove('dark-mode');
        }
    });

    return [darkMode, setDarkMode]
}

export default useDarkMode;