document.querySelector(".botao").onclick = function(){myfunction();};


function myfunction(){
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let sabor = document.getElementById("sabor").value;
    let mensagem = document.getElementById("mensagem").value;

    document.getElementById("copy-nome").innerHTML = "Nome: " + nome;
    document.getElementById("copy-email").innerHTML = "E-mail: " + email;
    document.getElementById("copy-sabor").innerHTML = "Item: " + sabor;
    document.getElementById("copy-mensagem").innerHTML = "Mensagem: " + mensagem;
    document.getElementById("agradecimento").innerHTML = "Enviado com Sucesso!";
}