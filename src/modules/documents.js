import {animate} from "./helpers.js";

const documents = () => {
  const certificates = document.querySelectorAll('.document-inner');
  const overlay = document.querySelector('.overlay');

  let overlayDocument = null;

  certificates.forEach((certificate) => {
    certificate.addEventListener('click', (e) => {
      e.preventDefault();

      overlayDocument = document.createElement('img');
      overlayDocument.src = certificate.getAttribute('href');
      overlayDocument.classList.add('overlayDocument');
      overlay.appendChild(overlayDocument);

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
      if (overlayDocument) {
        overlayDocument.remove();
        overlayDocument = null;
      }
    }
  });
};

export default documents;