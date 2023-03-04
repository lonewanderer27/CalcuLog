import { markEnums } from "./enums";
import { TMValueProps } from "./ValueProps";

export default function TaylorMaclaurin(props: {
	mark: markEnums;
	setMark: React.Dispatch<React.SetStateAction<markEnums>>;
	back: () => void;
	function?: string;
	point?: number;
	nthDegree?: number;
	setTMValues: React.Dispatch<React.SetStateAction<TMValueProps>>;
}) {
	const solve = () => {
		props.setMark(markEnums.taylorMaclaurin);
	};

	return (
		<div className="taylorMaclaurin">
			<span className="title">Taylor Maclaurin</span>
			<div className="body">
				<div className="inputGroup">
					<label htmlFor="function">Enter a function</label>
					<input
						type="text"
						name="Function"
						id="function"
						value={props.function}
					/>
				</div>

				<div style={{ display: "flex", flexDirection: "row", gap: "10px" }}>
					<div className="inputGroup">
						<label htmlFor="point">Enter a point</label>
						<input type="text" name="point" id="point" value={props.point} />
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
					<button className="button removeBtn">Remove</button>
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
