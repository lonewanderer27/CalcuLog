import arrowUp from "../../assets/arrow-up.svg";
import arrowDown from "../../assets/arrow-down.svg";
import Styles from "./index.module.scss";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import Key from "../Key";
import { KeyType } from "../../enums";

export default function Keyboard(props: {
	expand: boolean;
	setExpand: React.Dispatch<React.SetStateAction<boolean>>;
	toggleExpand: () => void;
}) {

	const keyboardFocus = () => {
		props.setExpand(true)
	}

	return (
		<div 
			className={Styles.keyboard} 
			style={{ maxHeight: props.expand ? "50vh" : "0"}}
		>
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
			<div className={Styles.keyboardBody}>
				<Row>
					<Col xs={3}>
						<Col>
							<Key value="1" type={KeyType.number} onClick={() => keyboardFocus()} />
							<Key value="2" type={KeyType.number} onClick={() => keyboardFocus()} />
							<Key value="3" type={KeyType.number} onClick={() => keyboardFocus()}/>
						</Col>
						<Col>
							<Key value="4" type={KeyType.number} onClick={() => keyboardFocus()} />
							<Key value="5" type={KeyType.number} onClick={() => keyboardFocus()} />
							<Key value="6" type={KeyType.number} onClick={() => keyboardFocus()} />
						</Col>
						<Col>
							<Key value="8" type={KeyType.number}  onClick={() => keyboardFocus()} />
							<Key value="7" type={KeyType.number}  onClick={() => keyboardFocus()} />
							<Key value="9" type={KeyType.number}  onClick={() => keyboardFocus()} />
						</Col>
						<Col>
							<Key value="," type={KeyType.number} onClick={() => keyboardFocus()}  />
							<Key value="0" type={KeyType.number} onClick={() => keyboardFocus()}  />
							<Key value="." type={KeyType.number} onClick={() => keyboardFocus()}  />
						</Col>
					</Col>
					<Col xs={3}>
						<Col>
							<Key value="a" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="b" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="c" type={KeyType.letter} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="d" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="e" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="f" type={KeyType.letter} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="x" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="y" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="z" type={KeyType.letter} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="(" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value="|" type={KeyType.letter} onClick={() => keyboardFocus()}  />
							<Key value=")" type={KeyType.letter} onClick={() => keyboardFocus()}  />
						</Col>
					</Col>
					<Col xs={3}>
						<Col>
							<Key value="π" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="e" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="c" type={KeyType.special} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="d" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="e" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="f" type={KeyType.special} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="x" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="y" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="z" type={KeyType.special} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="(" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value="|" type={KeyType.special} onClick={() => keyboardFocus()}  />
							<Key value=")" type={KeyType.special} onClick={() => keyboardFocus()}  />
						</Col>
					</Col>
					<Col xs={3}>
						<Col>
							<Key value="b" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="c" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="π" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="d" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="e" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="f" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="x" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="y" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="z" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
						</Col>
						<Col>
							<Key value="(" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value="|" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
							<Key value=")" type={KeyType.secondspecial} onClick={() => keyboardFocus()}  />
						</Col>
					</Col>
				</Row>
			</div>
		</div>
	);
}
