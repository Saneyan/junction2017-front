import { GET_SESSION, CREATE_SESSION, DELETE_SESSION } from '../action_types'

const initalState = {
  token: null
};

export function session(state = initalState, action) {
  switch (action.type) {
    case GET_SESSION:
    case CREATE_SESSION:
      return state;

    case DELETE_SESSION:
      return initalState;

    default:
      return state;
  }
}