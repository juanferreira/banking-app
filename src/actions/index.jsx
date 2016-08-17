import axios from 'axios';
import numeral from 'numeral';

export const SET_TRANSACTIONS = 'SET_TRANSACTIONS';
export const ADD_TRANSACTION = 'ADD_TRANSACTION';
export const REMOVE_TRANSACTION = 'REMOVE_TRANSACTION';

export const setTransactions = () => {

	return (dispatch, getState) => {
		axios.get('/public/data.json')
			.then( response => { return response.data.transactions } )
			.then( transactions => {
				dispatch({
					type: SET_TRANSACTIONS,
					transactions
				});
			});
	};
};

export const addTransaction = (transaction) => {
	return (dispatch, getState) => {
		const id = getState().transactions.length + 1;
		const { amount } = transaction;
		
		dispatch({
			type: ADD_TRANSACTION,
			transaction: Object.assign({}, transaction, { 
				id,
				amount: numeral(amount).format('0,0.00')
			})
		});
	};
};

export const removeTransaction = (id) => {
	return {
		type: REMOVE_TRANSACTION,
		id
	};
};
