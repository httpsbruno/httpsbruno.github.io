/*Crie uma função que receba um número inteiro, maior que zero e que retorne 
  uma Promise que retorna sucesso, caso o número seja par ou primo e retorne
  erro, caso não cumpra este requisito*/

async function numberPairOrPrime(number){
    const promise = await  new Promise((resolve, reject) => {
        //Is bigger than 0 and Integer?
        if(number > 0 && Number.isInteger(number)){
            //Is a pair or prime number?
            if(number%2 == 0 || isPrime(number) == true){
                resolve(`O número ${number} É par ou primo.`);
            } else{
                reject(`O número ${number} NÃO É par ou primo.`);
            }
        }
        else{
           reject(`O número ${number} NÃO É um inteiro maior que 0`);
        }
    })
    .then((res) => {
        //console.log(res);
         return res;
    })
    .catch((rej) => {
        //console.log(rej);
        return rej
    }) 

    console.log(promise);
    return "promise oi oi"; 
}

//Check if the number is Prime (boolean)
const isPrime = (num) => {
for (let i = 2; i < num; i++)
  if (num % i === 0) {
    return false;
  }
return num > 1;
};

//test
console.log(numberPairOrPrime(2)); //resolve
console.log(numberPairOrPrime(9)); //reject
console.log(numberPairOrPrime(-4)); // O número precisa se um inteiro maior que 0
console.log(numberPairOrPrime(15)); //reject
console.log(numberPairOrPrime(31)); //resolve
console.log(numberPairOrPrime(49)); //reject

