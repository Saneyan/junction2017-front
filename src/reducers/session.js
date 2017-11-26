import { GET_SESSION, CREATE_SESSION, DELETE_SESSION } from '../action_types'

const initalState = {
  token: null
};

export function session(state = initalState, action) {
  switch (action.type) {
    case GET_SESSION:
    case CREATE_SESSION:
      return { token: action.payload.token };

    case DELETE_SESSION:
      return initalState;

    default:
      return state;
  }
}