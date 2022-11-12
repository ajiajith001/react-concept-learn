import { useEffect } from "react";
import { useState, useRef } from "react";
import "./App.css";

function App() {
	/**
	 * 1. DOM reference
	 * 2. useRef for storing the previous state
	 * 3. hold mutable value prevent re-render of component.
	 */

	const [name, setName] = useState("");
	const [counter, setCounter] = useState(0);
	const inputRef = useRef("");
	const previousCounterRef = useRef(0);

	useEffect(() => {
		previousCounterRef.current = counter;
	}, [counter]);

	const resetInput = () => {
		setName("");
		inputRef.current.focus();
	};
	return (
		<div className="App">
			<div>
				<input
					ref={inputRef}
					type="text"
					name="name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<button onClick={resetInput}>Reset</button>
			</div>
			<div>My name is {name}</div>
			<div>
				<h1>Random counter {counter}</h1>
				<h2>Previous counter {previousCounterRef.current}</h2>
				<button
					onClick={(e) => {
						setCounter(Math.ceil(Math.random() * 100));
					}}
				>
					Generate number
				</button>
			</div>
		</div>
	);
}

export default App;
