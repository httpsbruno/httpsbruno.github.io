const carRunning = [
     {
         nome: "Edna",
         carro: {
             velMax: 180,
             velMin: 210,
             skid: 0
         },
         tipoCarro: "",
         velVolta: 0,
         pontoVolta: 0,
         ponto: 0,
         nivel: 0
     },
 
     {   
         nome: "Juca",
         carro: {
             velMax: 181,
             velMin: 211,
             skid: 0
         },
         tipoCarro: "",
         velVolta: 0,
         pontoVolta: 0,
         ponto: 0,
         nivel: 0
     },

     {
         nome: "Pedro",
         carro: {
             velMax: 182,
             velMin: 213,
             skid: 0    
         },
         tipoCarro: "",
         velVolta: 0,
         pontoVolta: 0,
         ponto: 0,
         nivel: 0
     }
 ];
 




 let cars = {"popular": {
     "velVolta_maxima": {"min": 180, "max": 200}, 
     "velVolta_minima": {"min": 110, "max": 130}, 
     "derrapagem": {"min": 0.3, "max": 0.4}
   },
   "sport": {
     "velVolta_maxima": {"min": 195, "max": 215}, 
     "velVolta_minima": {"min": 125, "max": 145}, 
     "derrapagem": {"min": 0.2, "max": 0.3}
   },
   "supersport": {
     "velVolta_maxima": {"min": 210, "max": 230}, 
     "velVolta_minima": {"min": 140, "max": 160}, 
     "derrapagem": {"min": 0.1, "max": 0.175}
   },
 }

 let TipoCorrida = ""

function setRaridade (element,index,array){
     var rarity = Math.random();

     if (rarity < 0.6){
          carRunning[index].tipoCarro = "Popular";
          carRunning[index].carro.velMax = Math.random() * (cars.popular.velVolta_maxima.min - cars.popular.velVolta_maxima.max) +cars.popular.velVolta_maxima.min;
          carRunning[index].carro.velMin = Math.random() * (cars.popular.velVolta_minima.min - cars.popular.velVolta_minima.max) + cars.popular.velVolta_minima.min;
          carRunning[index].carro.skid = ((Math.random() * (cars.popular.derrapagem.min - cars.popular.derrapagem.max) + cars.popular.derrapagem.min) );
     } else if (rarity <= 0.95){
          carRunning[index].tipoCarro = "Sport";
          carRunning[index].carro.velMax = Math.random() * (cars.sport.velVolta_maxima.min - cars.sport.velVolta_maxima.max) +cars.sport.velVolta_maxima.min;    
          carRunning[index].carro.velMin = Math.random() * (cars.sport.velVolta_minima.min - cars.sport.velVolta_minima.max) + cars.sport.velVolta_minima.min;
          carRunning[index].carro.skid = ((Math.random() * (cars.sport.derrapagem.min - cars.sport.derrapagem.max) + cars.sport.derrapagem.min) );
     }else {
          carRunning[index].tipoCarro = "SuperSport";
          carRunning[index].carro.velMax = Math.random() * (cars.supersport.velVolta_maxima.min - cars.supersport.velVolta_maxima.max) +cars.supersport.velVolta_maxima.min;    
          carRunning[index].carro.velMin = Math.random() * (cars.supersport.velVolta_minima.min - cars.supersport.velVolta_minima.max) + cars.supersport.velVolta_minima.min;
          carRunning[index].carro.skid = ((Math.random() * (cars.supersport.derrapagem.min - cars.supersport.derrapagem.max) + cars.supersport.derrapagem.min) );
     }
}

function corrida(element, index, array){
     let porcentagem = parseInt(carRunning[index].nivel);
      porcentagem /= 100; 
     let min = carRunning[index].carro.velMin;
     let max = carRunning[index].carro.velMax;
     //velVolta = Math.random() * ((min * (1 + x%)) - max * (1 + x%)) + min
     carRunning[index].velVolta = (Math.random() * ((min * (1 + porcentagem)) - (max * (1 + porcentagem))) + (min * (1 + porcentagem)));
     carRunning[index].velVolta *= carRunning[index].carro.skid + 1;
}

function alteraNivel(element, index, array){
     if ( carRunning[index].nivel < 10){
          carRunning[index].nivel = parseInt(carRunning[index].ponto/450);
     } 
     if ( carRunning[index].nivel == 10){
          document.querySelector(".level10").innerHTML = carRunning[index].nome + " chegou no NIVEL 10"; 
          carRunning.forEach(reiniciar);
     
     }
     
     
}

