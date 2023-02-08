// БУРГЕР **********************************************************************
const btnBurger = document.querySelector('#burger');
const body = document.querySelector('.body');
btnBurger.addEventListener('click', function () {
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

//ФОРМА 1 - МОДАЛЬНОЕ ОКНО***********************************************************
const promoBtn = document.querySelector('#promo-btn');
const promoModal = document.querySelector('#modal__promo');
const promoForm = document.querySelector('#promo-form');
const btnClose = document.querySelector('#modal-btn-close');

promoForm.addEventListener('click', function (event) {
    event.preventDefault();
});

promoBtn.addEventListener('click', function (event) {
    event.preventDefault();
    promoModal.classList.remove('hidden');
    
    btnClose.addEventListener('click', function () {
        promoModal.classList.add('hidden');
    })
});

promoModal.addEventListener('click', function () {
    promoModal.classList.add('hidden');
});

promoModal.querySelector('.modal__window').addEventListener('click', function(event){
   event.stopPropagation();
});