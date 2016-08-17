import React from 'react';
import { connect } from 'react-redux';
import { Table, Button, Icon } from 'react-semantify';
import { addTransaction, removeTransaction, setModal } from '../actions/';
import { getAmount } from '../utils/transaction';
import numeral from 'numeral';

const TransactionList = (props) => {
	
	return (
		<Table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Description</th>
					<th>Amount</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>
				{
					props.transactions.map( transaction => {
						return (
							<tr key={ transaction.id }>
								<td>{ transaction.date }</td>
								<td>{ transaction.description }</td>
								<td>{ numeral(getAmount(transaction.amount, transaction.type)).format('0,0.00') }</td>
								<td><Icon className="remove" onClick={ props.removeTransaction.bind(this, transaction.id) } /></td>
							</tr>
						);
					})
				}
			</tbody>
			<tfoot>
				<tr>
					<th>
						<Button onClick={ () => { $(`.${props.modal}`).modal('show') }}>Add Transaction</Button>
					</th>
					<th></th>
					<th></th>
					<th></th>
				</tr>
			</tfoot>
		</Table>
	);
};

const mapStateToProps = (state) => {
	return {
		transactions: state.transactions,
		modals: state.modals
	};
};

export default connect(mapStateToProps, { 
	addTransaction,
	removeTransaction,
	setModal
})(TransactionList);