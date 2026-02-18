import './SearchBar.css';

export default function SearchBar({ value, onChange, placeholder = 'Поиск...' }) {
    return (
        <div className="search-bar">
            <span className="search-bar__icon">🔍</span>
            <input
                type="text"
                className="search-bar__input"
                value={value}
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
            />
            {value && (
                <button className="search-bar__clear" onClick={() => onChange('')} aria-label="Очистить">
                    ✕
                </button>
            )}
        </div>
    );
}
