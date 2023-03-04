import { roundingchopping } from "./enums";

export type PEValueProps = {
	trueValue: string;
	approxValue: number;
	roundingchopping: roundingchopping;
	numDigits: number;
};

export type TMValueProps = {
	function: string;
	point: number;
	nthDegree: number;
};
