import {takeEvery, put} from 'redux-saga/effects'
import {ActTypes} from '@redux/types/ActTypes.ts'
import {sagaResetDisp} from '@redux/saga/sagaResetDisp.ts'


export function* sagaWatcher() {
    yield takeEvery(ActTypes.putInput, sagaResetDisp);
    yield takeEvery(ActTypes.ADD, sagaResetDisp);
    yield takeEvery(ActTypes.SUB, sagaResetDisp);
    yield takeEvery(ActTypes.MUL, sagaResetDisp);
    yield takeEvery(ActTypes.DIV, sagaResetDisp);
    yield takeEvery(ActTypes.EQ, sagaResetDisp);
    yield takeEvery(ActTypes.toggleRegister, sagaResetDisp);
    yield takeEvery(ActTypes.Clear, sagaResetDisp);
    yield takeEvery(ActTypes.percent, sagaResetDisp);
    yield takeEvery(ActTypes.tegengestelde, sagaResetDisp);
}