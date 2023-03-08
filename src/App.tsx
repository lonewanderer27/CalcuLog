import "./App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { QueryClient, QueryClientProvider } from "react-query";
import Header from "./components/Header";
import Keyboard from "./components/Keyboard";
import PropagationError from "./components/Screens/PropagationError";
import TaylorMaclaurin from "./components/Screens/TaylorMaclaurin";
import { useState } from "react";
import { InputType, markEnums, roundingchopping } from "./enums";
import PEAnswer from "./components/Answers/PEAnswer";
import TMAnswer from "./components/Answers/TMAnswer";
import { PEprops, TMprops } from "./types";
import { useRef } from "react";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: { cacheTime: 0, retry: false, refetchOnWindowFocus: false}
	}
});

function App() {
	const [mark, setMark] = useState<markEnums>(() => markEnums.idle);
	const [PEvalues, setPEValues] = useState<PEprops>(() => ({
		trueValue: "",
		approxValue: "",
		roundingchopping: roundingchopping.rounding,
		numDigits: 0,
	}));
	const [TMvalues, setTMValues] = useState<TMprops>(() => ({
		function: "ln(x+1)",
		point: 0,
		nthDegree: 0,
		xvar: 0,
		roundingchopping: roundingchopping.rounding,
		numDigits: 0,
	}));

	const insertToInput = (input: string) => {
		currentInputRef.current.focus();
		switch(focusedInput){
			case InputType.trueValue: {
				setPEValues((prev) => {
					return {
						...prev,
						trueValue: `${PEvalues.trueValue}${input}`
					}
				})
			}; break;
			case InputType.approxValue: {
				setPEValues((prev) => {
					return {
						...prev,
						approxValue: `${PEvalues.approxValue}${input}`
					}
				})
			}; break;
			case InputType.function: {
				setTMValues((prev) => {
					return {
						...prev,
						function: `${TMvalues.function}${input}`
					}
				})
			}; break;
		}
	}

	const [focusedInput, setFocusedInput] = useState<InputType>(InputType.none);
	const currentInputRef = useRef(null);
	const [expand, setExpand] = useState(false);
	const toggleExpand = () => setExpand((prev) => !prev);

	const back = () => setMark(markEnums.idle);
	const remove = (choice: number) => {
		switch(choice) {
			case 1: setPEValues({
				trueValue: "",
				approxValue: "",
				roundingchopping: roundingchopping.rounding,
				numDigits: 0,
			}); break;
			case 2: setTMValues({
				function: "",
				point: 0,
				nthDegree: 0,
				xvar:0,
				numDigits: 0,
			}); break;
		}
	}

	console.log("PEvalues:", PEvalues);
	console.log("TMvalues:", TMvalues);

	return (
		<QueryClientProvider client={queryClient}>
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
					{...PEvalues}				/>
			)}
			{mark === markEnums.propagationError && <PEAnswer PEvalues={PEvalues} />}

			{mark !== markEnums.propagationError && (
				<TaylorMaclaurin
					mark={mark}
					setMark={setMark}
					back={back}
					setTMValues={setTMValues}
					remove={remove}
					expand={expand}
					setExpand={setExpand}
					toggleExpand={toggleExpand}
					currentInputRef={currentInputRef}
					focusedInput={focusedInput}
					setFocusedInput={setFocusedInput}
					{...TMvalues}				/>
			)}
			{mark === markEnums.taylorMaclaurin && <TMAnswer TMvalues={TMvalues} />}

			<Keyboard 
				focusedInput={focusedInput}
				expand={expand}
				setExpand={setExpand}
				toggleExpand={toggleExpand}
				inserToInput={insertToInput}
			/>
		</div>
		</QueryClientProvider>
	);
}

export default App;
