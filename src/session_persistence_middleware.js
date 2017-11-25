import { GET_SESSION, CREATE_SESSION, DELETE_SESSION} from './action_types'

export const sessionPersistenceMiddleware = store => next => action => {
  switch (action.type) {
    case GET_SESSION:
      return next({
        type: action.type,
        payload: localStorage.getItem('token')
      });

    case CREATE_SESSION:
      localStorgae.setItem('token', 'xxx');
      return next(action);

    case DELETE_SESSION:
      localStorage.removeItem('token');
    default:
      return next(action);
  }
}