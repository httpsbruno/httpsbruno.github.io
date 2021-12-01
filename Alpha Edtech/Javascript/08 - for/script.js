

function startRun(num){
    let runners = [["Pedro", 0 ,0.5, 0],
                   ["Juca",  0 ,0.5, 0],
                   ["Edna",  0 ,0.5, 0]];
    let min, max;

    for(let i = 0; i <num; i++){
       
       //exercício
      /*//set random 
       runners[0][1] = Math.random() * (150 - 230) + 150;
       runners[1][1] = Math.random() * (120 - 260) + 120;
       runners[2][1] = Math.random() * (180 - 200) + 180;
       
       //add the skid
       runners_one   = runners[0][1] * (runners[0][2] + 1);
       runners_two   = runners[1][1] * (runners[1][2] + 1);
       runners_three = runners[2][1] * (runners[2][2] + 1);*/

       //desafio 1
       min = Math.random() * (100 - 150) + 100;
       max = Math.random() * (200 - 280) + 200;
       runners[0][1] = Math.random() * ( min - max) + min;
       min = Math.random() * (100 - 150) + 100;
       max = Math.random() * (200 - 280) + 200;
       runners[1][1] = Math.random() * ( min - max) + min;
       min = Math.random() * (100 - 150) + 100;
       max = Math.random() * (200 - 280) + 200;
       runners[2][1] = Math.random() * ( min - max) + min;


       runners_one   = runners[0][1] * ( (Math.random() * (0.1 - 0.8) + 0.1) + 1);
       runners_two   = runners[1][1] * ( (Math.random() * (0.1 - 0.8) + 0.1) + 1);
       runners_three = runners[2][1] * ( (Math.random() * (0.1 - 0.8) + 0.1) + 1);

       
      
       
       if (runners_one >  runners_two && runners_one >  runners_three){
            runners[0][3]++;
       }else if (runners_two >  runners_one && runners_two >  runners_three){
            runners[1][3]++;
       }else if (runners_three >  runners_one && runners_three >  runners_two){
            runners[2][3]++;
       }else if (runners_one == runners_two){
            runners[0][3]++;
            runners[1][3]++;
       }else if (runners_one == runners_three){
            runners[0][3]++;
            runners[2][3]++;
       } else {
            runners[1][3]++;
            runners[2][3]++;
       }
       
    }

    let auxMatriz = [["",0,0.0,0]]
    for (let a = 0; a < 3 ; a++){
        for(let b= 0; b < 2; b++ ){
            if (runners[b][3] < runners[b+1][3]){
                auxMatriz[0] = runners[b];
                runners[b] = runners[b+1];
                runners[b+1] = auxMatriz[0];
            }
        }
    }

    showPodium(runners[0][0], runners[0][3], runners[1][0], runners[1][3], runners[2][0], runners[2][3])
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
