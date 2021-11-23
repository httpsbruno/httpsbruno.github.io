




var header = "Animal que me idetifico";
fillHeader(header);

function fillHeader(header){
    document.querySelector(".header-name").innerHTML = header;
}

var urso = "Urso";
var panda = "Panda";
var img = "./assets/images/panda.jpg";
fillMain(urso, panda, img);
function fillMain(urso, panda, img){
    document.querySelector(".urso-name").innerHTML = urso;
    document.querySelector(".panda-name").innerHTML = panda;
    let image = document.querySelector("#panda-img");
    image.src = img;
}

var especie = "Esp\u00e9cie: ";
var especie_txt = "Panda Gigante (Ailuropoda melanoleuca)";
fillSectionOne(especie, especie_txt);

function fillSectionOne(especie, especie_txt){
    document.querySelector("#especie").innerHTML = especie;
    document.querySelector(".especie-txt").innerHTML = especie_txt;
}

var habitat = "Habitat: ";
var habitat_txt = "Os ursos pandas s\u00e3o animais que vivem em florestas de bambu. Inicialmente eram encontrados em todo sul e leste da China, por\u00e9m a destrui\u00e7\u00e3o de seu habitat limitou-os a poucos locais onde as florestas ainda permaneceram.";
fillSectionTwo(habitat, habitat_txt);
function fillSectionTwo(habitat, habitat_txt){
    document.querySelector("#habitat").innerHTML = habitat;
    document.querySelector(".habitat-txt").innerHTML = habitat_txt;
}

var alimentacao = "Alimenta\u00e7\u00e3o: ";
var alimentacao_txt = "O urso panda pertence \u00e0 ordem Carnivora, no entanto, a maior parte de sua alimenta\u00e7\u00e3o \u00e9 de origem vegetal. Assim, seu organismo n\u00e3o permite uma digest\u00e3o eficiente de seu principal alimento, o bambu, que \u00e9 pobre em nutrientes e rico em fibras. Diante disso, o urso panda precisa consumir grandes quantidades dele, entre 12 kg e 38 kg por dia. Al\u00e9m disso, ele seleciona as partes mais nutritivas dessa planta, de acordo com as diferentes esta\u00e7ões."; 
fillSectionThree(alimentacao, alimentacao_txt);

function fillSectionThree(alimentacao, alimentacao_txt){
    document.querySelector("#alimentacao").innerHTML = alimentacao;
    document.querySelector(".alimentacao-txt").innerHTML = alimentacao_txt;
}

var curiosidades_panda = "Curiosidades: ";
var item1 = "Pandas podem passar at\u00e9 14 horas por dia alimentando-se;";
var item2 = "Um panda pode defecar mais de 100 vezes em um \u00fanico dia;";
var item3 = "A m\u00e3e de um urso panda pode pesar quase 1000 vezes mais que o seu filhote ao nascer;";
var item4 = "Pandas machos n\u00e3o se interessam por sexo no ver\u00e3o e outono;";
var item5 = "Filhotes de urso panda nascem quase sem pelos e cegos.";
fillSectionFour(curiosidades_panda, item1, item2, item3, item4, item5);

function fillSectionFour(curiosidades_panda, item1, item2, item3, item4, item5){
    document.querySelector("#curiosidades-panda").innerHTML = curiosidades_panda;
    let c1 = document.querySelector("#curiosidades .item1");
    c1.innerHTML = item1;
    let c2 = document.querySelector("#curiosidades .item2");
    c2.innerHTML = item2;
    let c3 = document.querySelector("#curiosidades .item3");
    c3.innerHTML = item3;
    let c4 = document.querySelector("#curiosidades .item4");
    c4.innerHTML = item4;
    let c5 = document.querySelector("#curiosidades .item5");
    c5.innerHTML = item5;
}
