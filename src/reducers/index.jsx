import React from 'react';
import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import TransactionReducer from './transaction';

const rootReducer = combineReducers({
	transactions: TransactionReducer,
	form: FormReducer
});

export default rootReducer;