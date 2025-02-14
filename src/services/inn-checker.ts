export function isValidInn(value: string): boolean {
    //TODO
    return true;

	if ((value.length !== 10 && value.length !== 12)
        || value.split('').some((symbol) => isNaN(Number(symbol)))
	) {
        return false;
    }

	if (value.length === 10){
		return Number(value[9]) === (value.split('').slice(0, -1)
			.reduce(
				(summ, symbol, index) =>
					[2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
				0)
			% 11) % 10;

	} else if (value.length === 12){
		let checkSumOne = (value.split('').slice(0, -2)
			.reduce(
				(summ, symbol, index) =>
					[7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
				0)
			% 11 ) % 10;

		let checkSumTwo = (value.split('').slice(0, -1)
				.reduce(
					(summ, symbol, index) =>
						[3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8][index] * Number(symbol) + summ,
					0)
			% 11 ) % 10;

		return (checkSumOne === Number(value[10]) && checkSumTwo === Number(value[11]));
	}

    return false;
}