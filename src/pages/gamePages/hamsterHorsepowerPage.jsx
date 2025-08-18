import React, {useRef} from "react";
import style from "./gamePage.module.css";

// components
import FullscreenButton from "src/components/fullscreenButton";

function GamePage() {
    const iframeRef = useRef();

    function makeFullscreen() {
        if (iframeRef.current) {
            iframeRef.current.requestFullscreen?.() ||
            iframeRef.current.webkitRequestFullscreen?.() ||
            iframeRef.current.mozRequestFullScreen?.() ||
            iframeRef.current.msRequestFullscreen?.();
        }
    }

    return (
        <div>
            <h1>Polygon Clicker</h1>

            <div className={style.gameFrame}>
                <iframe 
                    ref={iframeRef}
                    src="/games/hamsterHorsepower/index.html" 
                    allow="fullscreen"
                    width={1280}
                    height={720}
                    title="hamsterHorsepower"
                />
                <FullscreenButton onClick={makeFullscreen} />
            
                <div className={style.controls}>
                    <div className={style.objective}>
                        <h1>Objective</h1>
                        <p className={style.objectiveText}>
                            Try and harnes the power of hamsters to generate as much money as physically possible.
                        </p>
                    </div>

                    <h1>Controls</h1>
                    <div className={style.controlItem}>
                        <div className={style.key}>MOUSE</div>
                        <div className={style.description}>everything</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;
