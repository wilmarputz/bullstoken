import React from 'react';
import '../styles/common.css';
import bullLogo from '../images/bullLogo.png'; 

function Header() {
    return (
        <header style={{ background: 'transparent' }}>
            <div className="logo">
                <a href=""><img src={bullLogo} alt="logoHeader" /></a>
            </div>
            <nav>
                <ul>
                    <li><a href="/roadmap">ROADMAP</a></li>
                    <li><a href="/tokenomics">TOKENOMICS</a></li>
                    <li><a href="https://www.dx.app/dxsale/view?address=0x2D85ED4E3E59EE876B8ab4B2e860C9cfE686b5e0&chain=8453" target="_blank">BUY</a></li>
                    <li><a href="/history">HISTORY</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
