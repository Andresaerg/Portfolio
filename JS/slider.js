let intervalo = null;
const slider = document.querySelector("#slider2");
let sliderSection = document.querySelectorAll(".slider_Section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

function Next(p){
    if(p === undefined && screen.width > 1250){
        p = '-20%';
    }
    if(p === undefined && screen.width <= 1250){
        p = '-34.5%';
    }
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[0];
    slider.style.marginLeft = p;
    /* slider.style.marginLeft = "-20%" */
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "0%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next('-20%');
    intervalManager(false);
    intervalManager(true, Next, 4000);
});

function Back(p){
    let sliderSection = document.querySelectorAll(".slider_Section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = p;
    /* slider.style.marginLeft = "20%"; */
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "0%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Back('20%');
    intervalManager(false);
    intervalManager(true, Next, 4000);    
});

function intervalManager(flag, func, time){
    if(flag)
        intervalo = setInterval(func, time);
    else
    clearInterval(intervalo);
}

intervalManager(true, Next, 4000);

if(screen.width <= 1250){
    btnRight.addEventListener('click', function(){
        Next('-34.5%');
        intervalManager(false);
        intervalManager(true, Next, 4000);
    });

    btnLeft.addEventListener('click', function(){
        Back('34.5%');
        intervalManager(false);
        intervalManager(true, Next, 4000);    
    });
}