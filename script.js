const closeButton = document.querySelector('.close-btn');
const closeIcon = document.querySelector('.js-icon');
const menu = document.querySelector('aside');
const userInfo = document.querySelector('.user-info');
const navigationTexts = document.querySelectorAll('aside nav ul li a');

function switchMenu() {
  menu.classList.toggle('closed');
  userInfo.classList.toggle('hidden');
  navigationTexts.forEach(navigationText => {
    navigationText.classList.toggle('hidden');
  });
  
  setTimeout(() => {
    if (closeIcon.classList.contains('bx-chevron-left')) {
      closeIcon.classList.replace('bx-chevron-left', 'bx-chevron-right');
    } else {
      closeIcon.classList.replace('bx-chevron-right', 'bx-chevron-left');
    }
  }, 500)
}

closeButton.addEventListener('click', switchMenu)