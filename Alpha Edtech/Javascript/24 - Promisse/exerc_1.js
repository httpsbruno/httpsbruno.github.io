/*Crie uma promise que após dois segundos retorne 
uma mensagem de erro (reject);*/
const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject('Houve um erro ao executar o código :('), 2000)
  })
  
  promise
   .then((res) => {console.log("Resolve: " + res);})
   .catch((rej) => {console.log("Reject: " + rej);});