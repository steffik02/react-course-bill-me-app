import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('Should set default state to empty array', () => {
    const state = expensesReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

test ('Should remove expense by id', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '2'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test ('Should not remove expense when ID is not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[1], expenses[2]]);
});

//should add an expense
test ('Should add an expense', () => {
    const expense = {
        id: '4',
        description: 'Gas',
        note: '',
        amount: 5000,
        createdAt: 20000000   
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

//should edit an expense
test ('Should edit an expense with given id', () => {
    const note = "Last month's rent";
    const action = {
        type: 'EDIT_EXPENSE', 
        id: expenses[1].id,
        updates: { note }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].note).toBe(note);
});

//should not edit expense if expense not found
test('Should not edit an expense if id does not match', () => {
    const note = "Last month's rent";
    const action = {
        type: 'EDIT_EXPENSE',
        id: '900',
        updates: { note }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);
})