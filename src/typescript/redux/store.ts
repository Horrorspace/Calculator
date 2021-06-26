import {createStore, applyMiddleware, compose, Store} from 'redux'
import {saga} from '@redux/saga/saga.ts'
import {rootReducer} from '@redux/reducers/rootReducer.ts'

export const store: Store = createStore(rootReducer, compose(applyMiddleware(saga)));