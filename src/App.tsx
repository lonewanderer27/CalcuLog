import "./App.scss";
import Header from "./Header";
import Keyboard from "./Keyboard";
import PropagationError from "./PropagationError";
import TaylorMaclaurin from "./TaylorMaclaurin";
import { useState } from "react";
import { markEnums, roundingchopping } from "./enums";
import PESolution from "./Solutions/PESolution";
import TMSolution from "./Solutions/TMSolution";
import { PEValueProps, TMValueProps } from "./ValueProps";

function App() {
	const [mark, setMark] = useState<markEnums>(() => markEnums.idle);
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
	const back = () => setMark(markEnums.idle);
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
					{...TMvalues}
				/>
			)}
			{mark === markEnums.taylorMaclaurin && <TMSolution />}

			<Keyboard />
		</div>
	);
}

export default App;
