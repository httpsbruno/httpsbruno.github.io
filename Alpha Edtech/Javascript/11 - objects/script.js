

function startRun(num){
    let runners = [{nome: "Pedro", 
                    velocidade: 0 ,
                    derrapagem: 0.5,
                    raridade: "",
                    pontos: 0},

                    {nome: "Juca", 
                    velocidade: 0 ,
                    derrapagem: 0.5,
                    raridade: "",
                    pontos: 0},


                    {nome: "Edna", 
                    velocidade: 0 ,
                    derrapagem: 0.5,
                    raridade: "",
                    pontos: 0}];
    let min, max, der;

    let cars = {"popular": {
     "velocidade_maxima": {"min": 180, "max": 200}, 
     "velocidade_minima": {"min": 110, "max": 130}, 
     "derrapagem": {"min": 3, "max": 4}
   },
   "sport": {
     "velocidade_maxima": {"min": 195, "max": 215}, 
     "velocidade_minima": {"min": 125, "max": 145}, 
     "derrapagem": {"min": 2, "max": 3}
   },
   "supersport": {
     "velocidade_maxima": {"min": 210, "max": 230}, 
     "velocidade_minima": {"min": 140, "max": 160}, 
     "derrapagem": {"min": 1, "max": 1.75}
   },
 }

    for(let i = 0; i <num; i++){

     //Set Rarity
     for (let x = 0; x < 3; x++){
          var rarity = Math.random() * (1 + 100) - 1;

          if (rarity < 60){
               runners[x].raridade = "Popular";
          } else if (rarity <= 95){
               runners[x].raridade = "Sport";
          }else {
               runners[x].raridade = "Super Sport";
          }
     }


     //adiconcar velocidade
       for (let y = 0; y < 3; y++){
          if (runners[y].raridade == "Popular"){
               min = Math.random() * (cars.popular.velocidade_minima.min - cars.popular.velocidade_minima.max) + cars.popular.velocidade_minima.min;
               max = Math.random() * (cars.popular.velocidade_maxima.min - cars.popular.velocidade_maxima.max) +cars.popular.velocidade_maxima.min;    
               der = ((Math.random() * (cars.popular.derrapagem.min - cars.popular.derrapagem.max) + cars.popular.derrapagem.min) + 1);
          } else if (runners[y].raridade == "Sport"){
               min = Math.random() * (cars.sport.velocidade_minima.min - cars.sport.velocidade_minima.max) + cars.sport.velocidade_minima.min;
               max = Math.random() * (cars.sport.velocidade_maxima.min - cars.sport.velocidade_maxima.max) +cars.sport.velocidade_maxima.min;    
               der = ((Math.random() * (cars.sport.derrapagem.min - cars.sport.derrapagem.max) + cars.sport.derrapagem.min) + 1);
          }else {
               min = Math.random() * (cars.supersport.velocidade_minima.min - cars.supersport.velocidade_minima.max) + cars.supersport.velocidade_minima.min;
               max = Math.random() * (cars.supersport.velocidade_maxima.min - cars.supersport.velocidade_maxima.max) +cars.supersport.velocidade_maxima.min;    
               der = ((Math.random() * (cars.supersport.derrapagem.min - cars.supersport.derrapagem.max) + cars.supersport.derrapagem.min) + 1);
          }

          
          runners[y].derrapagem = der;
          runners[y].velocidade = (Math.random() * ( min - max) + min) * runners[y].derrapagem;
     }
             
       
       if (runners[0].velocidade >  runners[1].velocidade && runners[0].velocidade > runners[2].velocidade){
            runners[0].pontos++;
       }else if (runners[1].velocidade >  runners[0].velocidade && runners[1].velocidade > runners[2].velocidade){
            runners[1].pontos++;
       }else if (runners[2].velocidade >  runners[0].velocidade &&runners[2].velocidade >  runners[1].velocidade){
            runners[2].pontos++;
       }else if (runners[0].velocidade == runners[1].velocidade){
            runners[0].pontos++;
            runners[1].pontos++;
       }else if (runners[0].velocidade ==runners[2].velocidade){
            runners[0].pontos++;
            runners[2][3]++;
       } else {
            runners[1].pontos++;
            runners[2].pontos++;
       }
       
    }

    let auxMatriz = [{}]
    for (let a = 0; a < 3 ; a++){
        for(let b= 0; b < 2; b++ ){
            if (runners[b].pontos < runners[b+1].pontos){
                auxMatriz[0] = runners[b];
                runners[b] = runners[b+1];
                runners[b+1] = auxMatriz[0];
            }
        }
    }

    showPodium(runners[0].nome, runners[0].pontos, runners[1].nome, runners[1].pontos, runners[2].nome, runners[2].pontos)
}

function showPodium(name1, score1, name2, score2, name3, score3){

    //first
    document.querySelector(".first-winner").innerHTML = name1;
    document.querySelector(".first-points").innerHTML = score1;

    //second
    document.querySelector(".second-winner").innerHTML = name2;
    document.querySelector(".second-points").innerHTML = score2;

    //third
    document.querySelector(".third-winner").innerHTML = name3;
    document.querySelector(".third-points").innerHTML = score3;
}
