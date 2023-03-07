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
	rounding: boolean;
	chopping: boolean;
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
	const [TVsuccess, setTVsuccess] = useState<boolean>(() => false);
	const [numDigitsSuccess, setNumDigitsSuccess] = useState<boolean>(() => false);
	const [errorModal, setErrorModal] = useState<boolean>(() => false);
	const [AVsuccess, setAVsuccess] = useState<boolean>(() => false);
	const [answerState, setAnswerState] = useState()

	const solve = () => {
		props.setMark(markEnums.propagationError);
	};

	const showError = () => {
		setErrorModal(() => true);
	}

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		console.log(event);
		props.setPEValues((prevVal) => {
			console.log("prevVal", prevVal);

			if (props.numDigits < 0) {
				setNumDigitsSuccess(false);
			} else {
				setNumDigitsSuccess(true)
			}
			if (props.trueValue.length === 0 || props.trueValue === "") {
				setTVsuccess(false);
			} else {
				setTVsuccess(true);
			}

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
			<Modal show={errorModal} onHide={() => setErrorModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<ul>
						{TVsuccess === false || props.trueValue === "" &&	 <li>Invalid formula in True Value input form</li>}
						{numDigitsSuccess === false && <li>Invalid number in number of digits in input form</li>}
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
								latex={props.trueValue || ""}
								onSuccess={() => setTVsuccess(true) }
								onError={() => { setTVsuccess(false) }}
							/>
						</div>
				</div>

				{/* <div className="inputGroup">
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
						ref={props.focusedInput === InputType.approxValue ? props.currentInputRef : undefined}
					/>
					<div className="Tex2SVGContainer"
							style={{display: AVsuccess && props.approxValue ? "block" : "none"}}
						>
							<Tex2SVG 
								class="Tex2SVG"
								display="inline" 
								latex={String(props.approxValue) || ""}
								onSuccess={() => setAVsuccess(true) }
								onError={() => { setAVsuccess(false) }}
							/>
						</div>
				</div> */}

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
						<label htmlFor="numDigits">Number of Digits</label>
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
					<button 
						className={`button ${TVsuccess && numDigitsSuccess ? "submitBtn" : "disabledBtn"}`} 
						onClick={() => {TVsuccess && numDigitsSuccess ? solve() : showError()}}
					>
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
