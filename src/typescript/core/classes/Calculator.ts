import MathNum from '@core/classes/MathNum.ts'

export default class Calculator implements ICalc {
    private static resLen: number = 12;
    private static expLen: number = 34;
    private currentInputNum: currentInputNum;
    private currentNum: number;
    private inputAfterDot: boolean;
    private resultLimit: boolean;
    private expLimit: boolean;
    private resultStatus: boolean;
    private operationList: operationList;
    private numList: numList;
    private displayOperations: string;
    private displayOperationsLog: string;
    private mainDisplay: string;
    private result: number;
    private isNegative: boolean;
    private sign: string;
    
    public constructor() {
      this.currentInputNum = ['', ''];
      this.currentNum = 0;
      this.inputAfterDot = false;
      this.resultLimit = false;
      this.expLimit = false;
      this.resultStatus = false;
      this.operationList = [];
      this.numList = [];
      this.displayOperations = '';
      this.displayOperationsLog = '';
      this.mainDisplay = '0';
      this.result = 0;
      this.isNegative = false;
      this.sign = '';
    }
    public putInput(num: inputNum): void {
      this.resultStatus = false;
      let lArr: number[] = this.currentInputNum
        .map((val: string): number => val.length);
      let l: number = lArr.reduce((a: number, b: number): number => a + b);
      if(l < Calculator.resLen) {
        this.resultLimit = false;
        if(this.inputAfterDot) {
          let inputArr: string[] = this.currentInputNum[1].split('');
          inputArr = [...inputArr, String(num)];
          this.currentInputNum[1] = inputArr.join('');
        }
        else {
          if(this.currentInputNum[0] === '0') {
            this.currentInputNum[0] = String(num);
          }
          else {
            let inputArr: string[] = this.currentInputNum[0].split('');
            inputArr = [...inputArr, String(num)];
            this.currentInputNum[0] = inputArr.join('');
          }
        }
      }
      else {
        this.resultLimit = true;
      }
      this.currentNum = this.convertToNum(this.currentInputNum);
    }
    public toggleRegister(): void {
      this.inputAfterDot = true;
    }
    private convertToNum(currentInputNum: currentInputNum): number {
      let beforeDot: number;
      let afterDot: number;
      if(currentInputNum[0] !== '') {
        beforeDot = parseInt(currentInputNum[0]);
      }
      else {
        beforeDot = 0;
      }
      if(currentInputNum[1] !== '') {
        afterDot = parseFloat(`0.${currentInputNum[1]}`);
      }
      else {
        afterDot = 0;
      }
      if(this.isNegative) {
        return (beforeDot + afterDot) * (-1);
      }
      else {
        return beforeDot + afterDot;
      }
      
    }
    public ADD(): void {
      this.inputAfterDot = false;
      if(this.currentInputNum[0] !== '' || this.currentInputNum[1] !== '') {
        this.numList = [...this.numList, this.currentNum];
        this.operationList = [...this.operationList, 'ADD'];
        this.currentInputNum = ['', ''];
      }
      else if(this.operationList.length !== 0 && this.currentInputNum[0] === '' && this.currentInputNum[1] === '') {
        this.operationList[this.operationList.length - 1] = 'ADD';
      }
      else if(this.resultStatus) {
        this.numList = [...this.numList, this.result];
        this.operationList = [...this.operationList, 'ADD'];
        this.resultStatus = false;
      }
      this.isNegative = false;
    }
    public SUB(): void {
      this.inputAfterDot = false;
      if(this.currentInputNum[0] !== '' || this.currentInputNum[1] !== '') {
        this.numList = [...this.numList, this.currentNum];
        this.operationList = [...this.operationList, 'SUB'];
        this.currentInputNum = ['', ''];
      }
      else if(this.operationList.length !== 0 && this.currentInputNum[0] === '' && this.currentInputNum[1] === '') {
        this.operationList[this.operationList.length - 1] = 'SUB';
      }
      else if(this.resultStatus) {
        this.numList = [...this.numList, this.result];
        this.operationList = [...this.operationList, 'SUB'];
        this.resultStatus = false;
      }
      this.isNegative = false;
    }
    public MUL(): void {
      this.inputAfterDot = false;
      if(this.currentInputNum[0] !== '' || this.currentInputNum[1] !== '') {
        this.numList = [...this.numList, this.currentNum];
        this.operationList = [...this.operationList, 'MUL'];
        this.currentInputNum = ['', ''];
      }
      else if(this.operationList.length !== 0 && this.currentInputNum[0] === '' && this.currentInputNum[1] === '') {
        this.operationList[this.operationList.length - 1] = 'MUL';
      }
      else if(this.resultStatus) {
        this.numList = [...this.numList, this.result];
        this.operationList = [...this.operationList, 'MUL'];
        this.resultStatus = false;
      }
      this.isNegative = false;
    }
    public DIV(): void {
      this.inputAfterDot = false;
      if(this.currentInputNum[0] !== '' || this.currentInputNum[1] !== '') {
        this.numList = [...this.numList, this.currentNum];
        this.operationList = [...this.operationList, 'DIV'];
        this.currentInputNum = ['', ''];
      }
      else if(this.operationList.length !== 0 && this.currentInputNum[0] === '' && this.currentInputNum[1] === '') {
        this.operationList[this.operationList.length - 1] = 'DIV';
      }
      else if(this.resultStatus) {
        this.numList = [...this.numList, this.result];
        this.operationList = [...this.operationList, 'DIV'];
        this.resultStatus = false;
      }
      this.isNegative = false;
    }
    public EQ(): void {
      this.getOperationsDisp();
      this.numList = [...this.numList, this.currentNum];
      this.currentInputNum = ['', ''];
      this.result = this.calcResult();
      
      this.numList = [];
      this.operationList = [];
      this.resultStatus = true;
      this.isNegative = false;
    }
    public Clear(): void {
      this.currentInputNum = ['', ''];
      this.currentNum = 0;
      this.inputAfterDot = false;
      this.resultLimit = false;
      this.expLimit = false;
      this.resultStatus = false;
      this.operationList = [];
      this.numList = [];
      this.displayOperations = '';
      this.displayOperationsLog = '';
      this.mainDisplay = '0';
      this.result = 0;
      this.isNegative = false;
    }
    public percent(): void {
      this.DIV();
      this.putInput(1);
      this.putInput(0);
      this.putInput(0);
    }
    public tegengestelde(): void {
      if(this.isNegative) {
        this.isNegative = false;
      }
      else {
        this.isNegative = true
      }
      this.currentNum = this.convertToNum(this.currentInputNum);
    }
    private calcResult(): number {
      const CalcData: ObjResult = {
        results: this.numList,
        operations: this.operationList,
      }
      const {results, operations} = MathNum.ADD(MathNum.SUB(MathNum.MUL(MathNum.DIV(CalcData))));
      return results[0];
    }
    public getOperationsDisp(): string {
      if(this.operationList.length !== 0) {
        this.displayOperationsLog = this.operationList
          .map((val: operation, i: number): string => {
            return `${this.numList[i]}${MathNum.getSymb(this.operationList[i])}`
          })
          .join('');
        if(!this.inputAfterDot && this.currentInputNum[0] !== '') {
          this.displayOperationsLog = `${this.displayOperationsLog}${this.getMainDisp()}`;
        }
        else if (this.inputAfterDot) {
          this.displayOperationsLog = `${this.displayOperationsLog}${this.getMainDisp()}`;
        }
        return this.displayOperationsLog
      }
      else if(!this.inputAfterDot && (this.currentInputNum[0] !== '' || this.currentInputNum[1] !== '')) {
        this.displayOperationsLog = `${this.getMainDisp()}`;
        return this.displayOperationsLog;
      }
      else if(this.inputAfterDot) {
        this.displayOperationsLog = `${this.getMainDisp()}`;
        return this.displayOperationsLog;
      }
      else if(this.resultStatus) {
        return `${this.displayOperationsLog}=${this.getMainDisp()}`;
      }
      else {
        return '';
      }
    }
    public getMainDisp(): string {
      if(this.isNegative) {
        this.sign = '-'
      }
      else {
        this.sign = ''
      }
      if(this.resultStatus) {
        let rawResult: string = `${this.result}`;
        let resultLength: number = rawResult.length;
        if(resultLength > Calculator.resLen) {
          rawResult = `${Math.round(this.result)}`;
          resultLength = rawResult.length;
          if(resultLength > Calculator.resLen) {
            return `${this.result.toExponential(8)}`
          }
          else {
            const resRegExp: RegExp = /0*$/;
            const rawResultStr: string = `${this.result.toFixed(4)}`;
            return rawResultStr.replace(resRegExp, '');
          }
        }        
        else if(resultLength <= Calculator.resLen && Number.isInteger(this.result)) {
          return `${this.result}`
        }
        else {
          const resRegExp: RegExp = /0*$/;
          const rawResultStr: string = `${this.result.toFixed(4)}`;
          return rawResultStr.replace(resRegExp, '');
        }
      }
      else if(!this.inputAfterDot && (this.currentInputNum[0] !== '' || this.currentInputNum[1] !== '')) {
        return `${this.sign}${this.currentInputNum[0]}`
      }
      else if(this.inputAfterDot && this.currentInputNum[0] !== '') {
        return `${this.sign}${this.currentInputNum[0]}.${this.currentInputNum[1]}`
      }
      else if(this.inputAfterDot && this.currentInputNum[0] === '') {
        return `${this.sign}0.${this.currentInputNum[1]}`
      }
      else if(this.operationList.length !== 0) {
        return MathNum.getSymb(this.operationList[this.operationList.length - 1]);
      }
      else {
        return '0'
      }
    }
  }