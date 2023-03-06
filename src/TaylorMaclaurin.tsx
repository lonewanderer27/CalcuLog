import { markEnums, InputType } from "./enums";
import { TMValueProps } from "./ValueProps";
import { useState } from "react";
import Tex2SVG from "react-hook-mathjax";
import { getErrorFromHTML } from "./App";

export default function TaylorMaclaurin(props: {
	mark: markEnums;
	setMark: React.Dispatch<React.SetStateAction<markEnums>>;
	back: () => void;
	function?: string;
	point?: number;
	nthDegree?: number;
	setTMValues: React.Dispatch<React.SetStateAction<TMValueProps>>;
	remove: (choice: number) => void;
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
	currentInputRef: React.MutableRefObject<null>;
	focusedInput: InputType;
	setFocusedInput: React.Dispatch<React.SetStateAction<InputType>>
}) {
	const [TMsuccess, setTMsucess] = useState<boolean>(false);
	const [TMerror, setTMerror] = useState<HTMLElement | undefined>();

	const solve = () => {
		props.setMark(markEnums.taylorMaclaurin);
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		console.log(event);
		props.setTMValues((prevVal) => {
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
		<div className="taylorMaclaurin">
			<span className="title">Taylor Maclaurin</span>
			<div className="body">
				<div className="inputGroup">
					<label htmlFor="function">Enter a function</label>
					<input
						type="text"
						name="function"
						id="function"
						value={props.function}
						onChange={handleChange}
						onFocus={(e) => {
							props.setExpand(true);
							props.setFocusedInput(InputType.function)
						}}
					/>
					<div className="Tex2SVGContainer"
							style={{display: TMsuccess && props.function ? "block" : "none"}}
						>
							<Tex2SVG 
								class="Tex2SVG"
								display="inline" 
								latex={props.function || ""}
								onSuccess={() => setTMsucess(true)}
								onError={(html) => {
									setTMsucess(false);
									setTMerror(getErrorFromHTML(html))
								}}
							/>
						</div>
				</div>

				<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
					<div className="inputGroup">
						<label htmlFor="point">Enter a point</label>
						<input
							type="text"
							name="point"
							id="point"
							value={props.point}
							onChange={handleChange}
						/>
					</div>
					<div className="inputGroup">
						<label htmlFor="">(For Maclaurin, set point to 0.)</label>
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
					<div className="inputGroup">
						<label htmlFor="nthDegree">nthDegree</label>
						<input
							type="number"
							name="nthDegree"
							id="nthDegree"
							value={props.nthDegree}
							onChange={handleChange}
						/>
					</div>
					<div className="inputGroup"></div>
				</div>
			</div>
			<div className="footer">
				<button className="button submitBtn" onClick={() => solve()}>
					Submit
				</button>
				{props.mark === markEnums.idle && (
					<button className="button removeBtn" onClick={()=>props.remove(2)}>Remove</button>
				)}
				{props.mark === markEnums.taylorMaclaurin && (
					<button className="button backBtn" onClick={props.back}>
						Back
					</button>
				)}
			</div>
		</div>
	);
}
