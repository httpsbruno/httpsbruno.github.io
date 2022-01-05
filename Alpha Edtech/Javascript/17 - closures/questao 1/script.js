function createMultiplier(value){
     return function (number){
       return value * number;
     };
   }

let multiplyBy5 = createMultiplier(5);
   
console.log(multiplyBy5(10));  //50
console.log(multiplyBy5(12));  //60
console.log(multiplyBy5(7));   //35
console.log(multiplyBy5(2));   //10
