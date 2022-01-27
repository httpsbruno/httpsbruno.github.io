class Calculadora{

    constructor(_operand1, _operand2, _operation){
        this.operand1 = _operand1;
        this.operand2 = _operand2;
        this.operation = _operation;
    }

    setOperand1(_operand1){
        this.operand1 = _operand1;
    } 
    setOperand2(_operand2){
        this.operand2 = _operand2;
    } 
    setOperation(_operation){
        this.operation = _operation;
    } 

    getResult(){
        const op = this.operation;
        let resultado = 0;
        switch (op) {
            case 'soma':
                resultado = this.operand1 + this.operand2;
                break;
            case 'subtracao':
                resultado = this.operand1 - this.operand2;
              break;
              case 'divisao':
                resultado = this.operand1 / this.operand2;
              break;
              case 'multiplicacao':
                resultado = this.operand1 * this.operand2;
              break;
            default:
              resultado = "Sem operador";
          }

        return resultado;
    }

    clearCalculator(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operando = "";
    }

}



const calc = new Calculadora(1, 1,"");
console.log(calc.getResult());// sem operador
calc.setOperand1(5);
calc.setOperation("soma");
console.log(calc.getResult()); // 5 + 1 = 6
calc.setOperand2(2);
calc.setOperation("multiplicacao");
console.log(calc.getResult()); //5 * 2 = 10

