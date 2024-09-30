import React from 'react';
import '../styles/tokenomics.css';
import graficoPizza from '../images/graficoPizza.png'  // Adjust the CSS path as needed

function TokenomicsPage() {
    return (
        <div className="box">
            <h1>TOKENOMICS</h1>
            <div className="pieChart">
                <img src={graficoPizza} alt="Pie Chart" />
                <ul className="tokenomicsList">
                    <li>60% Presale</li>
                    <li>20% Liquidity</li>
                    <li>6% Community Fund/Development and Partnerships</li>
                    <li>5% Rewards for Holders</li>
                    <li>4% Developers</li>
                    <li>3% Emergency Reserve</li>
                    <li>2% Rewards Program/Airdrops</li>
                </ul>
            </div>
        </div>
    );
}

export default TokenomicsPage;
