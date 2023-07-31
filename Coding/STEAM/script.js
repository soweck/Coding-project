window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var content = document.getElementById("navbar-inside");
var sticky = header.offsetTop;
var Yoffset = 0;
function myFunction() {
  if (window.pageYOffset >= 55) {
    if (window.pageYOffset > Yoffset) {
      Yoffset = window.pageYOffset;
      content.classList.remove("appear");
      content.classList.add("disappear");
    }else {
      Yoffset = window.pageYOffset;
      content.classList.remove("disappear");
      content.classList.add("appear");
    }
  }else{
    content.classList.add("appear");
  }
}
