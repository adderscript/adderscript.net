import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./gameGrid.module.css";

// components
import GameCard from "./gameCard";

import items from "src/games.json";

function GameGrid() {
	return (
		<div className={style.gridContainer}>
			{items.map((item, index) => (
				<div key={index}>
					<GameCard title={item.title} thumbnail={item.thumbnail} page={item.page} />
				</div>
			))}
		</div>
	);
}

export default GameGrid;
