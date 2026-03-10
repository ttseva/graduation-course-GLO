import modal from './modules/modal.js'
import scrollTop from './modules/scrollTop.js'
import documents from './modules/documents.js'
import timer from './modules/timer.js'
import form from './modules/form.js'
import calculator from './modules/calculator.js'
import slider from './modules/slider.js'

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

const sliders = [
  {
    sliderBlock: 'benefits',
    slideSelector: '.benefits__item',
    countLowest: 1,
    countHighest: 3
  },
  {
    sliderBlock: 'services',
    slideSelector: '.service-block',
    countLowest: 1,
    countHighest: 2
  }
];

const forms = ['application', 'callback', 'order', 'order_1', 'order_2']
const discountDueTime = '1 april 2026'


scrollTop();
modal(modals);
documents();
timer(discountDueTime);
form(forms);
slider(sliders);

if (document.querySelector('body').classList.contains('balkony')) calculator();