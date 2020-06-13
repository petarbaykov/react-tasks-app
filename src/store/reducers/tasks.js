import { v4 as uuid } from 'uuid';
import { ADD_TASK } from '../actions/types';

const initialState = {
  list: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, list: [...state.list, { ...payload, id: uuid()} ]};
    default:
       return state;
  }
}