


function escrevendo(){
    const TEXTO = "Eu não vou especular sobre o quanto quente o professor pode ser";
    var num = 0;
    var cont = 0;
    var apaga = 0;
    var delete_p = 0;
    
    let num_repetitons = parseInt(document.getElementById("repetition").value);

    while (num < num_repetitons){
        var lista = document.getElementById("teste");
        var li = document.createElement("li");
        li.innerHTML = TEXTO;
        lista.appendChild(li);
    
        num++;
        cont++;

      if (cont == 11){
           var li_del = document.getElementsByTagName("li");
            while( delete_p < 11){
               lista.removeChild;
                delete_p ++;
            }
            apaga++;
            delete_p = 0;
            cont = 0;
        }
   
    }


    var r1 = document.getElementById("R1");
    r1.innerHTML = "O quadro foi apagado " + apaga + " vezes.";
 
    var r2 = document.getElementById("R2");
    r2.innerHTML = "A quantidade de linhas " + cont;
}

