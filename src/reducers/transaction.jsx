import { 
	SET_TRANSACTIONS, 
	ADD_TRANSACTION, 
	REMOVE_TRANSACTION 
} from '../actions/';

export default (state = [], action) => {
	switch( action.type ) {
		case SET_TRANSACTIONS:
			return [ ...state, ...action.transactions ];
		case ADD_TRANSACTION:
			return [ ...state, action.transaction ];
		case REMOVE_TRANSACTION:
			const transactionIndex = state.findIndex( transaction => { return transaction.id == action.id } );
			const transactions = state.slice();
			
			if( typeof transactionIndex === 'undefined' ) return state;
			
			transactions.splice(transactionIndex, 1);
			
			return transactions;
		default:
			return state;
	}
};