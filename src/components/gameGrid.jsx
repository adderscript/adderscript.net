import React from "react";
import style from "./gameGrid.module.css";

// components
import GameCard from "./gameCard";

import items from "src/games.json";

function GameGrid() {
	return (
		<div className={style.gridContainer}>
			{items.map((item, index) => (
				<div key={index}>
					<GameCard title={item.title} thumbnail={item.thumbnail} />
				</div>
			))}
		</div>
	);
}

export default GameGrid;
