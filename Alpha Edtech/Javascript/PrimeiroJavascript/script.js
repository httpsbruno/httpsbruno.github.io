//Name - age - state
document.getElementById("greeting").innerHTML = "Hi, I'm ";
document.getElementById("myname").innerHTML = "Bruno Santos";
document.getElementById("aboutme").innerHTML = "21 years old, S\u00e3o Paulo - Brazil";

//My Picture
let picture = document.getElementById("mypicture");
picture.src = "./assets/images/mypicture.jpg";

//About the hobbie
document.getElementById("title-hobbie").innerHTML = "Hobbie: Art";
document.getElementById("paragraph-one").innerHTML = "I am a person who appreciates many different kinds of art: singing, dancing, acting, paintings, sculptures, photographs, etc. It is very curious to see how each human being sees the world in a unique way and translates this through art.";
document.getElementById("paragraph-two").innerHTML = "Particularly I am fascinated by musical theater, consequently the areas that I most like and seek knowledge are: singing, acting, and dancing (in order of priority). Besides school work, I participated in the theater group of the church I attend, but my most serious experience so far was to participate in an Online Choir for Beginners at EMESP Tom Jobim.";

//My video
document.getElementById("subtitle").innerHTML = "O som da Pessoa"
let video = document.getElementById("singning");
video.src = "https://www.youtube.com/embed/WPx6StSDCB0?start=73";
video.title  = "O Som da Pessoa";
video.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

//Link
let more = document.getElementById("moreinformation");
more.href = "https://emesp.org.br/estude-conosco/";
more.innerHTML = "Study at EMESP Tom Jobim";