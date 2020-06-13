import { REGISTER, LOGIN, LOGOUT } from '../actions/types';

const initialState = {
  all: [],
  current: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      const user = { ...payload, role: 'user' };
      return { ...state, current: user, all: [...state.all, user] };
    case LOGIN: 
      return { ...state, current: payload };
    case LOGOUT:
      return { ...state, current: {} }
    default:
       return state;
  }
}