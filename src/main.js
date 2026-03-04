import modal from './modules/modal.js'
import scrollTop from './modules/scrollTop.js'


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