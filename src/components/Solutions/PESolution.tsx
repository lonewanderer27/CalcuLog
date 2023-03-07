import { PEprops, WolframResponse } from "../../types";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import Styles from "./index.module.scss";
import axios from "axios";

export default function PESolution(props: {PEvalues: PEprops}) {
	const solve = async () => {
		
		let inputConvd = props.PEvalues.trueValue;
		// inputConvd = inputConvd.replaceAll("+", " add ");
		// inputConvd = inputConvd.replaceAll("-", " minus ");
		// inputConvd = inputConvd.replaceAll("*", " times ");
		// inputConvd = inputConvd.replaceAll("/", " divide ")

		const response = await axios.get("http://localhost:8000/api/v2/pe", {
			params: {
				"trueValue": props.PEvalues.trueValue,
				"roundingchopping": props.PEvalues.roundingchopping,
				"numDigits": props.PEvalues.numDigits
			}
		})

		console.log("Response", response)
		return response;
	}   

	const { isLoading, data, isRefetching, isError, error } = useQuery([
		"wolfram", props.PEvalues.trueValue], solve
	)

	if (isError) return (
		<div className="PESolution">
			<span className="title">Failed</span>
			<p>
				An error ocurred. Most likely there is a problem with the equation.<br/>
				Click Back to fix the equation.<br/><br/>
				Here is the response of the server:
			</p>
			<div className="body">
					{JSON.stringify(error, null, 2)}
			</div>
		</div>
	)
	
	if (isLoading || isRefetching) return (
		<div className="PESolution">
			<span className="title">Please wait...</span>
			<p>
				Special symbols usually take a while to compute...<br/>
				If it seems stuck, click Back then check your equation.
			</p>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Please wait as we compute...</span>
			</Spinner>
		</div>
	)

	return (
		<div className="PESolution">
			<span className="title">Solution</span>
			<p>
				Here is the absolute and percentage relative error of the given true
				value and approximate value.
			</p>
			<div className="body">
				<div className="py-2">
					<h5 className={Styles.title}>Approximated Value:</h5>
					<span className={Styles.answer}>{data?.data.approx_value}</span>
				</div>
				<div className="py-2">
					<h5 className={Styles.title}>Absolute Error:</h5>
					<span className={Styles.answer}>{data?.data.absolute_error}</span>
				</div>
				<div className="py-2">
					<h5 className={Styles.title}>Percentage Relative Error:</h5>
					<span className={Styles.answer}>{data?.data.percentage_relative_error}%</span>
				</div>
			</div>
		</div>
	);
}
