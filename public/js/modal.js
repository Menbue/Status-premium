//ФОРМА 3 - МОДАЛЬНОЕ ОКНО***********************************************************

const promoBtn = document.querySelector('#promotion-btn');
const promoModal = document.querySelector('#modal__promo');
const promoForm = document.querySelector('#promotion-form');
const btnClose = document.querySelector('#modal-btn-close');

promoForm.addEventListener('submit', function (event) {
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
