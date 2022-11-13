import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeProvider";

function FunctionalContextComponent() {
	const darkTheme = useTheme();
	const toggleTheme = useThemeUpdate();
	const themeStyles = {
		backgroundColor: darkTheme ? "#333" : "#ccc",
		color: darkTheme ? "#ccc" : "#333",
		padding: "2rem",
		margin: "2rem",
	};

	return (
		<>
			<button type="button" onClick={toggleTheme}>
				Toggle theme
			</button>
			<div style={themeStyles}>FunctionalContextComponent</div>
		</>
	);
}

export default FunctionalContextComponent;
