import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
    onSubmit = (expense) => {
        // props.dispatch(addExpense(expense));
        this.props.startAddExpense(expense);
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <div className="page-header">
                <div className="content-container">
                    <h1 className="page-header__title"><span>Add Expense</span></h1>
                    <p>This is where you add expenses. Expenses are bad. Don't add too many.</p>
                </div>
                </div>
                    <div className="content-container">
                        <ExpenseForm
                            onSubmit={
                                this.onSubmit
                            }
                        />
                    </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    startAddExpense: (expense) => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage); 