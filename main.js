// БУРГЕР **********************************************************************
let btnBurger = document.querySelector('#burger');

btnBurger.addEventListener('click', function() {
    let body = document.querySelector('.body')
    body.classList.toggle('menu-open');
})




// НАВИГАЦИЯ**********************************************************************
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (event) {
        event.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};



