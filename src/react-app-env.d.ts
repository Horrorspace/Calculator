declare module '*.ts';
declare module '*.tsx';
declare type inputNum = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
declare type operation = 'ADD' | 'SUB' | 'MUL' | 'DIV';
declare type operationSign = '+' | '-' | '*' | '/' | '=' | '%' | '+/-';
declare type currentInputNum = [string, string];
declare type operationList = Array<operation>;
declare type numList = Array<number>;
declare type ObjResult = {results: number[], operations: operationList};
declare type matchResult = [
  string,
]

declare interface ICalc {
    putInput(num: inputNum): void;
    toggleRegister(): void;
    ADD(): void;
    SUB(): void;
    MUL(): void;
    DIV(): void;
    EQ(): void;
    Clear(): void;
    percent(): void;
    tegengestelde(): void;
    getOperationsDisp(): string;
    getMainDisp(): string;
}
declare interface IreduxState {
    displayOperations: string;
    mainDisplay: string;
}
declare interface IreduxAction {
    type: string;
    input?: inputNum;
}
declare interface ImenuState {
    idArr: string[],
    symbArr: string[],
}