import { markAsAnswered, getAccountData, saveAccountData } from './utils/local_storage'
import store from '../store/store'
import { saveAccount, createSession } from '../actions'

export function postRequirements(params) {
  saveAccountData(params);
}

export function getUser() {
  return getAccountData();
}

export function loginWithFacebook() {
  store.dispatch(createSession('xxx'));
}

export function markAsAnsweredQuiz() {
  markAsAnswered();
  store.dispatch(saveAccount(getAccountData()));
}