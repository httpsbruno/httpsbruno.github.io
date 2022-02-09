$(document).ready( function (){
    
    //Inset options on Select
    $.ajax({ url: "https://economia.awesomeapi.com.br/json/all"})
    .done( (data) => {
        Object.entries(data).forEach((moeda) => {
            $("#moedas").append(`<option id="${moeda[0]}">${moeda[0]}</option>`);
        });
        getCotacao();
    });

    $("#moedas").on("change",function(){
        const moeda = $("#moedas").val();
        $.ajax({url:`https://economia.awesomeapi.com.br/json/${moeda}-BRL`})
        .done((data)=>{
            const obj = Object.values(data)[0];
            const dataCotacao = new Date(obj.timestamp * 1000);
            const ddMmAa = dataDiaMesAno(dataCotacao);
        $("#box1").html(`
            <h2>Valor Atual: ${obj.code} - ${obj.codein}</h3>
            <p>Data: ${ddMmAa} | Hora: ${dataCotacao.toTimeString().split("GMT")[0]}</p>
            <h4> Valores</h4>
            <p>Máximo: ${obj.high} | Mínimo: ${obj.low} </p>
            <p>Variação: ${obj.varBid} | Porcentagem: ${obj.pctChange} </p>
            <h4> Valor de Fechamento</h4>
            <p>Compra: ${obj.bid} | Venda: ${obj.ask}</p>`);
    });    
    });

    //btn Search
    $("#btn-search").on("click", function(){
        const moeda = $("#moedas").val();
        const dataIni = $("#data-ini").val().replaceAll("-","");
        const dataFim = $("#data-fim").val().replaceAll("-","");
        if(dataIni === "" || dataFim === ""){
            alert("Para pesquisar é necessário escolher duas datas")
        }else{
            $("#resposta").html("");
            const checkData = checarDatas();
            if(checkData){
                $.ajax({url: `https://economia.awesomeapi.com.br/${moeda}-BRL/365?start_date=${dataIni}&end_date=${dataFim}`})
            .done( (data) => {
                data.forEach( (obj) => {   
                const dataCotacao = new Date(obj.timestamp * 1000);
                const ddMmAa = dataDiaMesAno(dataCotacao);
                $("#resposta").append(`<tr>
                <td>${ddMmAa}</td>
                <td>${dataCotacao.toTimeString().split("GMT")[0]}</td>
                <td>${obj.bid}</td>
                <td>${obj.ask}</td>
                <td>${obj.high}</td>
                <td>${obj.low}</td>
                <td>${obj.varBid}</td>
                <td>${obj.pctChange}</td>
                </tr>`);
    
                });
            });
    
            }
       
        }
    });
     
        
});

function  getCotacao(){
    const moeda = $("#moedas").val();
    $.ajax({url:`https://economia.awesomeapi.com.br/json/${moeda}-BRL`})
    .done((data)=>{
        const obj = Object.values(data)[0];
        const dataCotacao = new Date(obj.timestamp * 1000);
        const ddMmAa = dataDiaMesAno(dataCotacao);
    $("#box1").html(`
        <h2>Valor Atual: ${obj.code} - ${obj.codein}</h3>
        <p>Data: ${ddMmAa} | Hora: ${dataCotacao.toTimeString().split("GMT")[0]}</p>
        <h4> Valores</h4>
        <p>Máximo: ${obj.high} | Mínimo: ${obj.low} </p>
        <p>Variação: ${obj.varBid} | Porcentagem: ${obj.pctChange} </p>
        <h4> Valor de Fechamento</h4>
        <p>Compra: ${obj.bid} | Venda: ${obj.ask}</p>`);
});    
}

function checarDatas() {
    const data_1 = new Date($("#data-ini").val());
    const data_2 = new Date($("#data-fim").val());
    if (data_1 > data_2) {
        alert("Data não pode ser maior que a data final");
        return false;
    } else {
        return true
    }
}

function dataDiaMesAno(data) {
   const month = data.getMonth() + 1;
 return ((('' + data.getDate()).length === 1 ? '0' : '') + data.getDate()) + '/' + ((month.toString().length === 1 ? '0' : '') + month) + '/' + data.getFullYear();
}