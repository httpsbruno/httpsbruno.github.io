//Exercício A
/*Crie uma função que receba quatro parâmetros e retorne o produto
  da multiplicação de todos eles. Utilize o spread operator para enviar
  os itens de um vetor como parâmetros da sua função;*/
const numbers = [2,6,1,4];

function multiply(a, b, c, d){
	return a * b * c * d;
}

console.log(multiply(...numbers)); //48


//Exercício B
/*Crie uma função que receba dois vetores e retorne a concatenação dos
  dois em um novo vetor. Utilize o spread operator para realizar a concatenação; */
const first   = [1,3,5,7];
const second  = [0,2,4,6];

function concatenate(f,s){
    const third  = [...f,...s];
    return third;
}

const concatenatedArray  = concatenate(first, second);
console.log(concatenatedArray);

//Exercício C
/*Crie uma função que sorteie 10 números inteiros aleatórios entre 1 e 100 e
  armazene-os em um vetor. Em seguida retorne o maior valor sorteado entre os
  10. Utilize o spread operator combinado com a biblioteca “Math” para escrever
  seu código.*/
function myTenNumbers() {
    const array = [];
    for(let i = 0 ; i< 10; i++){
	    let randomNumber = parseInt(Math.random() * (100 - 1) + 1);
        array.push(randomNumber);
	}

    return array;
}

const numbersArray = myTenNumbers();
console.log(`O maior número do vetor: [ ${numbersArray.toString()} ] é: ${Math.max(...numbersArray)}`);