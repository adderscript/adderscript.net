import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import style from './App.module.css';

// pages
import HomePage from "./pages/homePage";
import PointNullPage from "./pages/gamePages/pointNullPage";
import PolygonClickerPage from "./pages/gamePages/polygonClickerPage";
import FlappySquarePage from "./pages/gamePages/flappySquarePage";
import PixelsPage from "./pages/gamePages/pixelsPage";

// components
import GameGrid from "./components/gameGrid";

function App() {
    return (
        <Router>
            <nav>
                <link to="/" />
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/pointnull" element={<PointNullPage />} />
                <Route path="/polygonclicker" element={<PolygonClickerPage />} />
                <Route path="/flappysquare" element={<FlappySquarePage />} />
                <Route path="/pixels" element={<PixelsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
