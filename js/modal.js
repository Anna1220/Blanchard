var modal1 = document.getElementById("my_modal1");
var modal2 = document.getElementById("my_modal2");
var modal3 = document.getElementById("my_modal3");
 var btn1 = document.getElementById("gallery__slide_js1");
 var btn2 = document.getElementById("gallery__slide_js2");
 var btn3 = document.getElementById("gallery__slide_js3");
 var close1 = document.getElementsByClassName("modal-close_button1")[0];
 var close2 = document.getElementsByClassName("modal-close_button2")[0];
 var close3 = document.getElementsByClassName("modal-close_button3")[0];

 btn1.onclick = function () {
    modal1.style.display = "block";
    document.body.style.overflow = "hidden";
 }
 btn2.onclick = function () {
  modal2.style.display = "block";
  document.body.style.overflow = "hidden";
}
btn3.onclick = function () {
  modal3.style.display = "block";
  document.body.style.overflow = "hidden";
}

 close1.onclick = function () {
    modal1.style.display = "none";
    document.body.style.overflow = "";
 }
 close2.onclick = function () {
  modal2.style.display = "none";
  document.body.style.overflow = "";
}
close3.onclick = function () {
  modal3.style.display = "none";
  document.body.style.overflow = "";
}

 window.onclick = function (event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    }
}
window.onclick = function (event) {
  if (event.target == modal2) {
      modal2.style.display = "none";
  }
}
window.onclick = function (event) {
  if (event.target == modal3) {
      modal3.style.display = "none";
  }
}
