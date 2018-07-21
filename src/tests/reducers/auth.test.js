import authReducer from '../../reducers/auth';

const uid = 'djksla448903';

test('Should set login with given uid', () => {
    const action = {
        type: 'LOGIN',
        uid
    };
    const state = authReducer({}, action);
    expect(state).toEqual({uid});
});

test('Should clear uid for logout', () => {
    const action = {
        type: 'LOGOUT'
    };
    const state = authReducer({ uid }, action);
    expect(state).toEqual({});
});
