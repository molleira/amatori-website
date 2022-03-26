const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

// const home = document.querySelector('.home');
// const mixes = document.querySelector('.mixes');
// const bio = document.querySelector('.bio');

// home.addEventListener('click', () => {
//   home.classList.add('active');
//   mixes.classList.remove('active');
//   bio.classList.remove('active');
// })

// mixes.addEventListener('click', () => {
//   dhome.classList.remove('active');
//   mixes.classList.add('active');
//   bio.classList.remove('active');
// })

// bio.addEventListener('click', () => {
//   home.classList.remove('active');
//   mixes.classList.remove('active');
//   bio.classList.add('active');;
// })