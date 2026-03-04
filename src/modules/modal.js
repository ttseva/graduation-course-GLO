const modal = ({modalBlock, attr}) => {
  const modal = document.querySelector(modalBlock);
  const overlay = document.querySelector('.overlay');

  if (!modal) return;

  const openModal = (modal, attr) => {
    const modalBtn = document.querySelectorAll(`a[href="${attr}"]`);
    modalBtn.forEach(btn => {
      btn.addEventListener('click', e => {
        e.preventDefault();
        modal.style.display = 'block';
        overlay.style.display = 'block';
      })
    })
  }

  const closeModal = modal => {
    document.addEventListener('click', (e) => {
      const closeBtn = modal.querySelector('[title="Close"]');
      if (e.target === overlay || e.target === closeBtn) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
      }
    })
  }

  openModal(modal, attr);
  closeModal(modal);
}

export default modal