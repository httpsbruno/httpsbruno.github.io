

function chamaCallback(){
     let palavra = document.getElementById("nome").value;
     getNumeroLetras(palavra, (resultado) => {
          numero = resultado;
          alert(`A sua palavra tem ${numero} letras.`);
      });
}



function getNumeroLetras(palavra, callback){

     let numLetras = palavra.length;

     return callback(numLetras);
}
