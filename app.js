'use strict';
const page = document.querySelector('.page');

window.addEventListener('hashchange', () => {
  if (window.location.hash === '#menu') {
    document.body.classList.add('page__body--with-menu');
    page.body.classList.add('page__body--with-menu');

  } else {
    document.body.classList.remove('page__body--with-menu');
    page.body.classList.remove('page__body--with-menu');

  }
});

const menuToggle = document.querySelector('#menu-toggle');

menuToggle.addEventListener('click', function() {
  this.classList.toggle('active');
});
