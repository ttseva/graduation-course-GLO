const slider = (slidersArray) => {
  slidersArray.forEach(({sliderBlock, slideSelector, countLowest, countHighest}) => {
      const slider = document.getElementById(sliderBlock);
      const slides = slider.querySelectorAll(slideSelector);

      let currentIndex = 0;
      let slidesPerPage = 0;

      const showGroup = () => {
        slides.forEach((slide, index) => {
          if (index >= currentIndex && index < currentIndex + slidesPerPage) {
            slide.classList.remove('hidden');
          } else {
            slide.classList.add('hidden');
          }
        });
      };

      const updateSlidesPerPage = () => {
        slidesPerPage = window.innerWidth < 576 ? countLowest : countHighest;

        if (currentIndex >= slides.length) {
          currentIndex = 0;
        }
        showGroup();
      };


      slider.addEventListener('click', (e) => {
        e.preventDefault();

        if (e.target.closest('.arrow-right')) {
          currentIndex += slidesPerPage;
          if (currentIndex >= slides.length) currentIndex = 0;
        }

        if (e.target.closest('.arrow-left')) {
          currentIndex -= slidesPerPage;
          if (currentIndex < 0) currentIndex = slides.length - slidesPerPage;
        }

        showGroup();
      });

      updateSlidesPerPage();
      window.addEventListener('resize', updateSlidesPerPage);
    }
  )
}

export default slider;