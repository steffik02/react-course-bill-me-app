import React from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
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
            <div className="page-header">
                <div className="content-container">
                    <div>
                        <h1 className="page-header__title">
                            Viewing <span>{expenseCount}</span> {expenseWord} totaling 
                            <span> {expensesTotalFormatted}</span>
                        </h1>
                        <div className="page-header__actions">
                            <Link className="button" to="/create">Add Expense</Link>
                        </div>
                    </div>    
                </div>    
            </div>
)}}
        
        
const mapStateToProps = (state) => ({
    selectedExpenses: selectExpenses(state.expenses, state.filters)
});

export default connect(mapStateToProps)(ExpensesSummary);