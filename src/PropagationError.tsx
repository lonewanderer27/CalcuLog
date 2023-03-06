import { InputType, markEnums } from "./enums";
import { PEValueProps } from "./ValueProps";
import { useState } from "react";
import Tex2SVG from "react-hook-mathjax";
import { getErrorFromHTML } from "./App";

export default function PropagationError(props: {
	mark: markEnums;
	setMark: React.Dispatch<React.SetStateAction<markEnums>>;
	back: () => void;
	trueValue: string;
	approxValue: number;
	rounding: boolean;
	chopping: boolean;
	numDigits: number;
	setPEValues: React.Dispatch<React.SetStateAction<PEValueProps>>;
	remove: (choice: number) => void;
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
	currentInputRef: React.MutableRefObject<null>;
	focusedInput: InputType;
	setFocusedInput: React.Dispatch<React.SetStateAction<InputType>>
}) {
	const [PEsuccess, setPEsucess] = useState<boolean>(false);
	const [PEerror, setPEerror] = useState<HTMLElement | undefined>();
	const [answerState, setAnswerState] = useState()

	const solve = () => {
		props.setMark(markEnums.propagationError);
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		console.log(event);
		props.setPEValues((prevVal) => {
			console.log("prevVal", prevVal);
			if (typeof event.target.value === "number") {
				return {
					...prevVal,
					[event.target.name]: Number(event.target.value),
				};
			} else {
				return {
					...prevVal,
					[event.target.name]: event.target.value,
				};
			}
		});
	};

	return (
		<div className="propagationError">
			<span className="title">Propagation Error</span>
			<div className="body">
				<div className="inputGroup">
					<label htmlFor="trueValue">True Value</label>
						<input
							type="text"
							name="trueValue"
							id="trueValue"
							value={props.trueValue}
							onChange={handleChange}
							onFocus={(e) => {
								props.setExpand(true);
								props.setFocusedInput(InputType.trueValue)
							}}
						/>
						<div className="Tex2SVGContainer"
							style={{display: PEsuccess && props.trueValue ? "block" : "none"}}
						>
							<Tex2SVG 
								class="Tex2SVG"
								display="inline" 
								latex={props.trueValue || ""}
								onSuccess={() => setPEsucess(true)}
								onError={(html) => {
									setPEsucess(false);
									setPEerror(getErrorFromHTML(html))
								}}
							/>
						</div>
				</div>

				<div className="inputGroup">
					<label htmlFor="approxValue">Approximate Value</label>
					<input
						type="text"
						name="approxValue"
						id="approxValue"
						value={props.approxValue}
						onChange={handleChange}
						onFocus={(e) => {
							props.setExpand(true);
							props.setFocusedInput(InputType.approxValue)
						}}
					/>
				</div>

				<div
					style={{
						display: "flex",
						flexDirection: "row",
						gap: "10px",
					}}
				>
					<div className="inputGroup">
						<label htmlFor="roundingchopping">Rounding/Chopping</label>
						<select
							name="roundingchopping"
							id="roundingchopping"
							onChange={handleChange}
						>
							<option value="ROUNDING">Rounding</option>
							<option value="CHOPPING">Chopping</option>
						</select>
					</div>
					<div className="inputGroup">
						<label htmlFor="numDigits">Number of Digits</label>
						<input
							type="number"
							name="numDigits"
							id="numDigits"
							value={props.numDigits}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
			<div className="footer">
				<button className="button submitBtn" onClick={() => solve()}>
					Submit
				</button>
				{props.mark === markEnums.idle && (
					<button className="button removeBtn" onClick={()=>props.remove(1)}>Remove</button>
				)}
				{props.mark === markEnums.propagationError && (
					<button className="button backBtn" onClick={props.back}>
						Back
					</button>
				)}
			</div>
		</div>
	);
}
