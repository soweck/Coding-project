/*slideshow*/
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
  let slides = document.getElementsByClassName("pictures");
  let dots = document.getElementsByClassName("dot");
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
/*modal*/
var modal = document.getElementById("myModal");

var imgjol = document.getElementById("avjolin");
var imgeve = document.getElementById("avevelynn");
var imgmar = document.getElementById("avmarvel");
var imgmer = document.getElementById("avmercedes");
var imgand = document.getElementById("avandrew");
var body = document.getElementsByTagName('body');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
console.log(document.getElementsByClassName("stop-scrolling"))
imgjol.onclick = function(){
  document.body.classList.add("stop-scrolling");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt+"    " + modalImg.naturalWidth + "x" + modalImg.naturalHeight;;
}
imgeve.onclick = function(){
  document.body.classList.add("stop-scrolling");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt+"    " + modalImg.naturalWidth + "x" + modalImg.naturalHeight;;
}
imgmar.onclick = function(){
  document.body.classList.add("stop-scrolling");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt+"    " + modalImg.naturalWidth + "x" + modalImg.naturalHeight;;
}
imgmer.onclick = function(){
  document.body.classList.add("stop-scrolling");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt+"    " + modalImg.naturalWidth + "x" + modalImg.naturalHeight;;
}
imgand.onclick = function(){
  document.body.classList.add("stop-scrolling");
  modal.style.display = "block";
  modalImg.src = this.src;
  captionText.innerHTML = this.alt +"    " + modalImg.naturalWidth + "x" + modalImg.naturalHeight;
}

console.log(document.getElementsByClassName("stop-scrolling"))

var span = document.getElementsByClassName("close")[0];
span.onclick = function() { 
  modal.style.display = "none";
  document.body.classList.remove("stop-scrolling");
}

/*experience*/
var image = document.getElementsByClassName('my-img')[0]
var image2 = document.getElementsByClassName('my-img')[1]
var image3 = document.getElementsByClassName('my-img')[2]
var imgCntnrs = document.getElementsByClassName('img-cntnr')
var dragImgMouseStart = {}
 lastDiff = {x: 0, y: 0}
var dragImgMouseStart2 = {}
 lastDiff2 = {x: 0, y: 0}
