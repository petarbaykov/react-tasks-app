import { v4 as uuid } from 'uuid';
import { REGISTER, LOGIN, LOGOUT, ADD_USER, EDIT_USER, REMOVE_USER, REMOVE_USER_TASKS } from './types';

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
        const find = all.find(({ email, password }) => email === user.email && password === user.password); 
        if (!find){
            return { error: 'Wrong email or password' };
        }

        dispatch({
            type: LOGIN,
            payload: find
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

export const add = payload => {
    return async (dispatch, state)  => {
        
        const task = { ...payload, id: uuid() };
        return dispatch({
            type: ADD_USER,
            payload: task
        })
    }
}

export const edit = payload => {
    return {
        type: EDIT_USER,
        payload
    }
}

export const remove = id => {

    return dispatch => {
        dispatch({
            type: REMOVE_USER,
            payload: id
        });

        dispatch({
            type: REMOVE_USER_TASKS,
            payload: id
        })
    };
}
