import React from "react";
import style from "./fullscreenButton.module.css";

function FullscreenButton(props) {
    return (
        <button onClick={props.onClick} className={style.fullscreenButton}>Fullscreen</button>
    )
}

export default FullscreenButton;