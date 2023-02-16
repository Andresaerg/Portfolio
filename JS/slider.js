let intervalo = null;
const slider = document.querySelector("#slider2");
let sliderSection = document.querySelectorAll(".slider_Section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

//slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[0];
    slider.style.marginLeft = "-20%"
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "0%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
    intervalManager(false);
    intervalManager(true, Next, 5000);
});

function Back(){
    let sliderSection = document.querySelectorAll(".slider_Section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "20%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "0%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Back();
    intervalManager(false);
    intervalManager(true, Next, 5000);    
});

function intervalManager(flag, func, time){
    if(flag)
        intervalo = setInterval(func, time);
    else
    clearInterval(intervalo);
}

intervalManager(true, Next, 5000);