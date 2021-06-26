import {Dispatch} from 'redux'
import {putInput, toggleRegister, ADD, SUB, MUL, DIV, EQ, Clear, percent, tegengestelde} from '@redux/actions/CalculatorActions.ts'


export const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
      putInput: (num: inputNum = 0) => {
        dispatch(putInput(num));
      },
      toggleRegister: () => {
        dispatch(toggleRegister())
      },
      ADD: () => {
        dispatch(ADD())
      },
      SUB: () => {
        dispatch(SUB())
      },
      MUL: () => {
        dispatch(MUL())
      },
      DIV: () => {
        dispatch(DIV())
      },
      EQ: () => {
        dispatch(EQ())
      },
      Clear: () => {
        dispatch(Clear())
      },
      percent: () => {
        dispatch(percent())
      },
      tegengestelde: () => {
        dispatch(tegengestelde())
      },
    }
};