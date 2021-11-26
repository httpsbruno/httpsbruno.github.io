function order(){
    var total = 0;
    let bread = document.querySelector('input[name="pao"]:checked').value;
    let meat = document.querySelector('input[name="burguer"]:checked').value;
    let salad = document.querySelector('input[name="salada"]:checked').value;
    let cheese = document.querySelector('input[name="queijo"]:checked').value;
  
    //Pão
    if(bread == "frances"){
        total += 3;
        document.querySelector("#items .bread").innerHTML = "Pão Francês ......................... R$ 3,00";
    }
    if(bread == "australiano"){
        total += 8;
        document.querySelector("#items .bread").innerHTML = "Pão Australiano ..................... R$ 8,00";
    }
    if(bread == "brioche"){
        total += 6;
        document.querySelector("#items .bread").innerHTML = "Pão Brioche ......................... R$ 6,00";
    }

    //Carnes
    if(meat == "picanha"){
        total += 13;
        document.querySelector("#items .meat").innerHTML = "Picanha ......................... R$ 13,00";
    }
    if(meat == "costela"){
        total += 10;
        document.querySelector("#items .meat").innerHTML = "Costela ......................... R$ 10,00";
    }
    if(meat == "vegano"){
        total += 12;
        document.querySelector("#items .meat").innerHTML = "Vegano ......................... R$ 12,00";
    }

    //Salada
    if(salad == "alface"){
        total += 1.50;
        document.querySelector("#items .salad").innerHTML = "Alface ......................... R$ 1,50";
    }
    if(salad == "tomate"){
        total += 1.50;
        document.querySelector("#items .salad").innerHTML = "Tomate ......................... R$ 1,50";
    }
    if(salad == "semsalada"){
        total += 0;
        document.querySelector("#items .salad").innerHTML = "Sem Salada ..................... R$ 0,00";
    }
    //Setando valores com o queijo
    if(cheese == "mussarela"){
        total += 3;
        document.querySelector("#items .cheese").innerHTML = "Mussarela ...................... R$ 3,00";
    }
    if(cheese == "prato"){
        total += 3;
        document.querySelector("#items .cheese").innerHTML = "Prato .......................... R$ 3,00";
    }
    if(cheese == "cheddar"){
        total += 5;
        document.querySelector("#items .cheese").innerHTML = "Cheddar ........................ R$ 5,00";
    }

    
    document.querySelector(".total").innerHTML = "Total: R$" + total;

}