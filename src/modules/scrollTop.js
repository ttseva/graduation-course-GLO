const scrollTop = () => {
  const scrollBtn = document.querySelector('.smooth-scroll');
  const firstSection = document.querySelector('.section')

  function throttle(func, timeout) {
    let timer = null
    return function perform(...args) {
      if (timer) return
      timer = setTimeout(() => {
        func(...args)
        timer = null
      }, timeout)
    }
  }

  window.addEventListener('scroll', throttle(() => {
    const blockPositionBottom = firstSection.getBoundingClientRect().bottom;
    if (blockPositionBottom <= 250) {
      scrollBtn.classList.add('smooth-scroll--visible');
    } else {
      scrollBtn.classList.remove('smooth-scroll--visible');
    }
  }, 100))

  scrollBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })
}

export default scrollTop;