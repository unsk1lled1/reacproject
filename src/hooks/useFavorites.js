import { useLocalStorage } from './useLocalStorage';

export function useFavorites() {
    const [favorites, setFavorites] = useLocalStorage('fp_favorites', []);

    const addFavorite = (id) => {
        setFavorites((prev) => [...prev, id]);
    };

    const removeFavorite = (id) => {
        setFavorites((prev) => prev.filter((fId) => fId !== id));
    };

    const toggleFavorite = (id) => {
        if (favorites.includes(id)) {
            removeFavorite(id);
        } else {
            addFavorite(id);
        }
    };

    const isFavorite = (id) => favorites.includes(id);

    return { favorites, addFavorite, removeFavorite, toggleFavorite, isFavorite };
}