var dragImgMouseStart3 = {}
lastDiff3 = {x: 0, y: 0}
var initialPos = image.getBoundingClientRect()
var initialPos2 = image2.getBoundingClientRect()
var initialPos3 = image3.getBoundingClientRect()
var currentPos = {x: 1097, y:343}
var currentPos2 = {x:-174, y:227}
var currentPos3 = {x: 28, y:0}
image3.style.transform = "translate(" + (28) + "px," + (0) + "px)"
image2.style.transform = "translate(" + (-174) + "px," + (227) + "px)"
image.style.transform = "translate(" + (1097) + "px," + (343) + "px)"
function mousedownDragImg(e) {
e.preventDefault();
dragImgMouseStart.x = e.clientX;
dragImgMouseStart.y = e.clientY;
currentPos.x += lastDiff.x;
currentPos.y += lastDiff.y;
     lastDiff = {x: 0, y: 0};
window.addEventListener('mousemove', mousemoveDragImg);
window.addEventListener('mouseup', mouseupDragImg);
}
function mousedownDragImg2(e){
e.preventDefault
dragImgMouseStart2.x = e.clientX;
dragImgMouseStart2.y = e.clientY;
currentPos2.x += lastDiff2.x;
currentPos2.y += lastDiff2.y;
    lastDiff2 = {x: 0, y: 0};
window.addEventListener('mousemove', mousemoveDragImg2);
window.addEventListener('mouseup', mouseupDragImg2);
}
function mousedownDragImg3(e){
e.preventDefault
dragImgMouseStart3.x = e.clientX;
dragImgMouseStart3.y = e.clientY;
currentPos3.x += lastDiff3.x;
currentPos3.y += lastDiff3.y;
    lastDiff3 = {x: 0, y: 0};
window.addEventListener('mousemove', mousemoveDragImg3);
window.addEventListener('mouseup', mouseupDragImg3);
}
function mousemoveDragImg(e) {
e.preventDefault();
lastDiff.x = e.clientX - dragImgMouseStart.x;
lastDiff.y = e.clientY - dragImgMouseStart.y;
var finalx = currentPos.x + lastDiff.x;
var finaly = currentPos.y + lastDiff.y;
  requestAnimationFrame(function(){
    if(finalx<0 && finaly<0){
      image.style.transform = "translate(" + (0) + "px," + (0) + "px)";
      currentPos.x = 0
      currentPos.y = 0
    }else if(finalx<0 && finaly>435){
      image.style.transform = "translate(" + (0) + "px," + (435) + "px)";
      currentPos.x = 0
      currentPos.y = 435
    }else if(finalx>1185  && finaly<0){
      image.style.transform = "translate(" + (1185 ) + "px," + (0) + "px)";
      currentPos.x = 1185 
      currentPos.y = 0
    }else if(finalx>1185  && finaly>435){
      image.style.transform = "translate(" + (1185 ) + "px," + (435) + "px)";
      currentPos.x = 1185 
      currentPos.y = 435
    }else if(finaly<0){
      image.style.transform = "translate(" + (finalx) + "px," + (0) + "px)";
      currentPos.y = 0
    } else if(finalx<0){
      image.style.transform = "translate(" + (0) + "px," + (finaly) + "px)";
      currentPos.x = 0
    }else if(finaly>435){
      image.style.transform = "translate(" + (finalx) + "px," + (436) + "px)";
      currentPos.y = 435
    }else if(finalx>1185 ){
      image.style.transform = "translate(" + (1185 ) + "px," + (finaly) + "px)";
      currentPos.x = 1185 
    }else{
      image.style.transform = "translate(" + (finalx) + "px," + (finaly) + "px)";
    }
  })
}
function mousemoveDragImg2(e){
e.preventDefault()
lastDiff2.x = e.clientX - dragImgMouseStart2.x;
lastDiff2.y = e.clientY - dragImgMouseStart2.y;
var final2x = currentPos2.x + lastDiff2.x;
var final2y = currentPos2.y + lastDiff2.y;
  requestAnimationFrame(function(){
    if(final2x<-340 && final2y<0){
      image2.style.transform = "translate(" + (-340) + "px," + (0) + "px)";
      currentPos2.x = -340
      currentPos2.y = 0
    }else if(final2x<-340 && final2y>435){
      image2.style.transform = "translate(" + (-340) + "px," + (435) + "px)";
      currentPos2.x = -340
      currentPos2.y = 435
    }else if(final2x>850 && final2y<0){
      image2.style.transform = "translate(" + (850) + "px," + (0) + "px)";
      currentPos2.x = 850
      currentPos2.y = 0
    }else if(final2x>850 && final2y>435){
      image2.style.transform = "translate(" + (850) + "px," + (435) + "px)";
      currentPos2.x = 850
      currentPos2.y = 435
    }else if(final2y<0){
      image2.style.transform = "translate(" + (final2x) + "px," + (0) + "px)";
      currentPos2.y = 0
    } else if(final2x<-340){
      image2.style.transform = "translate(" + (-340) + "px," + (final2y) + "px)";
      currentPos2.x = -340
    }else if(final2y>435){
      image2.style.transform = "translate(" + (final2x) + "px," + (436) + "px)";
      currentPos2.y = 435
    }else if(final2x>850){
      image2.style.transform = "translate(" + (850) + "px," + (final2y) + "px)";
      currentPos2.x = 850
    }else{
      image2.style.transform = "translate(" + (final2x) + "px," + (final2y) + "px)";
    }
  })
}
function mousemoveDragImg3(e){
e.preventDefault()
lastDiff3.x = e.clientX - dragImgMouseStart3.x;
lastDiff3.y = e.clientY - dragImgMouseStart3.y;
var final3x = currentPos3.x + lastDiff3.x;
var final3y = currentPos3.y + lastDiff3.y;
  requestAnimationFrame(function(){

    if(final3x<-680 && final3y<0){
      image3.style.transform = "translate(" + (-680) + "px," + (0) + "px)";
      currentPos3.x = -680
      currentPos3.y = 0
    }else if(final3x<-680 && final3y>435){
      image3.style.transform = "translate(" + (-680) + "px," + (435) + "px)";
      currentPos3.x = -680
      currentPos3.y = 435
    }else if(final3x>508  && final3y<0){
      image3.style.transform = "translate(" + (508 ) + "px," + (0) + "px)";
      currentPos3.x = 508 
      currentPos3.y = 0
    }else if(final3x>508  && final3y>435){
      image3.style.transform = "translate(" + (508 ) + "px," + (435) + "px)";
      currentPos3.x = 508 
      currentPos3.y = 435
    }else if(final3y<0){
      image3.style.transform = "translate(" + (final3x) + "px," + (0) + "px)";
      currentPos3.y = 0
    } else if(final3x<-680){
      image3.style.transform = "translate(" + (-680) + "px," + (final3y) + "px)";
      currentPos3.x = -680
    }else if(final3y>435){
      image3.style.transform = "translate(" + (final3x) + "px," + (436) + "px)";
      currentPos3.y = 435
    }else if(final3x>508 ){
      image3.style.transform = "translate(" + (508 ) + "px," + (final3y) + "px)";
      currentPos3.x = 508 
    }else{
      image3.style.transform = "translate(" + (final3x) + "px," + (final3y) + "px)";
    }
  })
}
  
function mouseupDragImg(e) {
e.preventDefault();
window.removeEventListener('mousemove', mousemoveDragImg);
window.removeEventListener('mouseup', mouseupDragImg);
}
function mouseupDragImg2(e) {
e.preventDefault();
  window.removeEventListener('mousemove', mousemoveDragImg2);
  window.removeEventListener('mouseup', mouseupDragImg2);
}
function mouseupDragImg3(e) {
e.preventDefault();
  window.removeEventListener('mousemove', mousemoveDragImg3);
  window.removeEventListener('mouseup', mouseupDragImg3);
}
image.addEventListener('mousedown', mousedownDragImg);
image2.addEventListener('mousedown', mousedownDragImg2);
image3.addEventListener('mousedown', mousedownDragImg3);