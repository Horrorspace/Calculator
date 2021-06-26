import {combineReducers, Reducer} from 'redux'
import {calcReducer} from '@redux/reducers/calcReducer.ts'


export const rootReducer: Reducer = combineReducers({
    calculator: calcReducer,
});