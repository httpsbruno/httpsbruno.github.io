//Inicializando os dados do gráfico pizza
var data = [ 0, 0 ]; 
 
var canvas = document.getElementById('canvas'); 
var c = canvas.getContext('2d'); 
c.fillStyle = "white"; 
c.fillRect(0,0,450,300); 


function desenha(){
    //cores das opções do gráfico
    var cores = [ "green","red"]; 
     
    //somando o total do gráfico pizza 
    var total = 0; 
    for(var i=0; i<data.length; i++) { 
        total += data[i]; 
    } 
    //Desenhando gráfico pizza
    var prevAngle = 0; 
    for(var i=0; i<data.length; i++) { 
        //pedaço da pizza comparado com o todo 
        var pedaco = data[i]/total; 
        //calculando angulo
        var angle = prevAngle + pedaco*Math.PI*2; 
         
        //desenhando o pedaço
        c.fillStyle = cores[i]; 
        c.beginPath(); 
        c.moveTo(200,150); 
        c.arc(200,150, 120, prevAngle, angle, false); 
        c.lineTo(200,150); 
        c.fill(); 
        c.strokeStyle = "black"; 
        c.stroke(); 
         
        //atualizando angulo para o próximo pedaço
        prevAngle = angle; 
    } 
}
    
     function sim(){
            data[0] ++;
            c.clearRect(0,0,450,300);
            c.font = "italic "+20+"pt Arial ";
            c.fillStyle = "green";
            c.fillText(data[0].toString(), 10,150);
            c.fillStyle = "red";
            c.fillText(data[1].toString(), 400,150);
            desenha();
    }
        
    function nao(){
            data[1] ++;
            c.clearRect(0,0,450,300);
            
            c.font = "italic "+20+"pt Arial ";
            c.fillStyle = "green";
            c.fillText(data[0].toString(), 10,150);
            c.fillStyle = "red";
            c.fillText(data[1].toString(), 400,150);
            desenha();
    }
    
    
    
    