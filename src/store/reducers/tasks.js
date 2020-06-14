import { v4 as uuid } from 'uuid';
import { ADD_TASK, EDIT_TASK, REMOVE_TASK, REMOVE_USER_TASKS, SET_STATUS } from '../actions/types';

const initialState = {
  list: []
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TASK:
      return { ...state, list: [...state.list, { ...payload, id: uuid()} ]};
    case REMOVE_TASK: 
      return { ...state, list: [...state.list.filter(t => t.id !== payload )]};
    case EDIT_TASK:
      return { ...state, list: state.list.map(t => (t.id !== payload.id ? t : payload)) };
    case REMOVE_USER_TASKS: 
      return { ...state, list: [...state.list.filter(t => t.user_id !== payload )]};
    case SET_STATUS:
      return { ...state, list: state.list.map(t => (t.id !== payload.id ? t : { ...t, ...payload } ))}
    default:
       return state;
  }
}