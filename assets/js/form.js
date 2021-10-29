let calc = document.querySelector('.calc');
let button = document.querySelector('.showCalc'); 
let calcContainer = document.querySelector('.calc__container');
button.addEventListener('click', ()=>{
    calc.classList.add('active');
    document.querySelector('body').classList.add('lock');
});

calc.querySelector('.calc__close').addEventListener('click', ()=>{
    calc.classList.remove('active');
    document.querySelector('body').classList.remove('lock');
});


document.addEventListener('click', e => {
    let target = e.target;
    let its_menu = target == calcContainer || calcContainer.contains(target);
    let its_button = target == button;
    let menu_is_active = calc.classList.contains('active');
    
    if (!its_menu && !its_button && menu_is_active) {
        calc.classList.remove('active');
        document.querySelector('body').classList.remove('lock');
    }
  })


let form = document.querySelector('.form');
let formScreens = form.querySelectorAll('.form__screen');
let btnNext = form.querySelectorAll('.btn-next');
let btnData = form.querySelector('.btn-data');
var scrollbar = document.querySelector('.calc__progress-bg');
let data = {}
let activeF = 0;
let scrollbarW = 33.3;
let step = 1;

for(let btn of btnNext){
    btn.addEventListener('click', ()=>{
        activeF++;
        step++;
        scrollbarW += 33.3;
        for(let i = 0; i < formScreens.length; i++){
            if(i === activeF){
                formScreens[i].classList.add('active');
            }else{
                formScreens[i].classList.remove('active');
            }
        }
        scrollbar.style.width = scrollbarW + '%';
        document.querySelector('.form__step').innerHTML = step;
    })
}

btnData.addEventListener('click', ()=>{
    data = {
        type : form.querySelector('.radios__type-of-stair input:checked').value,
        view : form.querySelector('.radios__view-of-stair input:checked').value,
        length : form.querySelector('.inputs__sizes #inputs__length').value + ' см',
        width : form.querySelector('.inputs__sizes #inputs__width').value + ' см',
        height : form.querySelector('.inputs__sizes #inputs__height').value + ' см'
    }
    console.log(data);
    let labels = form.querySelectorAll('.data-form__data p');
    for(let label of labels){
        label.innerHTML = data[label.dataset.stairs];
    }
})


