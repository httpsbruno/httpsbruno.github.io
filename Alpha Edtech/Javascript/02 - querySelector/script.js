//Name - age - state
document.querySelector("#greeting").innerHTML = "Hi, I'm ";
document.querySelector("#myname").innerHTML = "Bruno Santos";
document.querySelector("#aboutme").innerHTML = "21 years old, S\u00e3o Paulo - Brazil";

//My Picture
let picture = document.querySelector("#mypicture");
picture.src = "./assets/images/mypicture.jpg";

//About the artist
document.querySelector("#title-artist").innerHTML = "Artist: Zizi Possi";
document.querySelector("#about-artist").innerHTML = "Maria Izildinha 'Zizi' Possi, is a Brazilian popular music (MPB) singer. Besides having successes including songs in Italian, she is the mother of another singer, Luiza Possi.";
let more = document.querySelector("#moreinformation");
more.href = "https://pt.wikipedia.org/wiki/Zizi_Possi";
more.innerHTML = "read more";



//My Cd pictures
document.querySelector("#some-pictures").innerHTML = "Albums:"
let cd1 = document.querySelector("#images .cd1");
cd1.src = "./assets/images/cd1.jpg";
let cd2 = document.querySelector("#images .cd2");
cd2.src = "./assets/images/cd2.jpg";
let cd3 = document.querySelector("#images .cd3");
cd3.src = "./assets/images/cd3.webp";

//favorite songs
document.querySelector("#favorite-songs").innerHTML = "Favorite Songs:"
let song1 = document.querySelector("#songs .song1");
song1.innerHTML = "O que \u00e9, o que \u00e9?";
let song2 = document.querySelector("#songs .song2");
song2.innerHTML = "Beatriz";
let song3 = document.querySelector("#songs .song3");
song3.innerHTML = "Per Amore";
let song4 = document.querySelector("#songs .song4");
song4.innerHTML = "Sentimental";
let song5 = document.querySelector("#songs .song5");
song5.innerHTML = "Meu Erro";
let song6 = document.querySelector("#songs .song6");
song6.innerHTML = "Viver, Amar, Valeu";



