import { getSessionNameFromUrl } from './session_name'
import { saveAccount } from '../../actions';

const sessionName = getSessionNameFromUrl();
const prefix = (sessionName || '') + '_';
const tokenKey = `${prefix}token`;
const accountDataKey = `${prefix}account_data`;

export function getToken() {
  return localStorage.getItem(tokenKey);
}

export function saveToken(token) {
  localStorage.setItem(tokenKey, token);
}

export function deleteToken() {
  localStorage.removeItem(tokenKey);
}

export function getAccountData() {
  const accountData = localStorage.getItem(accountDataKey);
  if (accountData !== null) {
    return JSON.parse(accountData);
  }
  return null;
}

export function saveAccountData(accountData) {
  localStorage.setItem(accountDataKey, JSON.stringify(accountData));
}

export function markAsAnswered() {
  const accountData = getAccountData();
  if (accountData !== null) {
    saveAccountData({
      ...accountData,
      quiz_answered: true
    });
  }
}