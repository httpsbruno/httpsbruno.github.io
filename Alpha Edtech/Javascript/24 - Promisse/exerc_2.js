/*Crie uma promise que após dois segundos retorne 
  uma mensagem de sucesso (resolve);*/
const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Código executado com sucesso! :)'), 2000)
  })
  
  promise
   .then((res) => {console.log("Resolve: " + res);})
   .catch((rej) => {console.log("Reject: " + rej);});