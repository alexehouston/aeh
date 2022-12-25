import './Nav.css';

export default function Nav({ currentPage, setCurrentPage }) {
    
    function renderHome() {
        setCurrentPage('home');
    }

    function renderArt() {
        setCurrentPage('art');
    }

    function renderContact() {
        setCurrentPage('contact');
    }

    return (
        <>
            <ul className="nav">
                <li onClick={renderHome}>home</li>
                <li className="dropdown">work
                    <ul className="dropdown-content">
                    <li><a href="https://kpxaeh.com" target="_blank" rel="noreferrer">Hair Bookings</a></li>
                        <li onClick={renderArt}>Artwork</li>
                        <li><a href="https://alexehouston.github.io/portfolio/" target="_blank" rel="noreferrer">Dev Portfolio</a></li>
                    </ul>
                </li>
                <li onClick={renderContact}>contact</li>
            </ul>
        </>
    );
}