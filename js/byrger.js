const burgerIcon = document.getElementById('burgerIcon');
const menuContent = document.getElementById('menuContent');

burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('open');
  menuContent.classList.toggle('open');
});
