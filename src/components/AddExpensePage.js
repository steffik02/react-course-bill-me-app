import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.addExpense(expense);
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <h1>Add Expense</h1>
                <p>This is where you add expenses. Expenses are bad. Don't add too many.</p>
                <ExpenseForm
                    onSubmit={
                        this.onSubmit
                    }
                />
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    addExpense: (expense) => dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);