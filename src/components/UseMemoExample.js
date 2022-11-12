import React, { useState, useMemo, useEffect } from "react";

const slowFunction = (num) => {
	console.log("calling slow function");
	for (let i = 0; i <= 4000000000; i++) {}
	return num * 2;
};

function UseMemoExample() {
	const [number, setNumber] = useState(0);
	const [dark, setDark] = useState(false);

	const doubleNumber = useMemo(() => {
		return slowFunction(number);
	}, [number]);

	// const themeStyle = {
	// 	backgroundColor: dark ? "black" : "white",
	// 	color: dark ? "white" : "black",
	// };

	const themeStyle = useMemo(() => {
		return {
			backgroundColor: dark ? "black" : "white",
			color: dark ? "white" : "black",
		};
	}, [dark]);

	useEffect(() => {
		console.log("themeStyle changed");
	}, [themeStyle]);

	return (
		<div>
			<input
				type="number"
				value={number}
				onChange={(e) => setNumber(parseInt(e.target.value))}
			/>
			<button
				type="button"
				onClick={() => setDark((preDark) => !preDark)}
			>
				Change theme
			</button>
			<div style={themeStyle}>{doubleNumber}</div>
		</div>
	);
}

export default UseMemoExample;
