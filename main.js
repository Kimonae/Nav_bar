window.onscroll = slideDown;
function slideDown() {
 // Votre code ici
 var k = document.querySelector("html").scrollTop;
 var l = document.getElementById("navbar");
 var h = document.querySelector(".lorem");
 h.style.position ="absolute";

 if( k < 200) {

l.style.top =0;
h.style.top = "56px";




 }
else {l.style.top = "-56px";
h.style.top = 0;
}
}