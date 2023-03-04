import arrowUp from "./assets/arrow-up.svg";
import arrowDown from "./assets/arrow-down.svg";
import { useState } from "react";

export default function Keyboard() {
	const [expand, setExpand] = useState(false);
	const toggleExpand = () => setExpand((prev) => !prev);

	return (
		<div className="keyboard">
			<div className="keyboard--header">
				<input
					type="text"
					name="keyboard"
					id="keyboard"
					placeholder="Click to open keyboard"
					onClick={toggleExpand}
				/>
				{!expand && (
					<img
						src={arrowUp}
						className="expandKeyboard"
						onClick={toggleExpand}
					/>
				)}
				{expand && (
					<img
						src={arrowDown}
						className="expandKeyboard"
						onClick={toggleExpand}
					/>
				)}
			</div>
			{expand && <div className="keyboard--body"></div>}
		</div>
	);
}
