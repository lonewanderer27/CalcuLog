import { roundingchopping } from "./enums";

export type PEprops = {
	trueValue: string;
	approxValue: string;
	roundingchopping: roundingchopping;
	numDigits: number;
};

export type TMprops = {
	function: string;
	point: number;
	nthDegree: number;
};
