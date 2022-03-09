const url = "http://localhost:3000";

$(document).ready(function() {
    $("#btn-test").on("click",  () => {
        $("p").html("");
        $("#btn-test").attr("disabled",true);

        //chamar promise
        const promise1 = new Promise((resolve, reject) => {
            $.get(url +"/number/", function(data, status){
                resolve(data);
            });
        });

        const promise2 = new Promise((resolve, reject) => 
            setTimeout(() => reject('Tempo Esgotado!'), 3000));

        //Retorna promisse mais rápida
        Promise.race([
            promise1, 
            promise2
        ])
        .then((result) =>{
            $("p").html(result);
            $("#btn-test").attr("disabled", false);
        })
        .catch((err) => {
            $("p").html(`Erro: ${err}`);
            $("#btn-test").attr("disabled",false);
        });
    });
});
