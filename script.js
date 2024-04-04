const closeButton = document.querySelector('.close-btn')
const closeIcon = document.querySelector('.js-icon')
const menu = document.querySelector('aside')

function switchMenu() {
  menu.classList.toggle('closed')
  
  if (closeIcon.classList.contains('bx-chevron-left')) {
    closeIcon.classList.replace('bx-chevron-left', 'bx-chevron-right');
  } else {
    closeIcon.classList.replace('bx-chevron-right', 'bx-chevron-left');
  }
}

closeButton.addEventListener('click', switchMenu)