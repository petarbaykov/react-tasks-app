import { REGISTER_USER } from './types';

export const registerUser = user => {
    return async (dispatch, state) => {
        const { all } = state().users;
        if (all.find(({ email }) => email === user.email)){
            return { error: 'User with email exist' };
        };
        dispatch({
            type: REGISTER_USER,
            payload: user
        });

        return { message: 'User registered successfully!' }
    }
}