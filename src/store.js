import Vue from 'vue'

// Import Revue and Redux
import Revue from 'revue'
import { createStore, applyMiddleware } from 'redux'
import { sessionPersistenceMiddleware } from './session_persistence_middleware'
import actions from './actions'

import account from './reducers'

const reduxStore = createStore(account, {}, applyMiddleware(sessionPersistenceMiddleware));
const store = new Revue(Vue, reduxStore, actions);

export default store