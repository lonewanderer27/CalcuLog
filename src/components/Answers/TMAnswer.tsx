import { TMprops } from "../../types";
import Spinner from "react-bootstrap/Spinner";
import { useQuery } from "react-query";
import axios from "axios";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Styles from "./index.module.scss";

export default function TMAnswer(props: { TMvalues: TMprops }) {
	const solve = async () => {

		const response = await axios.get("http://localhost:8000/api/v1/tm", {
			params: {
				"xvar": props.TMvalues.xvar,
				"nthDegree": props.TMvalues.nthDegree,
				"numDigits": props.TMvalues.numDigits,
			}
		})

		console.log("Response", response)
		return response;
	}   

	const { isLoading, data, isRefetching, isError, error } = useQuery([
		"backend"], solve
	)

	if (isError) return (
		<div className="TMSolution">
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
		<div className="TMSolution">
			<span className="title">Please wait...</span>
			<Spinner animation="border" role="status">
				<span className="visually-hidden">Please wait as we compute...</span>
			</Spinner>
		</div>
	)

	return (
		<div className="TMSolution">
			<span className="title">Answer</span>
			{/* <p>
				Here is the absolute and percentage relative error of the given true
				value and approximate value.
			</p> */}
			<div className="body">
				<Row>
					<Col>
						<div className="py-2">
							<h5 className={Styles.title}>True Value:</h5>
							<span className={Styles.answer}>{data?.data.true_value}</span>
						</div>
					</Col>
				</Row>

				<Row>
					<Col>
						<div className="py-2">
							<h5 className={Styles.title}>(Rounded) Approximated Value:</h5>
							<span className={Styles.answer}>{data?.data.approx_value_rounded}</span>
						</div>
						<div className="py-2">
							<h5 className={Styles.title}>(Rounded) Absolute Error:</h5>
							<span className={Styles.answer}>{data?.data.absolute_error_rounded}</span>
						</div>
						<div className="py-2">
							<h5 className={Styles.title}>(Rounded) Percentage Relative Error:</h5>
							<span className={Styles.answer}>{data?.data.percentage_relative_error_rounded}%</span>
						</div>
					</Col>
					<Col>
						<div className="py-2">
							<h5 className={Styles.title}>(Chopped) Approximated Value:</h5>
							<span className={Styles.answer}>{data?.data.approx_value_chopped}</span>
						</div>
						<div className="py-2">
							<h5 className={Styles.title}>(Chopped) Absolute Error:</h5>
							<span className={Styles.answer}>{data?.data.absolute_error_chopped}</span>
						</div>
						<div className="py-2">
							<h5 className={Styles.title}>(Chopped) Percentage Relative Error:</h5>
							<span className={Styles.answer}>{data?.data.percentage_relative_error_chopped}%</span>
						</div>
					</Col>
				</Row>
			</div>
		</div>
	);
}
