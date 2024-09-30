import React from 'react';
import '../styles/history.css';
import bullShuffleDance from '../images/bullShuffleDance.gif'  // Adjust the CSS path as needed

function HistoryPage() {
    return (
        <div className="content-wrapper">
            <h1>OUR HISTORY</h1>
            <p>Putz and PR, two friends in the Base Network, embarked on a quest for a legitimate MEME coin. Frustrated by scams and false promises, they decided to create their own token, $BULLS, driven by the desire for a truly authentic option.</p>
            <p>In just three days, they worked tirelessly to bring $BULLS to life. A user-friendly website was set up, and an active Discord community was formed. Their mission was to make $BULLS a symbol of trust and transparency in the MEME coin market.</p>
            <p>The Fairlaunch of $BULLS wasn't just an event; it was the start of a movement. Alongside the launch, they introduced 'X' for updates and engagement, ensuring every member was part of the journey.</p>
            <img src={bullShuffleDance} alt="bullDanceGif" />
        </div>
    );
}

export default HistoryPage;