function startRun(num){

    //Escolhendo Raridade
    carRunning.forEach(setRaridade);

    //limpando ganhado anterior
    document.querySelector(".level10").innerHTML = "";
     
    //salvando tipo da corrida
     if(num == 10){
          TipoCorrida = "Rapida";
     }else if (num = 70){
          TipoCorrida = "Grande";
     }else {
          TipoCorrida = "Enduro";
     }


    for(let i = 0; i <num; i++){

    // velocidade de cada carro na volta
     carRunning.forEach(corrida);

    //verifica Maior velocidade da volta
       if (carRunning[0].velVolta >  carRunning[1].velVolta && carRunning[0].velVolta > carRunning[2].velVolta){
            carRunning[0].pontoVolta++;
       }else if (carRunning[1].velVolta >  carRunning[0].velVolta && carRunning[1].velVolta > carRunning[2].velVolta){
            carRunning[1].pontoVolta++;
       }else if (carRunning[2].velVolta >  carRunning[0].velVolta &&carRunning[2].velVolta >  carRunning[1].velVolta){
            carRunning[2].pontoVolta++;
       }else if (carRunning[0].velVolta == carRunning[1].velVolta){
            carRunning[0].pontoVolta++;
            carRunning[1].pontoVolta++;
       }else if (carRunning[0].velVolta ==carRunning[2].velVolta){
            carRunning[0].pontoVolta++;
            carRunning[2][3]++;
       } else {
            carRunning[1].pontoVolta++;
            carRunning[2].pontoVolta++;
       }
       
    }

    let auxMatriz = [{}]
    for (let a = 0; a < 3 ; a++){
        for(let b= 0; b < 2; b++ ){
            if (carRunning[b].pontoVolta < carRunning[b+1].pontoVolta){
                auxMatriz[0] = carRunning[b];
                carRunning[b] = carRunning[b+1];
                carRunning[b+1] = auxMatriz[0];
            }
        }
    }

    if(TipoCorrida == "Rapida"){
          carRunning[0].ponto += 200;
          carRunning[1].ponto += 120;
          carRunning[2].ponto += 50;

          carRunning.forEach(alteraNivel);

    }else if (TipoCorrida  == "Grande"){
          carRunning[0].ponto += 220;
          carRunning[1].ponto += 130;
          carRunning[2].ponto += 75;

          carRunning.forEach(alteraNivel);

    }else {
          carRunning[0].ponto += 250;
          carRunning[1].ponto += 150;
          carRunning[2].ponto += 90;

          carRunning.forEach(alteraNivel);
    }

    showPodium(carRunning);

  //zera contagem das voltas
   carRunning.forEach(zeravoltas);
}

function showPodium(vetor){

    //first
    document.querySelector(".first-winner").innerHTML = vetor[0].nome;
    document.querySelector(".first-points").innerHTML = vetor[0].pontoVolta;
    document.querySelector(".car1").innerHTML = vetor[0].tipoCarro;
    document.querySelector(".level-points1").innerHTML = "Nivel " + vetor[0].nivel +" - " + vetor[0].ponto + " pontos"; 

    //second
    document.querySelector(".second-winner").innerHTML = vetor[1].nome;
    document.querySelector(".second-points").innerHTML = vetor[1].pontoVolta;
    document.querySelector(".car2").innerHTML = vetor[1].tipoCarro;
    document.querySelector(".level-points2").innerHTML = "Nivel " + vetor[1].nivel +" - " + vetor[1].ponto + " pontos"; 

    //third
    document.querySelector(".third-winner").innerHTML = vetor[2].nome;
    document.querySelector(".third-points").innerHTML = vetor[2].pontoVolta;
    document.querySelector(".car3").innerHTML = vetor[2].tipoCarro;
    document.querySelector(".level-points3").innerHTML = "Nivel " + vetor[2].nivel +" - " + vetor[2].ponto + " pontos"; 
}

function zeravoltas(element, index, array){
     carRunning[index].pontoVolta = 0;
}

function reiniciar(element, index, array){
     carRunning[index].pontoVolta = 0;
     carRunning[index].ponto = 0;
     carRunning[index].nivel = 0;
}