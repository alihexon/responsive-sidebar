const closeButton = document.querySelector('.close-btn');
const closeIcon = document.querySelector('.js-icon');
const menu = document.querySelector('aside');
const userInfo = document.querySelector('.user-info');
const navigationParts = document.querySelectorAll('aside nav ul li');
const navigationTexts = document.querySelectorAll('aside nav ul li a');

function switchMenu() {
  menu.classList.toggle('closed');
  userInfo.classList.toggle('hidden');
  navigationTexts.forEach(navigationText => {
    navigationText.classList.toggle('hidden');
  });
  navigationParts.forEach(navigationPart => {
    navigationPart.classList.toggle('padding-fix');
  });
  
  setTimeout(() => {
    if (closeIcon.classList.contains('bx-chevron-left')) {
      closeIcon.classList.replace('bx-chevron-left', 'bx-chevron-right');
    } else {
      closeIcon.classList.replace('bx-chevron-right', 'bx-chevron-left');
    }
  }, 500)
}

function syncMenuSize() {
  if(window.innerWidth <= 1000) {
    switchMenu();
  }
}

syncMenuSize();

closeButton.addEventListener('click', switchMenu)