import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

// Refactor page to be class based component, pull out inline functions to methods 
// Set up mapDispatchToProps, we need 2 things on the returned object, not just 1: editExpense and removeExpense

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        //dispatch the action to edit the expense
        // props.dispatch(editExpense(props.expense.id, expense));
        this.props.startEditExpense(this.props.expense.id, expense);
        //redirect to the dashboard
        this.props.history.push('/');
    }
    onClick = () => {
        // props.dispatch(removeExpense({ id: props.expense.id }));
        this.props.startRemoveExpense({ id: this.props.expense.id });
        this.props.history.push('/');
    }
    render () {
        return (
            <div>
                <p>This is where you edit your expenses. I will be editing mine to ZERO!</p>
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmit={this.onSubmit}
                />
                <button onClick={this.onClick}>
                    Remove
                </button>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
};

const mapDispatchToProps = (dispatch, props) => ({
    startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
    startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpensePage);