import { REGISTER_USER } from '../actions/types';

const initialState = {
  all: [],
  current: {},
  test: 5
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER_USER:
      const user = { ...payload, role: 'user' };
      return { ...state, current: user, all: [...state.all, user] };
    default:
       return state;
  }
}