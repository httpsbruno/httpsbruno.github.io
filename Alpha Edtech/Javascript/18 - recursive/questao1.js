//

function fatorial(number){
    //0! e 1! tem como resultado 1
    if(number === 1 || number === 0){
  	    return 1;
    }
  
    //number negativo ou Not a Number
    if(number < 0 || isNaN(number)){
  	    return "Parametro inválido";
    }
  
    return number * fatorial(number - 1);
}

console.log(fatorial(-1)); //"Parametro inválido"
console.log(fatorial(0)); //1
console.log(fatorial(1)); //1
console.log(fatorial(4)); //24
console.log(fatorial(8)); //40320
console.log(fatorial("oito")); //"Parametro inválido"