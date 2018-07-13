import filtersReducer from '../../reducers/filters';
import moment from 'moment';

// actions coming back: @@INIT--used internally by Redux to initiate, this should create default filter values

test('Should set up default filter values', () => {
    const state = filtersReducer(undefined, { type:'@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});

test('Should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
    expect(state.sortBy).toBe('amount');
});

test('Should set sortBy to date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE' };
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

// should set text filter
test('Should set text filter', () => {
    const text = 'This is my filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

// should set start date filter
test('Should set startDate filter', () => {
    const action = {
        type: 'SET_START_DATE',
        startDate: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.startDate).toEqual(moment(0));
});

// should set end date filter
test('Should set endDate filter', () => {
    const action = {
        type: 'SET_END_DATE',
        endDate: moment(0)
    };
    const state = filtersReducer(undefined, action);
    expect(state.endDate).toEqual(moment(0));
});