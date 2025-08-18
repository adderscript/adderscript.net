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
                    src="/games/pixels/index.html" 
                    allow="fullscreen"
                    width={800}
                    height={720}
                    title="pointNull"
                />
            
                <div className={style.controls}>
                    <div className={style.objective}>
                        <h1>Objective</h1>
                        <p className={style.objectiveText}>
                            Kill as many of the red guys as you possible can without dying.
                        </p>
                    </div>

                    <h1>Controls</h1>
                    <div className={style.controlItem}>
                        <div className={style.key}>ARROW KEYS</div>
                        <div className={style.description}>move</div>
                    </div>
                    <div className={style.controlItem}>
                        <div className={style.key}>X</div>
                        <div className={style.description}>shoot</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;
