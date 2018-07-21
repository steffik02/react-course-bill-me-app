import { login, logout } from '../../actions/auth';

test('Should set up login action', () => {
    const uid = '38492038578'
    const action = login(uid);
    expect(action).toEqual({
        type: 'LOGIN',
        uid
    });
});

test('Should set up login action', () => {
    const action = logout();
    expect(action).toEqual({
        type: 'LOGOUT'
    });
});

