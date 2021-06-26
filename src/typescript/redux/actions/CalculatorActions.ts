import {ActTypes} from '@redux/types/ActTypes.ts'

export const getMainDisp = (): IreduxAction => {
    return {
        type: ActTypes.getMainDisp,
    }
};
export const getOperationsDisp = (): IreduxAction => {
    return {
        type: ActTypes.getOperationsDisp,
    }
};
export const putInput = (num: inputNum = 0): IreduxAction => {
    return {
        type: ActTypes.putInput,
        input: num,
    }
};
export const toggleRegister = (): IreduxAction => {
    return {
        type: ActTypes.toggleRegister,
    }
};
export const ADD = (): IreduxAction => {
    return {
        type: ActTypes.ADD,
    }
};
export const SUB = (): IreduxAction => {
    return {
        type: ActTypes.SUB,
    }
};
export const MUL = (): IreduxAction => {
    return {
        type: ActTypes.MUL,
    }
};
export const DIV = (): IreduxAction => {
    return {
        type: ActTypes.DIV,
    }
};
export const EQ = (): IreduxAction => {
    return {
        type: ActTypes.EQ,
    }
};
export const Clear = (): IreduxAction => {
    return {
        type: ActTypes.Clear,
    }
};
export const percent = (): IreduxAction => {
    return {
        type: ActTypes.percent,
    }
};
export const tegengestelde = (): IreduxAction => {
    return {
        type: ActTypes.tegengestelde,
    }
};