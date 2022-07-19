    module.exports = function toReadable(number) {
        const belowTwenty = [
            "zero",
            "one",
            "two",
            "three",
            "four",
            "five",
            "six",
            "seven",
            "eight",
            "nine",
            "ten",
            "eleven",
            "twelve",
            "thirteen",
            "fourteen",
            "fifteen",
            "sixteen",
            "seventeen",
            "eighteen",
            "nineteen",
        ];
        const tens = [
            "",
            "",
            "twenty",
            "thirty",
            "forty",
            "fifty",
            "sixty",
            "seventy",
            "eighty",
            "ninety",
        ];

        if (number <= 19) {
            return belowTwenty[number];
        }

        if (number < 100) {
            let ten = Math.floor(number / 10);
            let unit = number % 10;
            if (unit === 0) {
                return tens[ten]
            }
            return tens[ten] + ' ' + belowTwenty[unit];
        }

        if (number < 1000) {
            let numArr = number.toString();
            let hundred = +numArr[0];
            let ten = +numArr[1];
            let unit = +numArr[2];

            if (number % 100 === 0) {
                return belowTwenty[hundred] + ' hundred';
            } else if (ten < 1) {
                return belowTwenty[hundred] + ' hundred ' + belowTwenty[unit];
            } else if (ten < 2) {
                return belowTwenty[hundred] + ' hundred ' + belowTwenty[number - hundred * 100];
            } else if (unit === 0) {
                return belowTwenty[hundred] + ' hundred ' + tens[ten];
            } else {
                return belowTwenty[hundred] + ' hundred ' + tens[ten] + ' ' + belowTwenty[unit];
            }
        }
    };
