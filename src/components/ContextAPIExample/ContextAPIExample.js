import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionalContextComponent from "./FunctionalContextComponent";

export const ThemeContext = React.createContext();

function ContextAPIExample() {
	const [darkTheme, setDarkTheme] = useState(true);

	const toggleTheme = () => {
		setDarkTheme((prevTheme) => !prevTheme);
	};

	return (
		<>
			<ThemeContext.Provider value={darkTheme}>
				<button type="button" onClick={toggleTheme}>
					Toggle theme
				</button>
				<FunctionalContextComponent />
				<ClassContextComponent />
			</ThemeContext.Provider>
		</>
	);
}

export default ContextAPIExample;
