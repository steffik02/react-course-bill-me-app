import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, removeExpense, editExpense, setExpenses, startSetExpenses, startRemoveExpense, startEditExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);
const uid = 'thisisatestuid';
const defaultAuthState = { auth: { uid } };

beforeEach((done) => {
    const expensesData= {};
    expenses.forEach(({ id, description, note, amount, createdAt }) =>{
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test('Should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should set up edit expense action object', () => {
    const action = editExpense('123abc', { note: 'This is the new note value'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123abc',
        updates: {
            note: 'This is the new note value'
        }
    });
});

test('Should set up add expense action object with provided values', () => {
    const action = addExpense(expenses[2]);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    });
});

test('Should add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        //returns an array of all of the actions
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(expenseData)
        done(); 
    });
});

test('Should add expense with defaults to database and store', (done) => {
    const store = createMockStore(defaultAuthState);
    const defaultData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    }
    store.dispatch(startAddExpense({})).then(() => {
        //returns an array of all of the actions
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...defaultData
            }
        });
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(defaultData)
        done(); 
    });
});

test('Should set up set expense action object with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    });
});

test('Should fetch the expenses from Firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});

test('Should remove expense from Firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy;
        done();
    });
});

test ('Should edit expense in firebase', (done) => {
    const store = createMockStore(defaultAuthState);
    const id = expenses[1].id;
    const updates = {
        description: 'Groceries',
        amount: 15000,
        createdAt: 85904382549034,
        note: ''
    }
    store.dispatch(startEditExpense(id, updates)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        });
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toEqual(updates);
        done();
    });
});

// test('Should add expense to database and store', (done) => {
//     const store = createMockStore({});
//     const expenseData = {
//         description: 'Mouse',
//         amount: 3000,
//         note: 'This one is better',
//         createdAt: 1000
//     };
//     store.dispatch(startAddExpense(expenseData)).then(() => {
//         //returns an array of all of the actions
//         const actions = store.getActions();
//         expect(actions[0]).toEqual({
//             type: 'ADD_EXPENSE',
//             expense: {
//                 id: expect.any(String),
//                 ...expenseData
//             }
//         });
//         return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//     }).then((snapshot) => {
//         expect(snapshot.val()).toEqual(expenseData)
//         done(); 
//     });
// });


// test('Should set up the add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             id: expect.any(String),
//             description: '',
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     });
// });