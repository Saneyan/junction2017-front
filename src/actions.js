import {
  GET_SESSION,
  CREATE_SESSION,
  DELETE_SESSION,
  SAVE_ACCOUNT,
  DELETE_ACCOUNT
} from './action_types'

export function getSession() {
  return { type: GET_SESSION };
}

export function createSession(token) {
  return { type: CREATE_SESSION, payload: { token }};
}

export function deleteSession() {
  return { type: DELETE_SESSION };
}

export function saveAccount(account) {
  return { type: SAVE_ACCOUNT, payload: { account }};
}

export function deleteAccount() {
  return { type: DELETE_ACCOUNT };
}