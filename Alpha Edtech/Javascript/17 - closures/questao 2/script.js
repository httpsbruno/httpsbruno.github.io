const TAMANHO_INICIAL = 25;

let meuTexto = document.getElementById("texto");
meuTexto.style.fontSize = TAMANHO_INICIAL +"px";
insereTamanhoHtml(TAMANHO_INICIAL);

var tamanhoLetras = (function() {
     var tamanho = TAMANHO_INICIAL;
     function mudarValor(valor) {
       tamanho  += valor;
     }
     return {
       somar: function() {
          mudarValor(1);
       },
       subtrair: function() {
          mudarValor(-1);
       },
       value: function() {
         return tamanho;
       }
     }
   })();
   

//funcões
function diminuir(){
     if(tamanhoLetras.value() <= 15){
          alert("Você chegou no tamanho mínimo limite!");
     }else{
          tamanhoLetras.subtrair();
          meuTexto.style.fontSize = tamanhoLetras.value() +"px";
          insereTamanhoHtml(tamanhoLetras.value());
     }
     

}
function aumentar(){
     if(tamanhoLetras.value() >=50){
          alert("Você chegou no tamanho máximo limite!");
     }else{
          tamanhoLetras.somar();
          meuTexto.style.fontSize = tamanhoLetras.value() +"px";
          insereTamanhoHtml(tamanhoLetras.value());
     }
}


function insereTamanhoHtml(tamanho){
     document.getElementById("fonte").innerHTML = "Tamanho da Fonte: " + tamanho;
}