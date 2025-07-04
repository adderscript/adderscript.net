import React from "react";
import style from './App.module.css';

// components
import GameGrid from "./components/gameGrid";

function App() {
    return (
        <div>
            <div className={style.header}>
                <h1>AdderScript.net</h1>
                <p>Very cool games made by me.</p>
            </div>
            <GameGrid />
            <div className={style.footer}>
                <p>2025 Adderscript.net. All games created by me, Alasdair Gray</p>
                <div className={style.socialButtons}>
                    <a href="https://buymeacoffee.com/adderscript" className={style.socialButton}>
                        email
                    </a>
                    <a href="mailto:alasdair@adderscript.net" className={style.socialButton}>
                        buy me a coffee
                    </a>
                    <a href="https://adderscript.itch.io" className={style.socialButton}>
                        itch.io
                    </a>
                </div>
            </div>
        </div>
    );
}

export default App;
