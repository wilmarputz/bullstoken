import React from 'react';
import '../styles/footerHomePage.css';  // Adjust the path as needed

function Footer() {
    return (
        <footer>
            <div className="footerPhrase">
                <p>Many are scams, but only one is a meme</p>
            </div>
            <div className="socialMediaIcons">
                <a href="https://twitter.com/BULLS__BASE" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-twitter"></i> TWITTER
                </a>
                <a href="https://discord.gg/KE4zknDE" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-discord"></i> DISCORD
                </a>
            </div>
        </footer>
    );
}

export default Footer;
