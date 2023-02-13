const prueba = (/* txt, */ year) => {
        /* setInterval(() => {
                for(let i = 0; i < 1; i++){
                    const randomColor = "#"+((1<<24)*Math.random()|0).toString(16);
                    txt.style.setProperty('--txtcolor-casual', randomColor)
                }
            }, 750
        ) */
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

    //document.querySelector('.ing').style.color = 'unset';

    document.querySelectorAll('.arcodev, .eslogan, #powered, #date').forEach(e => {
        e.style.setProperty('color', '#fff');
    });

    document.querySelectorAll('.section p').forEach(e => {
        e.style.color = 'var(--article-color)';
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
    //document.querySelector('.ing').style.color = 'var(--txtcolor-secondary)';
}