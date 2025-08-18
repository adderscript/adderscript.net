import React from "react";
import {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import style from './App.module.css';

// pages
import HomePage from "./pages/homePage";
import PointNullPage from "./pages/gamePages/pointNullPage";
import PolygonClickerPage from "./pages/gamePages/polygonClickerPage";
import FlappySquarePage from "./pages/gamePages/flappySquarePage";
import PixelsPage from "./pages/gamePages/pixelsPage";
import HamsterHorsepowerPage from "./pages/gamePages/hamsterHorsepowerPage.jsx";

// components
import GameGrid from "./components/gameGrid";

function App() {
    const baseWidth = 1920;
    const baseHeight = 1080;

    const [scale, setScale] = useState(1);

    useEffect(() => {
        function handleResize() {
            const scaleX = window.innerWidth / baseWidth;
            const scaleY = window.innerHeight / baseHeight;
            // Use the smaller scale to maintain aspect ratio
            setScale(Math.min(scaleX, scaleY));
        }

        window.addEventListener('resize', handleResize);
        handleResize(); // initial call
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className={style.appContainer}>
            <div
                className={style.scaledContent}
                style={{
                    width: `${baseWidth}px`,
                    height: `${baseHeight}px`,
                    transform: `scale(${scale})`,
                    transformOrigin: 'center',
                }}
            >
                <Router>
                    <nav>
                        <Link to="/" />
                    </nav>

                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/pointnull" element={<PointNullPage />} />
                        <Route path="/polygonclicker" element={<PolygonClickerPage />} />
                        <Route path="/flappysquare" element={<FlappySquarePage />} />
                        <Route path="/pixels" element={<PixelsPage />} />
                        <Route path="/hamsterhorsepower" element={<HamsterHorsepowerPage />} />
                    </Routes>
                </Router>
            </div>
        </div>
    );
}

export default App;
