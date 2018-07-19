import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import {setTextFilter} from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import './firebase/firebase';

const store = configureStore();
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//render loading message until db loads
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

//wait for the expenses to get set to the store then render the app
store.dispatch(startSetExpenses()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
})

