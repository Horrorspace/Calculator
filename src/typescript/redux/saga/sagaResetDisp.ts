import {put} from 'redux-saga/effects'
import {getMainDisp, getOperationsDisp} from '@redux/actions/CalculatorActions.ts'


export function* sagaResetDisp() {
    yield put(getOperationsDisp());
    yield put(getMainDisp());
}