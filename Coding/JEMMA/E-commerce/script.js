let sidebarToggle = -1

function toogleSidebar(x) {
  x.classList.toggle("change");
  var sidebar = document.getElementById("sidenavigation");
  sidebar.style.width = "250px";
  sidebarToggle ++

  if (sidebarToggle%2 != 0){
      sidebar.style.width = "0px";
  }
}
function closeSidebar(){
  var sidebar = document.getElementById("sidenavigation");
  sidebar.style.width = "0px";
  document.getElementById("navigation--button-sidebar").classList.toggle("change");
  sidebarToggle ++
}

window.onscroll = function() {myFunction()};
var header = document.getElementById("navbar");
var content = document.getElementById("navbar-inside");
var sticky = header.offsetTop;
var Yoffset = 0;
function myFunction() {
  if (window.pageYOffset > sticky) {
    if (window.pageYOffset > Yoffset) {
      Yoffset = window.pageYOffset;
      content.classList.remove("appear");
      content.classList.add("disappear");
    }else {
      Yoffset = window.pageYOffset;
      content.classList.remove("disappear");
      content.classList.add("appear");
    }
  }else
  {
    content.classList.remove("appear");
    content.classList.remove("disappear");
  }
}


let slideIndex = 1;
let x   = 0;

showSlides(slideIndex);
function print(text){
    console.log(text)
}
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow--pictures");
  let dots = document.getElementsByClassName("slideshow--container-index_dots");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let catagories = 0;

function changeCatagories(n) {
  showCatagories(catagories += n);
}

function showCatagories(n){
  let firstCategory  = document.getElementById("main--catagories-options_first");
  let secondCatagory = document.getElementById("main--catagories-options_second");
  if (n > 0 ){
    firstCategory.classList.remove("activeSlide");
    firstCategory.classList.add("Slideout");
    secondCatagory.classList.remove("slidein");
    secondCatagory.classList.add("activeSlide");

  } else {
    firstCategory.classList.remove("Slideout");
    firstCategory.classList.add("activeSlide");
    secondCatagory.classList.remove("activeSlide");
    secondCatagory.classList.add("slidein");
  }
}