import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

/*
import Swiper, { Navigation, Pagination } from 'swiper';
const swiper = new Swiper();
*/

new WOW().init();

const modalReg = document.querySelector('#reg'),
    modalLogin = document.querySelector('#login'),
    modalForgot = document.querySelector('#forgot'),
    regBtn = document.querySelector('.nav-item--register'),
    loginBtn = document.querySelector('.nav-item--login'),
    closeModals = document.querySelectorAll('.modal-close__btn'),
    modalLinkLogin = document.querySelector('.modal-form__link--login'),
    modalLinkReg = document.querySelector('.modal-form__link--register'),
    modalLinkPassword = document.querySelector('.modal-form__link--password'),
    cryptoItemBtn =document.querySelectorAll('.crypto-item__btn'),
    body = document.querySelector('body');


const showReg = () => {
    modalReg.style.display = 'flex';
    modalReg.style.opacity = '1';
    if (body.style.overflow === '') {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '14px';
    } else {
        return;
    }
};

const showLogin = () => {
    modalLogin.style.display = 'flex';
    modalLogin.style.opacity = '1';
    if (body.style.overflow === '') {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '14px';
    } else {
        return;
    }
};

const showForgot = () => {
    modalForgot.style.display = 'flex';
    modalForgot.style.opacity = '1';
    if (body.style.overflow === '') {
        body.style.overflow = 'hidden';
        body.style.paddingRight = '14px';
    } else {
        return;
    }
};

const closeBtn = () => {
    closeModals.forEach(closeModal => {
        closeModal.addEventListener('click', (e) => {
            e.preventDefault();
            if (modalReg) {
                modalForgot.style.display = '';
                modalForgot.style.opacity = '0';
                modalReg.style.display = '';
                modalReg.style.opacity = '0';
                body.style.overflow = '';
                body.style.paddingRight = '0';
            }

            if (modalReg) {
                modalForgot.style.display = '';
                modalForgot.style.opacity = '0';
                modalLogin.style.display = '';
                modalLogin.style.opacity = '0';
                body.style.overflow = '';
                body.style.paddingRight = '0';
            }

            if (modalForgot) {
                modalReg.style.display = '';
                modalReg.style.opacity = '0';
                modalLogin.style.display = '';
                modalLogin.style.opacity = '0';
                body.style.overflow = '';
                body.style.paddingRight = '0';
            }
        });
    });
};

closeBtn();


regBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showReg();
});

loginBtn.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});


modalLinkReg.addEventListener('click', (e) => {
    e.preventDefault();
    modalForgot.style.display = '';
    modalForgot.style.opacity = '0';
    modalLogin.style.display = '';
    modalLogin.style.opacity = '0';
    showReg();
});


modalLinkLogin.addEventListener('click', (e) => {
    e.preventDefault();
    modalForgot.style.display = '';
    modalForgot.style.opacity = '0';
    modalReg.style.display = '';
    modalReg.style.opacity = '0';
    showLogin();
});

modalLinkPassword.addEventListener('click', (e) => {
    e.preventDefault();
    modalLogin.style.display = '';
    modalLogin.style.opacity = '0';
    modalReg.style.display = '';
    modalReg.style.opacity = '0';
    showForgot();
});

cryptoItemBtn.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
    });
});