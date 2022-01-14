const m1 = [[1,2,3],
            [4,5,6],
            [7,8,9]];
                  
const m2 = [[ 1, 2, 3, 4, 5],
            [ 6, 7, 8, 9,10],
            [11,12,13,14,15],
            [16,17,18,19,20]];

showMatriz(m1);
showMatriz(m2);

function showMatriz(_m){
    //chama função recursiva
    console.log("Imprimindo MATRIZ...")
    recursiveMatriz(_m, 0);
}



function recursiveMatriz(_matriz, _count){
    if(_matriz.length === _count){
        return console.log("MATRIZ impressa \n \n");
    }
   
    console.log(`[${ _matriz[_count].toString() }]`);
 
    return recursiveMatriz(_matriz, _count+1);
}
  

                  

 
 