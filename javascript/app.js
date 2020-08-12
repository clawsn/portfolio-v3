// import Scrollbar from 'smooth-scrollbar';

// Scrollbar.init(document.querySelector('#my-scrollbar'));

const portfolio= document.getElementById("portfolio");
const btn = document.getElementById("view-portfolio")
btn.addEventListener("click",(e)=>{
    e.preventDefault();
    portfolio.classList.add("viewing");
    document.querySelector(".jumbo-text").style.margin = 0;
});

btn.addEventListener('click', () => window.scrollTo({
  top: 400,
  behavior: 'smooth',
}));





$(window).scroll(function() {
  if($(document).scrollTop() > 50){
    $('.nav-bar').addClass('shrink');
  } else {
    $('.nav-bar').removeClass('shrink');
  }
});