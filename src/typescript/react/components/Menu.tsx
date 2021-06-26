import React from 'react'


export default class Menu extends React.Component<any, ImenuState> {
    constructor(props: any) {
      super(props);
      this.state = {
        idArr: ['zero', 'one', 'two', 'three', 'four', 'five',
        'six', 'seven', 'eight', 'nine', 'add', 'subtract', 'multiply',
        'divide', 'decimal', 'procent', 'tegengestelde', 'clear'],
        symbArr: ['0', '1', '2', '3', '4', '5',
        '6', '7', '8', '9', '+', '-', '*',
        '/', '.', '%', '+/-', 'C'],
      };
      this.handleClick = this.handleClick.bind(this);
      this.inputValidator = this.inputValidator.bind(this);
      this.splitStr = this.splitStr.bind(this);
      this.splitCallback = this.splitCallback.bind(this);
      this.handlePush = this.handlePush.bind(this);
      this.synthClick = this.synthClick.bind(this);
    }

    inputValidator(num: number): inputNum {
      switch(num) {
        case 0:
          return 0
        case 1:
          return 1
        case 2:
          return 2
        case 3:
          return 3
       case 4:
          return 4
        case 5:
          return 5
        case 6:
          return 6
       case 7:
          return 7
        case 8:
          return 8
        case 9:
          return 9
        default:
          return 0
      }
    }

   

    splitStr(str: string): string[] {
      const operationRegExp: RegExp = /[\+\-\*\\\=]/g;
      const operationTextArr: string[] = str.split('');
      let firstSign: string = '+';
      let signIndex: number = 0;
      const firstSignObj: RegExpMatchArray|null = str.match(operationRegExp);
      if(firstSignObj !== null) {
        firstSign = firstSignObj[0];
        signIndex = operationTextArr.indexOf(firstSign);
        if(signIndex === 0) {
          firstSign = firstSignObj[1];
        }
        signIndex = operationTextArr.indexOf(firstSign, 1);
      }
      
      const firstPart: string = operationTextArr
        .slice(0, signIndex+1)
        .join('');
      const secondPart: string = operationTextArr
        .slice(signIndex, operationTextArr.length)
        .join('');
      return [firstPart, secondPart]
    }

    splitCallback(input: string[]): string[] {
      if(input[input.length-1].length > 34) {
        return this.splitCallback([...input.slice(0, input.length-1), ...this.splitStr(input[input.length-1])])
      }
      else {
        return input
      }
    }

    handleClick(e: any) {
      const inputId = this.state.idArr.slice(0, 10);
      if(inputId.indexOf(e.target.id) !== -1) {
        const indexNum: number = this.state.idArr.indexOf(e.target.id);
        const inputNum: inputNum = this.inputValidator(parseInt(this.state.symbArr[indexNum], 10));
        this.props.putInput(inputNum)
      }
      else {
        switch(e.target.id) {
          case 'add':
            this.props.ADD();
            break;
          case 'subtract':
            this.props.SUB();
            break;
          case 'multiply':
            this.props.MUL();
            break;
          case 'divide':
            this.props.DIV();
            break;
          case 'decimal':
            this.props.toggleRegister();
            break;
          case 'procent':
            this.props.percent();
            break;
          case 'tegengestelde':
            this.props.tegengestelde();
            break;
          case 'clear':
            this.props.Clear();
            break;
          case 'equals':
            this.props.EQ();
            break;
        }
      }
    }

    synthClick(id: string): void {
      const element: HTMLElement | null = document.getElementById(id);
      if(element !== null) {
        element.click();
      }
    }

    handlePush(e: any): void {
      if(this.state.symbArr.indexOf(`${e.key}`) !== -1) {
        const elementIndex: number = this.state.symbArr.indexOf(`${e.key}`);
        this.synthClick(this.state.idArr[elementIndex])
      }
      else if(`${e.key}` === '=' || `${e.keycode}` === '13') {
        this.synthClick('equals')
      }
      else if(`${e.key}` === 'Escape') {
        this.synthClick('clear')
      }
      else if(`${e.key}` === ',') {
        this.synthClick('decimal')
      }
    }

    componentDidMount() {
      document.addEventListener('keydown', this.handlePush)
    }

    componentWillUnmount() {
      document.removeEventListener('keydown', this.handlePush);
    }

    render() {
      const liArr = this.state.idArr.map((id: string, i: number) => 
        <li className="menu-item">
          <button id={id} type="button" className="menu-btn" onClick={this.handleClick}>{this.state.symbArr[i]}</button>
        </li>
      );
      let operationText;
      if(this.props.displayOperations.length > 34) {
        let splitArr: string[] = this.splitStr(this.props.displayOperations);
        let count: number = 0;
        while(splitArr[splitArr.length-1].length > 34 && count < 5) {
          count++;
          splitArr = [...splitArr.slice(0, splitArr.length-1), ...this.splitStr(splitArr[splitArr.length-1])];
        }

        operationText = splitArr.map(
          (val: string): any => 
          <>
            {val}<br />
          </>
          );
      }
      else {
        operationText = this.props.displayOperations;
      }
      
      
      return (
        <main className="app-wrap">
          <section className="calculator">
          <h2 className="hidden">Calculator</h2>
          <div id="display" className="display-wrap">
            <div className="result-wrap">
              <h3 className="result">{this.props.mainDisplay}</h3>
            </div>
            <div className="expression-wrap">
              <p className="expression">{operationText}</p>
            </div>
          </div>
          <div className="menu-wrap">
            <ul className="menu-list">
              {liArr}
              <li className="menu-item">
                <button id="equals" type="button" className="menu-btn__equals" onClick={this.handleClick}>=</button>
              </li>
            </ul>
          </div>
        </section>
      </main>
      )
    }
}