var screens = document.querySelectorAll('.calc .screen');
var scrollbar = document.querySelector('.calc__progress-bg');
var outputLabels = document.querySelectorAll('.calc .col__parameters span');
var data = {
    type : 'fff', 
    view : 'dd',
    typeotdel : 'dd',
    length : 'ff',
    width : 'dd',
    height : 'ff'
}




    var button = screens[0].querySelector('.btn');
    button.addEventListener('click', ()=>{
        var radios = screens[0].querySelectorAll('.screen__radio');
        for(let radio of radios){
            if(radio.checked){
                data.type = radio.value;
            }
        }
        screens[0].classList.remove('active');
        screens[1].classList.add('active');
        scrollbar.style.width = '50%';

        button = screens[1].querySelector('.btn');
        button.addEventListener('click', ()=>{
            radios = screens[1].querySelectorAll('.screen__radio');
            for(let radio of radios){
                if(radio.checked){
                    data.view = radio.value;
                }
            }
            screens[1].classList.remove('active');
            screens[2].classList.add('active');
            scrollbar.style.width = '100%';

            button = screens[2].querySelector('.btn');
            button.addEventListener('click', ()=>{
                screens[2].classList.remove('active');
                screens[3].classList.add('active');
                for (var item in data) {
                    for(let label of outputLabels){
                        if(item === label.dataset.stair){
                            label.innerHTML = data[item];
                        }
                    }
                  }
            
                    
              
            })

        })
    })
    
