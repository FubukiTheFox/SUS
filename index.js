"use strict";
function letters(letters) {
	if (letters == "A") {
		return "B";
	} else if (letters == "B") {
		return "C";
	} else if (letters == "C") {
		return "D";
	} else if (letters == "D") {
		return "F";
	} else if (letters == "F") {
		return "G";
	} else if (letters == "G") {
		return "H";
	} else if (letters == "H") {
		return "E";
	} else if (letters == "E") {
		return "J";
	} else if (letters == "J") {
		return "K";
	} else if (letters == "K") {
		return "L";
	} else if (letters == "L") {
		return "Z";
	} else if (letters == "Z") {
		return "X";
	} else if (letters == "X") {
		return "V";
	} else if (letters == "V") {
		return "N";
	} else if (letters == "N") {
		return "M";
	} else if (letters == "Q") {
		return "W";
	} else if (letters == "R") {
		return "T";
	} else if (letters == "T") {
		return "Y";
	} else if (letters == "Y") {
		return "U";
	} else if (letters == "U") {
		return "I";
	} else if (letters == "I") {
		return "O";
	} else if (letters == "O") {
		return "P";
	} else if (letters == "P") {
		return "L"
	} else {
		return "SUS";
	}
}
function symbols(symbol) {
	if (symbol == "!") {
		return "@";
	} else if (symbol == "@") {
		return "#";
	} else if (symbol == "#") {
		return "$";
	} else if (symbol == "$") {
		return "%";
	} else if (symbol == "%") {
		return "^";
	} else if (symbol == "^") {
		return "&";
	} else if (symbol == "&") {
		return "*";
	} else if (symbol == "*") {
		return "(";
	} else if (symbol == "(") {
		return ")";
	} else if (symbol == ")") {
		return "-";
	} else if (symbol == "_") {
		return "+";
	} else if (symbol == "+") {
		return "{";
	} else if (symbol == "{") {
		return "}";
	} else if (symbol == "}") {
		return "\"";
	} else if (symbol == "\"") {
		return "'";
	} else if (symbol == "'") {
		return "|";
	} else if (symbol == "|") {
		return "\\";
	} else if (symbol == "\\") {
		return "/";
	} else if (symbol == "/") {
		return ":";
	} else if (symbol == ":") {
		return ";";
	} else if (symbol == ";") {
		return "[";
	} else if (symbol == "[") {
		return "]";
	} else if (symbol == "]") {
		return ".";
	} else if (symbol == ".") {
		return ",";
	} else if (symbol == ",") {
		return "<";
	} else if (symbol == "<") {
		return ">";
	} else if (symbol == ">") {
		return "?";
	} else if (symbol == "?") {
		return ">";
	} else {
		return "+";
	}
}
function numbers(number) {
	if (number == 1) {
		return "2";
	} else if (number > 1) {
		return number + 1
	}
}
const date = new Date();
const total = {
	text: letters("A"),
	symbol: symbols("_"),
	number: numbers("190"),
	date: date
}
console.log(total.date)
const greeting = {
	morning: "good morning",
	afternoon: "good afternoon",
	evening: "good evening" || "good night",
	normal: "Hello"
}
console.log(greeting.evening)
let nonsense = false;
if (nonsense == true) {
	console.log("absolutely NO")
} else if (nonsense == false) {
	const rewards = {
		money: 1000000000000,
		sCoin: 1000000000000000,
		aCoin: 1000000000000000000000000,
		total: function() {
			return this.money + this.aCoin + this.sCoin
		}
	}
	console.log(rewards.money)
	while (rewards.money > 1000) {
		const pay = {
			value: rewards.money,
			total: rewards.total()
		}
		if (pay.total == rewards.total()) {
			let accept = "accept";
			let decline = "decline";
			const options = {
				accept: accept,
				decline: decline,
				options: function() {
					return this.accept + " or " + this.decline
				}
			}
		}
		if (false == true) {
			const app = {
				name: "PRO MONEY",
				money: pay.total()
				}
			} else {
				const appnot = {
					name: "PAYNOT",
					money: function() {
						return rewards.total() - pay.total
				}
			}
		}
	}
} else {
	const time = {
		date: new Date()
	}
	let date = time.date
	console.log(date)
	if (time.date != date) {
		let realDate = new Date();
	}
}
while (number.text != "A") {
	const express = {
		fast: false,
		UT: true
	}
	if (number.text == "B") {
		let alphabet = "ABCD..."
	} else if (number.text == "C") {
		let alpha = "B"
	} else {
		const alphabet = "ABCDEFGKI"
	}
}
