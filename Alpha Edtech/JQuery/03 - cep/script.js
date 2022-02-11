$(document).ready( function (){
    $("#box1").hide();
    $("#box2").hide();
    //btn Search
    $("#btn-search").on("click", function(){
        let cep = $("#cep").val();
        let validate = true;
        if(cep.length == 9 && cep.includes("-")){
            cep = cep.replace("-", "");
        }else if(cep.length != 8 || isNaN(cep) == true){
            validate = false;
            alert(`CEP Inv\u00e1lido`);
        }

        if (validate){
            $("#box1").fadeIn();
            $("#box2").fadeIn();
            $.ajax({url: `https://cep.awesomeapi.com.br/json/${cep}`})
                .done( (data) => {
                    $("#box1").html(`
                        <p><strong>CEP:</strong> ${data.cep.substring(0,5)}-${data.cep.substring(5,8)}</p>
                        <p><strong>Endere\u00e7o:</strong> ${data.address}</p>
                        <p><strong>Bairro:</strong> ${data.district}</p>
                        <p><strong>Cidade:</strong> ${data.city} - <strong>Estado:</strong> ${data.state}</p>`);
                            
                    $("#cep").val("");

                    //map
                    $("#box2").html(`<iframe width="350" height="300" src="https://maps.google.com/maps?q=${data.lat},${data.lng}&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>`).animate();
                });
        }

        }); 
});

