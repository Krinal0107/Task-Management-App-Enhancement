import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            &copy; {currentYear} | 
            <a href="https://github.com/Krinal0107/Task-Management-App-Enhancement" target="_blank" rel="noopener noreferrer">
                View on GitHub
            </a>
        </footer>
    );
}

export default Footer;