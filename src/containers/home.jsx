import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import { setTransactions, addTransaction, setModal } from '../actions/';
import TransactionList from '../components/transactionList';
import TransactionForm from '../components/transactionForm';
import { getBalance } from '../utils/transaction';
import { Modal } from 'react-semantify';
import numeral from 'numeral';

class Home extends Component {

	componentWillMount() {
		this.props.setTransactions();	
	}

	render() {
		const modal = 'transaction-modal';

		return (
			<div>
				<Modal className={modal} >
					<div className="header">Add Transaction</div>
					<div className="content">
						<TransactionForm />
					</div>
				</Modal>

				<div>
					<label>Balance: </label>
					<span>{ numeral(getBalance(this.props.transactions)).format('$0,0.00') }</span>
				</div>

				<TransactionList modal={modal}/>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		transactions: state.transactions,
		modals: state.modals
	};
};

export default connect(mapStateToProps, { 
	setTransactions,
	addTransaction,
	setModal
})(Home);