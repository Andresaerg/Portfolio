const date = (year) => {
        let date = new Date().getFullYear();
        year.innerHTML = date;
    }

const change_view_1 = (layout1, layout2, bg, container, txt) => {
    layout1.style.background = 'var(--bg-principal)';
    layout2.style.background = 'var(--bg-principal)';
    bg.style.background = 'var(--bg-body)';
    container.forEach(element => {
        element.style.background = 'var(--container)';
        element.style.border = 'var(--border)';
    });
    txt.forEach(e => {
        e.style.color = 'var(--article-color)';
    })

    document.querySelectorAll('.arcodev, .eslogan, #powered, #date').forEach(e => {
        e.style.setProperty('color', '#fff');
    });

    document.querySelectorAll('.section p').forEach(e => {
        e.style.color = 'var(--article-color)';
    });

    document.querySelectorAll('#pie1, #pie2').forEach(e => {
        e.style.color = 'var(--txtcolor-primary)';
    })

    document.querySelectorAll('.pie2').forEach(e => {
        e.classList.remove('pie2');
        e.classList.add('pie');
    });

    document.querySelectorAll('.project').forEach(e => {
        e.style.background = '#EFEFEF';
        e.style.color = 'var(--article-color)';
    })

    document.querySelectorAll('.barras b').forEach(e => {
        e.style.color = 'var(--txtcolor-primary)';
    })

    document.querySelector('.burger-menu').style.background = 'var(--bg-principal)';
    document.querySelectorAll('.slider_btn').forEach(e => e.style.color = 'var(--article-color)');
}
    
const change_view_2 = (layout1, layout2, bg, container, txt) => {
    layout1.style.background = 'var(--bg-secondary)';
    layout2.style.background = 'var(--bg-secondary)';
    bg.style.background = 'var(--bg-body2)';
    container.forEach(element => {
        element.style.background = 'var(--container2)';
        element.style.border = 'var(--border2)';
    });
    txt.forEach(e => {
        e.style.color = 'var(--txtcolor-secondary)';
    })

    document.querySelectorAll('.section p').forEach(e => {
        e.style.color = 'var(--txtcolor-secondary)';
    });

    document.querySelectorAll('.form span').forEach(e => {
        e.style.color = 'grey';
    });

    document.querySelectorAll('#pie1, #pie2').forEach(e => {
        e.style.color = 'var(--txtcolor-secondary)';
    })

    document.querySelectorAll('.pie').forEach(e => {
        e.classList.remove('pie');
        e.classList.add('pie2');
    });

    document.querySelectorAll('.project').forEach(e => {
        e.style.background = 'var(--bg-secondary)';
        e.style.color = 'var(--txtcolor-secondary)';
    })

    document.querySelectorAll('.barras b').forEach(e => {
        e.style.color = 'var(--txtcolor-secondary)';
    })

    document.querySelector('.burger-menu').style.background = 'var(--bg-secondary)';
    document.querySelectorAll('.slider_btn').forEach(e => e.style.color = 'var(--txtcolor-secondary)');
}

window.addEventListener('scroll', function(){
    var value = parseInt(document.documentElement.scrollTop);
    if(value < 665){
        document.querySelector("#scroller").style.right = '-50px';
        document.querySelector("#scroller").style.opacity = '0';
    }else{
        document.querySelector("#scroller").style.right = '20px';
        document.querySelector("#scroller").style.opacity = '1';
    }
})

function burgermenu(){
    document.querySelector('#burger svg').style.fill = 'orange';
    document.querySelector('.burger-menu').style.right = '0';
    document.querySelector('#burger svg').style.opacity = '0';
    document.querySelector('#burger svg').classList.toggle('rotate');
    document.querySelector('#close-burger').style.display = 'unset';
    document.querySelector('#close-burger').disabled = true;
    setTimeout(function(){
        document.querySelector('#close-burger').disabled = false;
        document.querySelector('#burger').style.display = 'none';
        document.querySelector('#close-burger').style.opacity = '1';
        document.querySelector('#close-burger svg').classList.toggle('rotate');
        document.querySelector('#close-burger svg').style.fill = 'orange';
    }, 500);
}

function closemenu(){
    document.querySelector('#close-burger svg').style.fill = 'var(--txtcolor-principal)';
    document.querySelector('.burger-menu').style.right = '-100%';
    document.querySelector('#close-burger').style.opacity = '0';
    document.querySelector('#close-burger svg').classList.toggle('rotate');
    document.querySelector('#burger').style.display = 'unset';
    document.querySelector('#close-burger').disabled = true;
    setTimeout(function(){
        document.querySelector('#close-burger').disabled = false;
        document.querySelector('#close-burger').style.display = 'none';
        document.querySelector('#burger svg').style.opacity = '1';
        document.querySelector('#burger svg').classList.toggle('rotate');
        document.querySelector('#burger svg').style.fill = 'var(--txtcolor-secondary)';
    }, 500);
}