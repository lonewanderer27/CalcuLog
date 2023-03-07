import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import Styles from "./index.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Key from "../Key";
import { numKeys, letterKeys, specialKeys } from "./layout";
import { KeyType } from "../../enums";

export default function Keyboard(props: {
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
	inserToInput: (input: string) => void;
}) {

	const retainFocus = () => {
		props.setExpand(true)
	}

	return (
		<div className={Styles.keyboard} style={{
			position: props.expand ? "sticky": "absolute"
		}}>
			<div className={Styles.keyboardHeader}>
				<span
					className={Styles.input}
					onClick={props.toggleExpand}	
				>
					{`Click to ${props.expand ? "close" : "open"} keyboard`}
				</span>
				{!props.expand && (
					<img
						src={arrowUp}
						className={Styles.expandKeyboard}
						onClick={props.toggleExpand}
					/>
				)}
				{props.expand && (
					<img
						src={arrowDown}
						className={Styles.expandKeyboard}
						onClick={props.toggleExpand}
					/>
				)}
			</div>
			{props.expand && <div className={Styles.keyboardBody}>
				<Row>
					<Col xs={4}>
						<Col>
							{numKeys.slice(0, 3).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{numKeys.slice(3, 6).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{numKeys.slice(6, 9).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{numKeys.slice(9, 12).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
					</Col>
					<Col xs={4}>
						<Col>
						{letterKeys.slice(0, 3).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
						{letterKeys.slice(3, 6).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
						{letterKeys.slice(6, 9).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{letterKeys.slice(9, 11).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
							<Key value="π" type={KeyType.special} latex={false}
							onClick={() => {
								retainFocus();
								props.inserToInput("3.14159265359");
							}} />
							<Key value="e" type={KeyType.special} latex={false}
							onClick={() => {
								retainFocus();
								props.inserToInput("2.71828182846");
							}} />
						</Col>
					</Col>
					<Col xs={4}>
						<Col>
							{specialKeys.slice(0, 3).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{specialKeys.slice(3, 6).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{specialKeys.slice(6, 9).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
						<Col>
							{specialKeys.slice(9, 11).map((value) => {
								return <Key {...value} onClick={() => {
									retainFocus();
									props.inserToInput(value.value)
								}} />
							})}
						</Col>
					</Col>
				</Row>
			</div>}
		</div>
	);
}
