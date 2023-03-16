const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav__menu');
const headline = document.querySelector('#headline');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navMenu.classList.toggle('active');
  headline.classList.toggle('active');
});

navMenu.addEventListener('click', () => {
  hamburger.classList.remove('active');
  navMenu.classList.remove('active');
  headline.classList.remove('active');
});