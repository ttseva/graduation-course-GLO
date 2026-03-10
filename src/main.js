import modal from './modules/modal.js'
import scrollTop from './modules/scrollTop.js'
import documents from './modules/documents.js'
import timer from './modules/timer.js'
import form from './modules/form.js'
import calculator from './modules/calculator.js'
import sliders from './modules/sliders.js'

const modals = [
  {
    modalBlock: '.header-modal',
    attr: '#callback'
  },
  {
    modalBlock: '.services-modal',
    attr: '#application'
  },
  {
    modalBlock: '.discount-modal',
    attr: '#order'
  }
]

const forms = ['application', 'callback', 'order', 'order_1', 'order_2']
const discountDueTime = '1 april 2026'


if (document.querySelector('body').classList.contains('balkony')) calculator();

modal(modals);
scrollTop();
documents();
timer(discountDueTime);
form(forms);
sliders();


// document.addEventListener('mouseover', (e) => {
//   console.log(e.target)
// })