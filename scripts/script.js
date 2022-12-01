const images = document.querySelectorAll('img');
const right_btn = document.querySelector('#right');
const left_btn = document.querySelector('#left');

let i = 0;

right_btn.addEventListener('click', () => {
    i++;
    if (i >= images.length) {
        images[i-1].classList.remove('show');
        i = 0;
        images[i].classList.add('show');
    } else {
        images[i-1].classList.remove('show');
        images[i].classList.add('show');
    }
});

left_btn.addEventListener('click', () => {
    i--;
    if(i < 0) {
        images[i+1].classList.remove('show');
        i = images.length - 1;
        images[i].classList.add('show');
    } else {
        images[i+1].classList.remove('show');
        images[i].classList.add('show');
    }
});