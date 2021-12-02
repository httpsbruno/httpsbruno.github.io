
let numeros = [0,0,0,0];

function memorizarNumeros(){
     numeros[0] = parseFloat(document.querySelector("#numeros .num1").value);
     numeros[1] = parseFloat(document.querySelector("#numeros .num2").value);
     numeros[2] = parseFloat(document.querySelector("#numeros .num3").value);
     numeros[3] = parseFloat(document.querySelector("#numeros .num4").value);

     //mostrar números
     innerHtmlNumbers(numeros[0],numeros[01],numeros[2],numeros[3]);
}

function innerHtmlNumbers(n1,n2,n3,n4){
     document.querySelector("#ordenar .numeros-memoria .mem1").innerHTML = n1;
     document.querySelector("#ordenar .numeros-memoria .mem2").innerHTML = n2;
     document.querySelector("#ordenar .numeros-memoria .mem3").innerHTML = n3;
     document.querySelector("#ordenar .numeros-memoria .mem4").innerHTML = n4;
}

function ordemCrescente(){
     var length = numeros.length;
     for (let i = 0; i < length; i++){
          for (let j = 0; j < (length - i -1); j++){
               if (numeros[j] > numeros[j+1]){
                    var aux = numeros[j];
                    numeros[j] = numeros[j+1];
                    numeros[j+1] = aux;
               }
          }
     }

     //mostrar números
     innerHtmlNumbers(numeros[0],numeros[01],numeros[2],numeros[3]);
}

function ordemDecrescente(){
     var length = numeros.length;
     for (let i = 0; i < length; i++){
          for (let j = 0; j < (length - i -1); j++){
               if (numeros[j] < numeros[j+1]){
                    var aux = numeros[j];
                    numeros[j] = numeros[j+1];
                    numeros[j+1] = aux;
               }
          }
     }

     //mostrar números
     innerHtmlNumbers(numeros[0],numeros[01],numeros[2],numeros[3]);
}