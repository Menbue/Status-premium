// БУРГЕР **********************************************************************

const btnBurger = document.querySelector('#burger');
const body = document.querySelector('.body');
btnBurger.addEventListener('click', function() {
    body.classList.toggle('menu-open');
});




// НАВИГАЦИЯ**********************************************************************
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (event) {
        event.preventDefault();
        const id = smoothLink.getAttribute('href');
        body.classList.remove('menu-open')
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



