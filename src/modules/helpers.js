function animate({timing, draw, duration}) {
  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }
  });
}

function validate(inputs) {
  inputs.forEach(input => {
    input.addEventListener('input', (e) => {
      if (input.inputMode === 'numeric') {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');
      } else if (input.type === 'text') {
        e.target.value = e.target.value.replace(/[^а-яА-ЯёЁa-zA-Z]+/g, '');
      } else if (input.type === 'tel') {
        e.target.value = e.target.value.replace(/[^0-9]/g, '').slice(0, 16);

        if (e.target.value.length > 0) {
          e.target.value = '+' + e.target.value;
        } else {
          e.target.value = '';
        }
      }
    })
  })
}


export {animate, validate};