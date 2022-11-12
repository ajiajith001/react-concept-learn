import React, { useState } from "react";
import List from "./List";

function UseCallBackExample() {
	const [number, setNumber] = useState(1);
	const [dark, setDark] = useState(false);

	const getItems = () => {
		return [number, number + 1, number + 2];
	};

	const theme = {
		backgroundColor: dark ? "#333" : "#ccc",
		color: dark ? "#ccc" : "#333",
	};

	return (
		<div style={theme}>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(+e.target.value)}
			/>
			<button
				type="button"
				onClick={() => setDark((preDark) => !preDark)}
			>
				Toggle Theme
			</button>
			<List getItems={getItems} />
		</div>
	);
}

export default UseCallBackExample;
