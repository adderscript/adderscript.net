import React from "react";
import style from "./gameCard.module.css";

function GameCard(props) {
    return (
        <button className={style.gameCard}>
            <img src={props.thumbnail} className={style.thumbnail}/>
            <h2>{props.title}</h2>
        </button>
    )
}

export default GameCard;