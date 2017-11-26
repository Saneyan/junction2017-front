import { getToken, getAccountData } from './utils/local_storage'
import { getSessionNameFromUrl } from './utils/session_name'
import { getSession, saveAccount } from '../actions'
import store from '../store/store'

export function init() {
  // Before opening main view, check if a user has logged into the app.
  // If not, open login screen. Otherwise continue to initialize main view.
  if (getToken() === null) {
    window.f7.loginScreen();
  } else {
    const accountData = getAccountData();

    if (accountData) {
      store.dispatch(saveAccount(accountData));
    } else {
      window.f7.mainView.router.load({
        url: '/sign-up/user-type/'
      });
    }
  }

  store.dispatch(getSession());
}