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

    /* document.querySelector('.pie').style.background = 'var(--bg-body)';
    document.querySelector('.pie').style.color = 'var(--article-color)';
    document.querySelectorAll('.pie section span').forEach(e => {
        e.style.color = 'var(--bg-principal)';
    }); */
    document.querySelectorAll('.pie2').forEach(e => {
        e.classList.remove('pie2');
        e.classList.add('pie');
    });
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
}