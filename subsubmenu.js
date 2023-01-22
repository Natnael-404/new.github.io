let close=document.querySelector(".close");
let open=document.querySelector(".open");
let ul=document.querySelector(".ul")
open.addEventListener("click",function(){
    ul.style.left="0%"
    open.style.right="330%"
 });
 close.addEventListener("click",function(){
    ul.style.left="-300%"
    open.style.right="4rem"
    open.style.top="3rem"


 })
 let clothGallery=document.querySelector(".clothGallery");

 clothGallery.addEventListener("onclick",function(){
   clothGallery.style.backgroundImage="cloth3.jpg";
 }
 )

 let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
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

