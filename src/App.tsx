import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import PropagationError from "./PropagationError";
import TaylorMaclaurin from "./TaylorMaclaurin";
import { useState } from "react";
import { InputType, markEnums, roundingchopping } from "./enums";
import PESolution from "./components/Solutions/PESolution";
import TMSolution from "./components/Solutions/TMSolution";
import { PEValueProps, TMValueProps } from "./ValueProps";
import { useRef } from "react";

export const getErrorFromHTML = (html: HTMLElement) =>
  html.children[1].firstChild.firstChild.attributes["data-mjx-error"].value;

function App() {
	const [mark, setMark] = useState<markEnums>(() => markEnums.idle);
	const [focusedInput, setFocusedInput] = useState<InputType>(InputType.none);
	const [PEvalues, setPEValues] = useState<PEValueProps>(() => ({
		trueValue: "",
		approxValue: 0,
		roundingchopping: roundingchopping.rounding,
		numDigits: 0,
	}));
	const [TMvalues, setTMValues] = useState<TMValueProps>(() => ({
		function: "",
		point: 0,
		nthDegree: 0,
	}));
	const [TMerror, setTMerror] = useState<HTMLElement | undefined>();

	const currentInputRef = useRef(null);
	const [expand, setExpand] = useState(false);
	const toggleExpand = () => setExpand((prev) => !prev);

	const back = () => setMark(markEnums.idle);
	const remove = (choice: number) => {
		switch(choice) {
			case 1: setPEValues({
				trueValue: "",
				approxValue: 0,
				roundingchopping: roundingchopping.rounding,
				numDigits: 0,
			}); break;
			case 2: setTMValues({
				function: "",
				point: 0,
				nthDegree: 0,
			}); break;
		}
	}

	console.log("PEvalues:", PEvalues);

	return (
		<div className="App">
			<Header />

			{mark !== markEnums.taylorMaclaurin && (
				<PropagationError
					mark={mark}
					setMark={setMark}
					back={back}
					setPEValues={setPEValues}
					remove={remove}
					expand={expand}
					setExpand={setExpand}
					toggleExpand={toggleExpand}
					currentInputRef={currentInputRef}
					focusedInput={focusedInput}
					setFocusedInput={setFocusedInput}
					{...PEvalues}
				/>
			)}
			{mark === markEnums.propagationError && <PESolution />}

			{mark !== markEnums.propagationError && (
				<TaylorMaclaurin
					mark={mark}
					setMark={setMark}
					back={back}
					setTMValues={setTMValues}
					remove={remove}
					{...TMvalues}
				/>
			)}
			{mark === markEnums.taylorMaclaurin && <TMSolution />}

			<Keyboard 
				expand={expand}
				setExpand={setExpand}
				toggleExpand={toggleExpand}
			/>
		</div>
	);
}

export default App;
