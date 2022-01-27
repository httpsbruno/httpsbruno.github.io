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
            case 'plus':
                resultado = this.operand1 + this.operand2;
                break;
            case 'less':
                resultado = this.operand1 - this.operand2;
              break;
              case 'div':
                resultado = this.operand1 / this.operand2;
              break;
              case 'times':
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

const calc = new Calculadora(0, 0,"");
let focusNum1 = true;
num1.focus();

const divNum = document.getElementById("numeros");
const result = document.getElementById("result");

divNum.addEventListener("click", (e) => {
    const mynumber = parseFloat(e.target.innerText);
    if(focusNum1){
        num1.value += mynumber;
    } else{
        num2.value += mynumber;
    }
    
});

const divOperator = document.getElementById("operadores");
let op = "";

divOperator.addEventListener("click", (e) => {
    const myOperator = e.target.id;
    if(myOperator == "plus" || myOperator == "less" || myOperator == "times" || myOperator == "div"){
        op = myOperator;
        focusNum1 = false;
        num2.focus();
    }else if( myOperator == "equal"){
        const num1 = parseFloat(document.getElementById("num1").value);
        const num2 = parseFloat(document.getElementById("num2").value);
        calc.setOperand1(num1);
        calc.setOperand2(num2);
        calc.setOperation(op);
        const r = calc.getResult();
        result.innerHTML = "Resultado: " + r;
    } else if(myOperator == "ce"){
        calc.clearCalculator();
        focusNum1 = true;
        num1.value = "";
        num2.value = "";
        num1.focus();
        result.innerHTML = "Resultado:";
    }
});
