const timer = (deadline) => {
  const timerDays = document.querySelectorAll('.count-days span');
  const timerHours = document.querySelectorAll('.count-hours span');
  const timerMinutes = document.querySelectorAll('.count-minutes span');
  const timerSeconds = document.querySelectorAll('.count-seconds span');

  const addZero = (num) => {
    return num < 10 ? '0' + num : num;
  }

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor((timeRemaining / 60 / 60 / 24));
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    if (seconds < 0) {
      days = hours = minutes = seconds = 0;
    }

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();

    for (let i = 0; i < 2; i++) {
      timerDays[i].textContent = addZero(getTime.days);
      timerHours[i].textContent = addZero(getTime.hours);
      timerMinutes[i].textContent = addZero(getTime.minutes);
      timerSeconds[i].textContent = addZero(getTime.seconds);
    }

    if (getTime.timeRemaining <= 0) clearInterval(timerInterval);
  }
  const timerInterval = setInterval(updateClock, 1000);
  updateClock();
}

export default timer;