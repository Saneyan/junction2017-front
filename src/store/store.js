import Vue from 'vue'
import Revue from 'revue'
import { createStore, applyMiddleware } from 'redux'
import { sessionPersistenceMiddleware } from './session_persistence_middleware'
import actions from '../actions'
import reducers from '../reducers'

const reduxStore = createStore(reducers, {}, applyMiddleware(sessionPersistenceMiddleware));
const store = new Revue(Vue, reduxStore, actions);

export default store.store