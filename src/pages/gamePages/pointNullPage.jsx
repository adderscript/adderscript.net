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
            <h1>pointNull</h1>

            <div className={style.gameFrame}>
                <iframe 
                    ref={iframeRef}
                    src="/games/pointNull/index.html" 
                    allow="fullscreen"
                    width={1280}
                    height={720}
                    title="pointNull"
                />
                <FullscreenButton onClick={makeFullscreen} />
            
                <div className={style.controls}>
                    <div className={style.objective}>
                        <h1>Objective</h1>
                        <p className={style.objectiveText}>
                            Kill all the waves of enemies and try beat level 2 to win.
                        </p>
                    </div>

                    <h1>Controls</h1>
                    <div className={style.controlItem}>
                        <div className={style.key}>A</div>
                        <div className={style.description}>move left</div>
                    </div>
                    <div className={style.controlItem}>
                        <div className={style.key}>D</div>
                        <div className={style.description}>move right</div>
                    </div>
                    <div className={style.controlItem}>
                        <div className={style.key}>SPACE</div>
                        <div className={style.description}>jump</div>
                    </div>
                    <div className={style.controlItem}>
                        <div className={style.key}>LEFT CLICK</div>
                        <div className={style.description}>shoot</div>
                    </div>
                    <div className={style.controlItem}>
                        <div className={style.key}>1-3 KEYS</div>
                        <div className={style.description}>change weapon</div>
                    </div>
                    <div className={style.controlItem}>
                        <div className={style.key}>ESC</div>
                        <div className={style.description}>leave game</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GamePage;
