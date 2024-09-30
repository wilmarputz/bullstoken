import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '.styles/common.css';
import HomePage from './components/HomePage';
import RoadmapPage from './components/RoadmapPage';
import TokenomicsPage from './components/TokenomicsPage';
import HistoryPage from './components/HistoryPage';
import Header from './components/Header';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} exact />
          <Route path="/roadmap" element={<RoadmapPage />} />
          <Route path="/tokenomics" element={<TokenomicsPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;