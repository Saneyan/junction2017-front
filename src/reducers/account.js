import { SAVE_ACCOUNT, DELETE_ACCOUNT } from '../action_types'

const initalState = {
  id: null,
  type: null,
  name_of_company: null,
  job_track: null,
  quiz_answered: false,
  name: null,
  age: null,
  nation: null
};

export function account(state = initalState, action) {
  switch (action.type) {
    case SAVE_ACCOUNT:
      return Object.assign(initalState, action.payload.account);

    case DELETE_ACCOUNT:
    default:
      return initalState;
  }
}