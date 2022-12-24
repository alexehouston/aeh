import './Hair.css';

export default function Hair() {
    return (
        <div className="bookings">
            <div className="book">
                <h1>Book with me</h1>
                <p>For Haircuts + Styling</p>
            </div>
            <div className="cities">
                <div className="ny">
                    <h1>New York</h1>
                    <a href="https://kpxaeh.as.me/ny" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>February 18 + 19</li>
                        <li>May 20 + 21</li>
                        <li>August 19 + 20</li>
                        <li>November 11 + 12</li>
                    </div>
                    <div className="salon">
                        <h6>Maria Bonita Salon</h6>
                        <li>199 Mott St</li>
                        <li>New York, NY 10012</li>
                    </div>
                </div>
                <div className="sf">
                    <h1>San Francisco</h1>
                    <a href="https://kpxaeh.as.me/sf" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>February 18 + 19</li>
                        <li>May 20 + 21</li>
                        <li>August 19 + 20</li>
                        <li>November 11 + 12</li>
                    </div>
                    <div className="salon">
                        <h6>Maria Bonita Salon</h6>
                        <li>435A Duboce Ave</li>
                        <li>San Francisco, CA 94117</li>
                    </div>
                </div>
                <div className="chi">
                    <h1>Chicago</h1>
                    <a href="https://kpxaeh.as.me/chi" target="_blank" rel="noreferrer">Booking Link</a>
                    <div className="dates">
                        <li>February 18 + 19</li>
                        <li>May 20 + 21</li>
                        <li>August 19 + 20</li>
                        <li>November 11 + 12</li>
                    </div>
                    <div className="salon">
                        <h6>Solo Salon</h6>
                        <li>1134 W Washington Blvd</li>
                        <li>Chicago, IL 60607</li>
                    </div>
                </div>
            </div>
            {/* <div className="book">
                <h1>Book with Kristen</h1>
                <p>For Hair Coloring</p>
                <a className="kp" href="">Booking Link</a>
                <div className="kp-links">
                    <a href="https://www.kphaircolor.com/">Website</a>
                    <li>&nbsp;|&nbsp;</li>
                    <a href="https://www.instagram.com/kphaircolor/">IG</a>
                </div>
            </div> */}
        </div>
    );
}