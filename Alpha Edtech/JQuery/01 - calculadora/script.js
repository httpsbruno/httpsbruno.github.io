function Calculadora(){

    function setOperand1(_operand1) {
        this.operand1 = _operand1;
        return this;
    }
    function setOperand2(_operand2){
        this.operand2 = _operand2;
        return this;
    } 
    function setOperation(_operation){
        this.operation = _operation;
        return this;
    } 

    function getResult(){
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

    function clearCalculator(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operando = "";
    }
    return{
        setOperand1,
        setOperand2,
        setOperation,
        getResult,
        clearCalculator
    }
};

const calc = Calculadora();
let focusNum1 = true;
$("#num1").focus();

$(document).ready(function(){
    $(".btn").click(function () {
      const myNumber = parseFloat($(this).text());
      if(focusNum1){
        $("#num1").attr("value", function(i, origText){
            return  setNumber(myNumber, origText);
        });
      } else{
        $("#num2").attr("value", function(i, origText){

            return  setNumber(myNumber, origText);
        });
      }
    });


    $("#operadores").click((e) => {
        const myOperator = e.target.id;
        if(myOperator == "plus" || myOperator == "less" || myOperator == "times" || myOperator == "div"){
            const operator = myOperator;
            calc.setOperation(operator);
            focusNum1 = false;
            $("#num2").focus();
        }else if( myOperator == "equal"){
            const num1 = parseFloat($("#num1").attr("value"));
            const num2 = parseFloat($("#num2").attr("value"));
            calc.setOperand1(num1);
            calc.setOperand2(num2);
            const result = calc.getResult();
            $("#result").text("Resultado: " + result);
        } else if(myOperator == "ce"){
            calc.clearCalculator();
            focusNum1 = true;
            $("#num1").attr("value","");
            $("#num2").attr("value","");
            $("#num1").focus();
            $("#result").text("Resultado: ");
        }
      });
  });


function setNumber(newNumber , oldNumber){
    if(typeof oldNumber == "undefined"){
        return newNumber;
    }
    return  oldNumber + "" + newNumber;
}