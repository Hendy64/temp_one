let nav = document.querySelectorAll('nav .fa');
let shown = document.querySelectorAll('.hidden');
nav[0].addEventListener('click', function(e){
  shown[0].classList.add('shown');
  shown[1].classList.remove('shown');
  document.querySelector('.close').classList.add('shown');
});
document.querySelector('.search input').addEventListener('click', function(e){
  document.querySelector('.search input').classList.add('typing');
});
nav[1].addEventListener('click', function(e){
  shown[1].classList.add('shown');
  shown[0].classList.remove('shown');
  document.querySelector('.close').classList.add('shown');
});
document.querySelector('.close').addEventListener('click', function(e){
  shown[0].classList.remove('shown');
  shown[1].classList.remove('shown');
  document.querySelector('.close').classList.remove('shown');
  document.querySelector('.search input').classList.remove('typing');
});