import { useState } from "react";
import "./App.css";

function App() {
	/**
	 * 1. DOM reference
	 * 2. useRef for storing the previous state
	 * 3. hold mutable value prevent re-render of component.
	 */

	const [name, setName] = useState("");
	const resetInput = () => {
		setName("");
	};
	return (
		<div className="App">
			<div>
				<input
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={resetInput}>Reset</button>
			</div>
			<div>My name is {name}</div>
		</div>
	);
}

export default App;
