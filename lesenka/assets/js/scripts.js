var header = document.querySelector('.header');

window.addEventListener('scroll', ()=>{
    if(window.pageYOffset >= header.clientHeight-50){
        header.classList.add('white');
    }else{
        header.classList.remove('white');
    }
})

var headerMenu = document.querySelector('.header__menu');
var burger = document.querySelector('.burger');
burger.addEventListener('click', ()=>{
    headerMenu.classList.toggle('active');
    burger.classList.toggle('active');
})