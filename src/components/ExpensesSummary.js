import React from 'react';
import {connect} from 'react-redux';
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral';


export class ExpensesSummary extends React.Component {
    render () {
        const expenseCount = this.props.selectedExpenses.length;
        const expensesTotal = selectExpensesTotal(this.props.selectedExpenses);
        const expensesTotalFormatted = numeral(expensesTotal / 100).format('$0,0.00');
        const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
            return (
            <div>
                <h1>Viewing {expenseCount} {expenseWord} totaling {expensesTotalFormatted}</h1>
            </div>
)}}
        
        
const mapStateToProps = (state) => ({
    selectedExpenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);