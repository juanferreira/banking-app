
const transactionTypes = {
	credt: 'credit',
	debit: 'debit'
};

const getAmount = (amount, type) => {
	return type == transactionTypes.debit ? amount * - 1: amount;
};

const getBalance = (transactions = []) => {
	const balance = transactions.reduce( (total, { amount, type }) => {
		return total + getAmount(amount, type);
	}, 0);

	return balance;
};

export {
	transactionTypes,
	getAmount,
	getBalance
};