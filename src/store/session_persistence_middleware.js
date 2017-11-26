import { saveToken, getToken, deleteToken } from '../utils/local_storage'
import { GET_SESSION, CREATE_SESSION, DELETE_SESSION } from '../action_types'

export const sessionPersistenceMiddleware = store => next => action => {
  switch (action.type) {
    case GET_SESSION:
      return next({
        type: action.type,
        payload: { token: getToken() }
      });

    case CREATE_SESSION:
      saveToken(action.payload.token);
      return next(action);

    case DELETE_SESSION:
      deleteToken();
    default:
      return next(action);
  }
}