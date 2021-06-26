import {Reducer} from 'redux'
import {ActTypes} from '@redux/types/ActTypes.ts'
import {CalculatorApp} from '@core/classes/CalculatorApp.ts'


const defaultState: IreduxState = {
    displayOperations: '',
    mainDisplay: '0',
};

export const calcReducer: Reducer = (state: IreduxState = defaultState, action: IreduxAction): IreduxState => {
    switch (action.type) {
        case ActTypes.getMainDisp:
            return {
            ...state,
            mainDisplay: CalculatorApp.getMainDisp(),
            }
        case ActTypes.getOperationsDisp:
            return {
            ...state,
            displayOperations: CalculatorApp.getOperationsDisp(),
            }
        case ActTypes.putInput:
            if(typeof(action.input) === 'number') {
            CalculatorApp.putInput(action.input);
            }
            return state;
        case ActTypes.toggleRegister:
            CalculatorApp.toggleRegister();
            return state;
        case ActTypes.ADD:
            CalculatorApp.ADD();
            return state;
        case ActTypes.SUB:
            CalculatorApp.SUB();
            return state;
        case ActTypes.MUL:
            CalculatorApp.MUL();
            return state;
        case ActTypes.DIV:
            CalculatorApp.DIV();
            return state;
        case ActTypes.EQ:
            CalculatorApp.EQ();
            return state;
        case ActTypes.Clear:
            CalculatorApp.Clear();
            return state;
        case ActTypes.percent:
            CalculatorApp.percent();
            return state;
        case ActTypes.tegengestelde:
            CalculatorApp.tegengestelde();
            return state;
        default:
            return state;
    }
}