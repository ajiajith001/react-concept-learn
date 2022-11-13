import React, { useState } from "react";
import ClassContextComponent from "./ClassContextComponent";
import FunctionalContextComponent from "./FunctionalContextComponent";
import { ThemeProvider } from "./ThemeProvider";

function ContextAPIExample() {
	return (
		<>
			<ThemeProvider>
				<FunctionalContextComponent />
			</ThemeProvider>
		</>
	);
}

export default ContextAPIExample;
