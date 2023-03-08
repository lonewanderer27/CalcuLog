import { InputType, markEnums } from "../../enums";
import { PEprops } from "../../types";
import { useState } from "react";
import Tex2SVG from "react-hook-mathjax";
import Modal from "react-bootstrap/Modal";
import {Button as BootstrapButton} from "react-bootstrap";

export default function PropagationError(props: {
	mark: markEnums;
	setMark: React.Dispatch<React.SetStateAction<markEnums>>;
	back: () => void;
	trueValue: string;
	approxValue: string;
	numDigits: number;
	setPEValues: React.Dispatch<React.SetStateAction<PEprops>>;
	remove: (choice: number) => void;
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
	currentInputRef: React.RefObject<HTMLInputElement>;
	focusedInput: InputType;
	setFocusedInput: React.Dispatch<React.SetStateAction<InputType>>
}) {
	const [hasError, setHasError] = useState<boolean>(() => true);
	const [TVsuccess, setTVsuccess] = useState<boolean>(() => false);
	const [errorModal, setErrorModal] = useState<boolean>(() => false);

	const solve = () => {
		let validInputs = true;
		if (props.numDigits < 0) {
			validInputs = false;
		} 
		if (props.trueValue.length === 0 || 
				props.trueValue === "" || 
				props.trueValue.includes("x") ||
				props.trueValue.includes("y") || 
				props.trueValue.includes("z")) 
		{
			validInputs = false;
			setTVsuccess(() => false);
		} 

		if (validInputs) {
			props.setMark(markEnums.propagationError);
			setErrorModal(() => false);
		} else {
			setErrorModal(() => true);
		}
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		console.log(event);

		props.setPEValues((prevVal) => {
			console.log("prevVal", prevVal);
			return {
				...prevVal,
				[event.target.name]: event.target.value,
			};
		});
	};

	return (
		<div className="propagationError">
			<Modal show={errorModal} onHide={() => setErrorModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					{/* Make sure the True Value is valid, and the number of decimal places as well. */}
					<ul>
						{props.numDigits < 0 && <li>Number of decimal places has to be 0 or more.</li>}
						{!TVsuccess && <li>True Value has to be a valid number, or if it's an equation, check if you have replaced the placeholder x y z vars.</li>}
					</ul>
				</Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={() => setErrorModal(false)}>
            Close
          </BootstrapButton>
        </Modal.Footer>
      </Modal>
			<span className="title">Propagation Error</span>
			<div className="body">
				<div className="inputGroup">
					<label htmlFor="trueValue">True Value</label>
						{props.mark === markEnums.idle && <input
							type="text"
							name="trueValue"
							id="trueValue"
							value={props.trueValue}
							onChange={handleChange}
							ref={props.focusedInput === InputType.trueValue ? props.currentInputRef : undefined}
							onFocus={(e) => {
								props.setExpand(true);
								props.setFocusedInput(InputType.trueValue)
							}}
						/>}
						<div className="Tex2SVGContainer"
							style={{display: TVsuccess && props.trueValue ? "block" : "none", 
							}}
						>
							<span style={{display: "absolute", top: 0, right: 0, color: "black"}}>Preview: </span>
							<Tex2SVG 
								class="Tex2SVG"
								display="inline" 
								latex={`${props.trueValue}`}
								onSuccess={() => setTVsuccess(true) }
								onError={() => { setTVsuccess(false) }}
							/>
						</div>
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
							disabled={props.mark === markEnums.propagationError ? true : false}
							name="roundingchopping"
							id="roundingchopping"
							onChange={handleChange}
						>
							<option value="ROUNDING">Rounding</option>
							<option value="CHOPPING">Chopping</option>
						</select>
					</div>
					<div className="inputGroup">
						<label htmlFor="numDigits">Number of Decimal Places</label>
						<input
							readOnly={props.mark === markEnums.propagationError ? true : false}
							disabled={props.mark === markEnums.propagationError ? true : false}
							type="number"
							name="numDigits"
							id="numDigits"
							pattern="[0-9]"
							value={props.numDigits}
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
			<div className="footer">
				{props.mark === markEnums.idle && (
					<button className="button submitBtn" onClick={() => solve()}>
						Submit
					</button>)}
				{props.mark === markEnums.idle && (
					<button className="button removeBtn" onClick={()=>props.remove(1)}>
						Remove
					</button>
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
