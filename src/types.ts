import { roundingchopping } from "./enums";

export type PEvaluesValidity = {
	numDigits: boolean;
	trueValue: boolean;
	nthDegree: boolean;
}

export type TMvaluesValidity = {
	numDigits: boolean;
	nthDegree: boolean;
	xvar: boolean;
}

export type PEprops = {
	trueValue: string;
	approxValue: string;
	numDigits: number;
	roundingchopping: roundingchopping
};

export type TMprops = {
	function?: string;
	point?: number;
	nthDegree: number;
	xvar: number;
	numDigits: number;
};

export interface Subpod {
	title: string;
	plaintext: string;
}

export interface Expressiontypes {
	name: string;
}

export interface State {
	name: string;
	input: string;
}

export interface Pod {
	title: string;
	scanner: string;
	id: string;
	position: number;
	error: boolean;
	numsubpods: number;
	subpods: Subpod[];
	expressiontypes: Expressiontypes;
	primary?: boolean;
	states: State[];
}

export interface Queryresult {
	success: boolean;
	error: boolean;
	numpods: number;
	datatypes: string;
	timedout: string;
	timedoutpods: string;
	timing: number;
	parsetiming: number;
	parsetimedout: boolean;
	recalculate: string;
	id: string;
	host: string;
	server: string;
	related: string;
	version: string;
	inputstring: string;
	pods: Pod[];
}

export interface WolframResponse {
	queryresult: Queryresult;
}