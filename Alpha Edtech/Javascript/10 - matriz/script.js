let ticTacToe=[[0,0,0],[0,0,0],[0,0,0]];
let checado=[[0,0,0],[0,0,0],[0,0,0]];
jogador=1;
//jogador 1 = O jogador 2 = X
function sendPositon(pos1,pos2){
    if(checado[pos1][pos2]==0){

        if(jogador==2){
        ticTacToe[pos1][pos2] = 2;
        document.getElementById('btn-'+pos1+''+pos2).innerHTML= "X"
        }
        if(jogador==1){
        ticTacToe[pos1][pos2] = 1;
        document.getElementById('btn-'+pos1+''+pos2).innerHTML= "O"
        }

        //verificação de vitoria para X
        getWinner(jogador);
        
        
        //troca de jogador
       if(jogador==2){
            jogador = 1;
        }else{
            jogador = 2;
        }
        checado[pos1][pos2]=1;

        //velha
        if (ticTacToe[0][0] != "" && ticTacToe[0][1] != "" && ticTacToe[0][2] != "" &&
          ticTacToe[1][0] != "" && ticTacToe[1][1] != "" && ticTacToe[1][2] != "" &&
          ticTacToe[2][0] != "" && ticTacToe[2][1] != "" && ticTacToe[2][2] != ""){
               var valor = document.getElementById('winner').value;
               if (  valor == undefined){
                    document.getElementById('winner').innerHTML = "Velha :("
               }
               
       }
    }
    
    
}

function getWinner(n){
    if(ticTacToe[0][0] == n & ticTacToe[1][0] == n & ticTacToe[2][0] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+i+''+0).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[0][1] == n & ticTacToe[1][1] == n & ticTacToe[2][1] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+i+''+1).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[0][2] == n & ticTacToe[1][2] == n & ticTacToe[2][2] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+i+''+2).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[0][0] == n & ticTacToe[0][1] == n & ticTacToe[0][2] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+0+''+i).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[1][0] == n & ticTacToe[1][1] == n & ticTacToe[1][2] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+1+''+i).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[2][0] == n & ticTacToe[2][1] == n & ticTacToe[2][2] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+2+''+i).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[0][0] == n & ticTacToe[1][1] == n & ticTacToe[2][2] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        for(let i =0; i<3; i++){
            document.getElementById('btn-'+i+''+i).style.color = 'blue';
        }
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
    if(ticTacToe[0][2] == n & ticTacToe[1][1] == n & ticTacToe[2][0] == n){
        document.getElementById('winner').innerHTML = "O jogador " + n + " ganhou!";
        document.getElementById('btn-'+0+''+2).style.color = 'blue';
        document.getElementById('btn-'+1+''+1).style.color = 'blue';
        document.getElementById('btn-'+2+''+0).style.color = 'blue';
        checado=[[1,1,1],[1,1,1],[1,1,1]];
    }
}

function clean() {
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            ticTacToe[i][j] = 0;
            checado[i][j] = 0;
            document.getElementById('btn-'+i+''+j).innerHTML= " "
            document.getElementById('btn-'+i+''+j).style.color = 'black';
        }
    }
    jogador = 1;
    document.getElementById('winner').innerHTML = "";
    
}