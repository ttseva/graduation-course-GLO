import {animate} from "./helpers.js";

const documents = () => {
  const certificates = document.querySelectorAll('.document-inner');
  const overlay = document.querySelector('.overlay');

  const overlayDocument = document.createElement('img');
  overlayDocument.classList.add('overlayDocument');
  overlay.appendChild(overlayDocument);

  certificates.forEach((certificate) => {
    certificate.addEventListener('click', (e) => {
      e.preventDefault();

      overlayDocument.src = certificate.getAttribute('href');
      overlay.style.display = 'block';

      animate({
        duration: 250,
        timing(timeFraction) {
          return timeFraction;
        },
        draw(progress) {
          overlayDocument.style.transform = `translateX(0%) translateY(${(1 - progress) * -100}%`
        }
      });
    });
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      overlayDocument.src = '';
    }
  });
};

export default documents;