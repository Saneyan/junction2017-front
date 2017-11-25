import { GET_SESSION, CREATE_SESSION, DELETE_SESSION } from './action_types'

export function getSession() {
  return { type: GET_SESSION };
}

export function createSession(session) {
  return { type: CREATE_SESSION, session };
}

export function deleteSession() {
  return { type: DELETE_SESSION };
}