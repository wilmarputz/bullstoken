import React from 'react';
import '../styles/homePage.css';  // Adjust the path as needed
import bullBanner from '../images/bullBanner.png'


function HomePage() {
    return (
        <main className="heroTitle">
            <section className="hero">
                <h1>
                    <strong>FIRST</strong> <br />
                    <strong>MEMECOIN</strong> <strong>POWERED BY</strong> <br />
                    <strong>A COMMUNITY</strong>
                </h1>
                <h2><strong>$</strong>BULLS cannot be stopped</h2>
                <a href="https://www.dx.app/dxsale/view?address=0x2D85ED4E3E59EE876B8ab4B2e860C9cfE686b5e0&chain=8453"
                   target="_blank"
                   rel="noopener noreferrer">
                    <button className="heroButton">PRESALE</button>
                </a>
            </section>
            <img src={bullBanner} alt="Bulls Banner" />
        </main>
    );
}

export default HomePage;
