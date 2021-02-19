import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage("darkMode");
    return [storedValue, setValue]
}