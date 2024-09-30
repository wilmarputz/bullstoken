import React from 'react';
import '../styles/roadmap.css';  // Adjust the CSS path as needed

function RoadmapPage() {
    return (
        <div id="timelineCarousel" className="carousel slide carousel-fade" data-ride="carousel" data-interval="10000">
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <div className="container">
                        <div className="containerContent">
                            <h2>Phase 1: Pre-Sale and Preparation</h2>
                            <p><strong>Now - Q2 2024</strong></p>
                            <ul>
                                <li>🎉 Commencement of Pre-Sale and Marketing Campaigns.</li>
                                <li>🖥️ Development and launch of a more robust and interactive website.</li>
                                <li>🗣️ Implementation of community feedback mechanisms.</li>
                            </ul>
                        </div>

                            
                    </div>
                </div>
                {/* Additional carousel items for other phases */}
            </div>
            <a className="carousel-control-prev" href="#timelineCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#timelineCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
}

export default RoadmapPage;
