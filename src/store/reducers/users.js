import { v4 as uuid } from 'uuid';
import { REGISTER, LOGIN, LOGOUT, ADD_USER, REMOVE_USER, EDIT_USER } from '../actions/types';

const initialState = {
  all: [],
  current: {},
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REGISTER:
      const user = { ...payload, role: 'user', id: uuid() };
      return { ...state, current: user, all: [...state.all, user] };
    case LOGIN: 
      return { ...state, current: payload };
    case LOGOUT:
      return { ...state, current: {} }
    case ADD_USER:
      return { ...state, all: [...state.all, { ...payload } ]};
    case REMOVE_USER: 
      return { ...state, all: [...state.all.filter(t => t.id !== payload )]};
    case EDIT_USER:
      return { ...state, all: state.all.map(t => (t.id !== payload.id ? t : payload)) };
    default:
       return state;
  }
}