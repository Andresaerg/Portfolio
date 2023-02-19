let intervalo = null;
const slider = document.querySelector("#slider2");
let sliderSection = document.querySelectorAll(".slider_Section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(a, b){
    if(a === undefined && screen.width > 1250){
        a = '-20%';
        b = '-40%';
    }
    if(a === undefined && screen.width <= 1250){
        a = '-34.5%';
        b = '-69%';
    }
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[0];
    slider.style.marginLeft = b;
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = a;
    }, 500);
}

function Back(p){
    let sliderSection = document.querySelectorAll(".slider_Section");
    let sliderSectionLast = sliderSection[sliderSection.length - 1];
    slider.style.marginLeft = '0';
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none"; 
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = p;
    }, 500);
}

function intervalManager(flag, func, time){
    if(flag)
        intervalo = setInterval(func, time);    
    else
    clearInterval(intervalo);
}

if(screen.width <= 1250){
    btnRight.addEventListener('click', function(){
        Next('-34.5%', '-69%');
        intervalManager(false);
        intervalManager(true, Next, 4000);
    });

    btnLeft.addEventListener('click', function(){
        Back('-34.5%');
        intervalManager(false);
        intervalManager(true, Next, 4000);  
    });
}else{
    btnRight.addEventListener('click', function(){
    Next('-20%', '-40%');
    intervalManager(false);
    intervalManager(true, Next, 4000);
});

    btnLeft.addEventListener('click', function(){
    Back('-20%');
    intervalManager(false);
    intervalManager(true, Next, 4000);
    });
}