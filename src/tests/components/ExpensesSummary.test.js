import expenses from '../fixtures/expenses';
import { ExpensesSummary } from '../../components/ExpensesSummary';
import { shallow } from 'enzyme';
import React from 'react';

test('should render ExpensesSummary with one expense', () => {
    const wrapper = shallow(<ExpensesSummary selectedExpenses={[expenses[1]]}/>)
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpensesSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpensesSummary selectedExpenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
});