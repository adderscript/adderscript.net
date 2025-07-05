import React from "react";
import {Link, useNavigate} from "react-router-dom"
import style from "./gameCard.module.css";

function GameCard(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.page);
    }

    return (
        <button onClick={handleClick} className={style.gameCard}>
            <img src={props.thumbnail} className={style.thumbnail}/>
            <h2>{props.title}</h2>
        </button>
    )
}

export default GameCard;