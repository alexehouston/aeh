import './Contact.css';

export default function Contact() {
    return (
        <div className="contact">
            <div className="contact-info">
                <div>
                    <h2 className="contact-header">Hair Bookings</h2>
                    <a className="email-link" href="mailto:info@alexehouston.com">info@alexehouston.com</a>
                </div>
                <div>
                    <h2 className="contact-header">Other Inquiries</h2>
                    <a className="email-link" href="mailto:alex@alexehouston.com">alex@alexehouston.com</a>
                </div>
            </div>
            <div className="follow-me">
                <a href="https://www.linkedin.com/in/alexehouston/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin"></i></a>
                <a href="https://github.com/alexehouston" target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/alexehouston" target="_blank" rel="noreferrer"><i class="fa-brands fa-twitter"></i></a>
            </div>
            <div className="ig">
                <a href="https://www.instagram.com/alexehouston/" target="_blank" rel="noreferrer">Art Instagram</a> | <a href="https://www.instagram.com/byalexehouston/" target="_blank" rel="noreferrer">Hair Instagram</a>
            </div>
        </div>
    );
}