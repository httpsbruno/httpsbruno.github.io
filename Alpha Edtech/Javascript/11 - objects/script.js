

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
                    pontos: 0},];
    let min, max, der;

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
               min = Math.random() * (1100 - 130) + 110;
               max = Math.random() * (180 - 200) + 180;
               der = ((Math.random() * (0.3 - 0.4) + 0.3) + 1);
          } else if (runners[y].raridade == "Sport"){
               min = Math.random() * (125 - 145) + 125;
               max = Math.random() * (195 - 215) + 195;
               der = ((Math.random() * (0.2 - 0.3) + 0.2) + 1);

          }else {
               min = Math.random() * (140 - 160) + 140;
               max = Math.random() * (210 - 230) + 210;
               der = ((Math.random() * (0.1 - 0.175) + 0.1) + 1);

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
