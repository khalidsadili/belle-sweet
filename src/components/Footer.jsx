import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container container">
                <div className="footer-content">
                    <h3>Belle Sweets</h3>
                    <p>أشهى الحلويات تُصنع بكل حب.</p>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Belle Sweets. جميع الحقوق محفوظة.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
