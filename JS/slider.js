const slider = document.querySelector("#slider2");
let sliderSection = document.querySelectorAll(".slider_Section");
let sliderSectionLast = sliderSection[sliderSection.length -1];

const btnLeft = document.querySelector("#btn_left");
const btnRight = document.querySelector("#btn_right");

slider.insertAdjacentElement('afterbegin', sliderSectionLast);

function Next(){
    let sliderSectionFirst = document.querySelectorAll(".slider_Section")[0];
    slider.style.marginLeft = "-50%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('beforeend', sliderSectionFirst);
        slider.style.marginLeft = "-25%";
    }, 500);
}

btnRight.addEventListener('click', function(){
    Next();
});

function Back(){
    let sliderSection = document.querySelectorAll(".slider_Section");
    let sliderSectionLast = sliderSection[sliderSection.length -1];
    slider.style.marginLeft = "0%";
    slider.style.transition = "all 0.5s";
    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin', sliderSectionLast);
        slider.style.marginLeft = "-25%";
    }, 500);
}

btnLeft.addEventListener('click', function(){
    Back();
    setTimeout(3000);
});

setInterval(function(){
    Next();
}, 5000);