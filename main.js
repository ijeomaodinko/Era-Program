const hamburger = document.getElementById('pop');
const closebutton = document.querySelector('.close');
const popupWindow = document.getElementById('about');

hamburger.addEventListener('click', () => {
  popupWindow.classList.toggle('hidden');
  hamburger.classList.add('active');
});

closebutton.addEventListener('click', () => {
  popupWindow.classList.toggle('hidden');
  hamburger.classList.remove('active');
});
