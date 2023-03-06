export enum markEnums {
	idle = "IDLE",
	propagationError = "PROPAGATION_ERROR",
	taylorMaclaurin = "TAYLOR_MACLAURIN",
}

export enum roundingchopping {
	chopping = "CHOPPING",
	rounding = "ROUNDING",
}

export enum KeyType {
	number = "NUMBER",
	letter = "LETTER",
	special = "SPECIAL",
	secondspecial = "SECONDSPECIAL"
}

export enum InputType {
	none = "none",
	trueValue = "trueValue",
	approxValue = "approxValue",
	roundingchopping = "roundingchopping",
	numDigits = "numDigits",
	function = "function",
	point = "point",
	nthDegree = "nthDegree"
}