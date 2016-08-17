import React, { Component } from 'react';
import { reduxForm } from 'redux-form'
import { addTransaction } from '../actions/';
import { domOnlyProps } from '../utils/form';
import dateFormat from 'dateFormat';

const validate = (values) => {
	const errors = {};

	if( !values.type ) errors.type = 'Select a type';
	if( !values.amount ) errors.amount = 'Enter an amount';
	if( !values.description ) errors.description = 'Enter a description';

	return errors;
};

class TransactionForm extends Component {

	componentDidMount() {
      	$(this.refs.dropdown).dropdown({ onChange: this.props.fields.type.onChange });
	}

	render() {
		const { fields: { type, amount, description }, handleSubmit } = this.props;

		return (
			<form className="ui form" onSubmit={ handleSubmit( this.onHandleSubmit ) }>
				<div className={ type.touched && type.invalid ? "field error" : "field" }>
					<select className="ui dropdown" ref="dropdown" {...domOnlyProps(type)} >
						<option value="">Transaction Type</option>
						<option value="credit">Credit</option>
						<option value="debit">Debit</option>
					</select>	
				</div>

				<div className={ amount.touched && amount.invalid ? "field error" : "field" }>
					<label>Amount</label>
					<input type="text" name="amount" placeholder="Amount" {...domOnlyProps(amount)}/>
				</div>
				<div className={ description.touched && description.invalid ? "field error" : "field" }>
					<label>Description</label>
					<input type="text" name="description" placeholder="Description" {...domOnlyProps(description)}/>
				</div>

				<button className="ui button" type="submit">Add Transaction</button>
			</form>
		);
	}

	onHandleSubmit({amount, description, type}, dispatch) {
		const date = dateFormat(new Date(), 'mmmm dS, yyyy');

		dispatch(addTransaction({ amount, description, type, date }));
	}
}

export default reduxForm({
	form: 'AddTransactionForm',
	fields: [ 'type', 'amount', 'description' ],
	validate
})(TransactionForm);