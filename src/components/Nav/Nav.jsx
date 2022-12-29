import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    return (
        <>
            <ul className="nav">
                <li onClick={() => setCurrentPage('home')}><span className="material-symbols-outlined size-40">home</span></li>
                <li className="dropdown">
                    <span className="material-symbols-outlined size-40">work</span>
                    <ul className="dropdown-content">
                    <li><a href="https://kpxaeh.com" target="_blank" rel="noreferrer">Hair Bookings</a></li>
                        <li onClick={() => setCurrentPage('art')}>Artwork</li>
                        <li><a href="https://alexehouston.github.io/portfolio/" target="_blank" rel="noreferrer">Dev Portfolio</a></li>
                    </ul>
                </li>
                <li onClick={() => setCurrentPage('contact')}><span className="material-symbols-outlined size-40">mail</span></li>
            </ul>
        </>
    );
}