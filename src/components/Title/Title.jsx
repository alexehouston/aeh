import './Title.css';

export default function Title() {
    return (
        <div className="title">
            <div className="glitch-container">
                <h1 className="glitch"><span className="alex"></span>Alex</h1>
                <h1 className="glitch"><span className="alex"></span>Alex</h1>
                <h1 className="glitch"><span className="alex"></span>Alex</h1>
            </div>
            <div className="glitch-container">
                <h1 className="glitch"><span className="houston">Houston</span></h1>
                <h1 className="glitch"><span className="houston">Houston</span></h1>
                <h1 className="glitch"><span className="houston">Houston</span></h1>
            </div>
            <div className="glitch-container">
                <h1 className="glitch"><span className="developer">Developer | Stylist | Artist</span></h1>
                <h1 className="glitch"><span className="developer">Developer | Stylist | Artist</span></h1>
                <h1 className="glitch"><span className="developer">Developer | Stylist | Artist</span></h1>
            </div>
        </div>
    )
}