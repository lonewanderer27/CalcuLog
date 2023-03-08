import { markEnums, InputType, buttonType } from "../../enums";
import { TMprops } from "../../types";
import { useState } from "react";
import Tex2SVG from "react-hook-mathjax";
import Modal from "react-bootstrap/Modal";
import Button from "../../components/Button";
import {Button as BootstrapButton} from "react-bootstrap";

export default function TaylorMaclaurin(props: {
	mark: markEnums;
	setMark: React.Dispatch<React.SetStateAction<markEnums>>;
	back: () => void;
	function: string;
	xvar: number;
	point: number;
	numDigits: number;
	nthDegree: number;
	setTMValues: React.Dispatch<React.SetStateAction<TMprops>>;
	remove: (choice: number) => void;
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
	currentInputRef: React.RefObject<HTMLInputElement>;
	focusedInput: InputType;
	setFocusedInput: React.Dispatch<React.SetStateAction<InputType>>
}) {
	const [FSuccess, setFSuccess] = useState<boolean>(() => true);
	const [xVarSuccess, setxVarSuccess] = useState<boolean>(() => true);
	const [nthDegreeSuccess, setnthDegreeSuccess] = useState<boolean>(() => true);
	const [errorModal, setErrorModal] = useState<boolean>(() => false);

	const solve = () => {
		let validInputs = true;

		if (props.nthDegree < 1){
			validInputs = false;
			setnthDegreeSuccess(() => false);
		}

		if (props.numDigits < 0){
			validInputs = false;
		}

		if (props.xvar <= 0){
			validInputs = false;
			setxVarSuccess(() => false);
		}

		if (validInputs) {
			props.setMark(markEnums.taylorMaclaurin);
			setErrorModal(() => false);
		} else {
			setErrorModal(() => true);
		}
	};

	const handleChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		console.log(event);

		props.setTMValues((prevVal) => {
			console.log("prevVal", prevVal);

			return {
				...prevVal,
				[event.target.name]: parseInt(event.target.value) ? Number(event.target.value) : event.target.value,
			};
		});
	};

	return (
		<div className="taylorMaclaurin">
			<Modal show={errorModal} onHide={() => setErrorModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>
					<ul>
						{props.numDigits < 0 && <li>Number of decimal places has to be 0 or more.</li>}
						{nthDegreeSuccess === false && <li>nthDegree must be greater than 0</li>}
						{xVarSuccess === false && <li>x variable must be a non-negative or non-zero number</li>}
					</ul>
				</Modal.Body>
        <Modal.Footer>
          <BootstrapButton variant="secondary" onClick={() => setErrorModal(false)}>
            Close
          </BootstrapButton>
        </Modal.Footer>
      </Modal>
			<span className="title">Taylor Maclaurin</span>
			<div className="body">
				<div className="inputGroup">
					<label htmlFor="function">Function</label>
					<div className="Tex2SVGContainer">
							<span style={{display: "absolute", top: 0, right: 0, color: "black"}}>Preview: </span>
							<Tex2SVG 
								class="Tex2SVG"
								display="inline" 
								latex="\\ln(x+1)"
								onSuccess={() => setFSuccess(true)}
								onError={() => {setFSuccess(false)}}
							/>
						</div>
				</div>

				<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
					<div className="inputGroup">
						<label htmlFor="point">Point (For Maclaurin, it's set to 0 by default) </label>
						<input
							readOnly={true}
							disabled={true}
							type="number"
							name="point"
							id="point"
							value={props.point}
							onChange={handleChange}
						/>
					</div>
					<div className="inputGroup">
						<label htmlFor="nthDegree">Number of Decimal Places</label>
						<input
							readOnly={props.mark === markEnums.taylorMaclaurin ? true : false}
							disabled={props.mark === markEnums.taylorMaclaurin ? true : false}
							type="number"
							name="numDigits"
							id="numDigits"
							value={props.numDigits}
							onChange={handleChange}
						/>
					</div>
				</div>

				<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
					<div className="inputGroup">
						<label htmlFor="nthDegree">nthDegree</label>
						<input
							readOnly={props.mark === markEnums.taylorMaclaurin ? true : false}
							disabled={props.mark === markEnums.taylorMaclaurin ? true : false}
							type="number"
							name="nthDegree"
							id="nthDegree"
							value={props.nthDegree}
							onChange={handleChange}
						/>
					</div>
					<div className="inputGroup">
						<label htmlFor="nthDegree">x variable</label>
						<input
							readOnly={props.mark === markEnums.taylorMaclaurin ? true : false}
							disabled={props.mark === markEnums.taylorMaclaurin ? true : false}
							type="number"
							name="xvar"
							id="xvar"
							value={props.xvar}
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
				{props.mark === markEnums.taylorMaclaurin && (
					<button className="button backBtn" onClick={props.back}>
						Back
					</button>
				)}
			</div>
		</div>
	);
}
