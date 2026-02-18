import { Link } from 'react-router-dom';
import './NotFoundPage.css';

export default function NotFoundPage() {
    return (
        <div className="not-found">
            <div className="not-found__content">
                <h1 className="not-found__code">404</h1>
                <h2 className="not-found__title">Страница не найдена</h2>
                <p className="not-found__desc">К сожалению, запрошенная страница не существует или была перемещена.</p>
                <Link to="/" className="not-found__btn">← Вернуться на главную</Link>
            </div>
        </div>
    );
}
