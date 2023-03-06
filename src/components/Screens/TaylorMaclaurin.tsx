import { markEnums, InputType, buttonType } from "../../enums";
import { TMprops } from "../../types";
import { useState } from "react";
import Tex2SVG from "react-hook-mathjax";
import Button from "../../components/Button";

export default function TaylorMaclaurin(props: {
	mark: markEnums;
	setMark: React.Dispatch<React.SetStateAction<markEnums>>;
	back: () => void;
	function?: string;
	point?: number;
	nthDegree?: number;
	setTMValues: React.Dispatch<React.SetStateAction<TMprops>>;
	remove: (choice: number) => void;
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
	currentInputRef: React.MutableRefObject<null>;
	focusedInput: InputType;
	setFocusedInput: React.Dispatch<React.SetStateAction<InputType>>
}) {
	const [FSuccess, setFSuccess] = useState<boolean>(false);

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
						ref={props.focusedInput === InputType.function ? props.currentInputRef : undefined}
					/>
					<div className="Tex2SVGContainer"
							style={{display: FSuccess && props.function ? "block" : "none"}}
						>
							<Tex2SVG 
								class="Tex2SVG"
								display="inline" 
								latex={props.function || ""}
								onSuccess={() => setFSuccess(true)}
								onError={() => {setFSuccess(false)}}
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
				<Button buttonType={buttonType.submitBtn} onClick={() => solve()} />
				{props.mark === markEnums.idle && <Button buttonType={buttonType.removeBtn} onClick={() => props.remove(2)} /> }
				{props.mark === markEnums.taylorMaclaurin && <Button buttonType={buttonType.backBtn} onClick={() => props.back} /> }
			</div>
		</div>
	);
}
