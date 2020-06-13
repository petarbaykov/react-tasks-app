import { REGISTER, LOGIN, LOGOUT } from './types';

export const register = user => {
    return async (dispatch, state) => {
        const { all } = state().users;
        if (all.find(({ email }) => email === user.email)){
            return { error: 'User with email exist' };
        };
        dispatch({
            type: REGISTER,
            payload: user
        });

        return { message: 'User registered successfully!' }
    }
}

export const login = user => {
    return async (dispatch, state) => {
        const { all } = state().users;

        if (!all.find(({ email, password }) => email === user.email && password === user.password)){
            return { error: 'Wrong email or password' };
        }

        dispatch({
            type: LOGIN,
            payload: user
        });

        return { message: 'User logged in successfully!' }
    }
}

export const logout = () => {
    return {
        type: LOGOUT,
        payload: {}
    }
}