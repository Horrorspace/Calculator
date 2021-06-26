export default class MathNum {
    public constructor() {
      
    }
    public static getSum(num1: number, num2: number): number {
      return num1 + num2
    }
    public static getDiff(num1: number, num2: number): number {
      return num1 - num2
    }
    public static getProd(num1: number, num2: number): number {
      return num1 * num2
    }
    public static getQuotient(num1: number, num2: number): number {
      return num1 / num2
    }
    public static ADD({results, operations}: ObjResult): ObjResult {
      const len: number = operations
         .filter((val: operation): boolean => val === 'ADD')
         .length
      if(len > 1) {
        const index: number = operations.indexOf('ADD');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getSum(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        const prodObj: ObjResult = {
          results: prodResult,
          operations: prodOperations,
        };
        return MathNum.ADD(prodObj);
      }
      else if(len === 1) {
        const index: number = operations.indexOf('ADD');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getSum(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        return {
          results: prodResult,
          operations: prodOperations
        }
      }
      else {
        return {
          results,
          operations
        }
      }
    }
    public static SUB({results, operations}: ObjResult): ObjResult {
      const len: number = operations
         .filter((val: operation): boolean => val === 'SUB')
         .length
      if(len > 1) {
        const index: number = operations.indexOf('SUB');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getDiff(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        const prodObj: ObjResult = {
          results: prodResult,
          operations: prodOperations,
        };
        return MathNum.SUB(prodObj);
      }
      else if(len === 1) {
        const index: number = operations.indexOf('SUB');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getDiff(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        return {
          results: prodResult,
          operations: prodOperations
        }
      }
      else {
        return {
          results,
          operations
        }
      }
    }
    public static MUL({results, operations}: ObjResult): ObjResult {
      const len: number = operations
         .filter((val: operation): boolean => val === 'MUL')
         .length
      if(len > 1) {
        const index: number = operations.indexOf('MUL');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getProd(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        const prodObj: ObjResult = {
          results: prodResult,
          operations: prodOperations,
        };
        return MathNum.MUL(prodObj);
      }
      else if(len === 1) {
        const index: number = operations.indexOf('MUL');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getProd(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        return {
          results: prodResult,
          operations: prodOperations
        }
      }
      else {
        return {
          results,
          operations
        }
      }
    }
    public static DIV({results, operations}: ObjResult): ObjResult {
      const len: number = operations
         .filter((val: operation): boolean => val === 'DIV')
         .length
      if(len > 1) {
        const index: number = operations.indexOf('DIV');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getQuotient(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        const prodObj: ObjResult = {
          results: prodResult,
          operations: prodOperations,
        };
        return MathNum.DIV(prodObj);
      }
      else if(len === 1) {
        const index: number = operations.indexOf('DIV');
        const prodResult: number[] = results
          .map((val: number, i: number): number => 
            i === index ? MathNum.getQuotient(val, results[i+1]) : val);
        prodResult.splice(index+1, 1);
        const prodOperations: operationList = operations.slice();
        prodOperations.splice(index, 1);
        return {
          results: prodResult,
          operations: prodOperations
        }
      }
      else {
        return {
          results,
          operations
        }
      }
    }
    public static getSymb(operation: operation): string {
      switch(operation) {
        case 'ADD':
          return '+'
        case 'SUB':
          return '-'
        case 'MUL':
          return '*'
        case 'DIV':
          return '/'
      }
    }
    public static getPercent(num: number): number {
      return num / 100
    }
    public static getTegengestelde(num: number): number {
      return num * -1
    }
  }