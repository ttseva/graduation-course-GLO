import modal from './modules/modal.js'
import scrollTop from './modules/scrollTop.js'
import documents from './modules/documents.js'
import timer from './modules/timer.js'
import form from './modules/form.js'

const modalHeader = {
  modalBlock: '.header-modal',
  attr: '#callback'
};
const modalCallback = {
  modalBlock: '.services-modal',
  attr: '#application'
};

const modalOrder = {
  modalBlock: '.discount-modal',
  attr: '#order'
};

modal(modalHeader);
modal(modalCallback);
modal(modalOrder);

scrollTop();
documents();
timer('1 april 2026');
form();

// document.addEventListener('mouseover', (e) => {
//   console.log(e.target)
// })