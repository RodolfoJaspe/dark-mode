import { useLocalStorage } from './useLocalStorage'
export const useDarkMode = () => {
    const [storedValue, setValue] = useLocalStorage()

}