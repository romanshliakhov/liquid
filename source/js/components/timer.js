document.addEventListener('DOMContentLoaded', () => {
	const newYear = new Date('jan 01 2024 00:00:00'); // пишем тут дату

  const timer = document.querySelectorAll('.timer');

  if(timer) {
    timer.forEach(function (item) {
      const timeCount = () => {
        let now = new Date();
        let leftUntil = newYear - now;

        const daysVal = item.querySelector('.timer__count-days');
        const hoursVal = item.querySelector('.timer__count-hours');
        const minutesVal = item.querySelector('.timer__count-minutes');

        let days = Math.floor(leftUntil / 1000 / 60 / 60 / 24);
        let hours = Math.floor(leftUntil / 1000 / 60 / 60) % 24;
        let minutes = Math.floor(leftUntil / 1000 / 60) % 60;

        if (leftUntil < 0 ) {
          days = 0;
          hours = 0;
          minutes = 0;
        } else {
          daysVal.textContent = days;
          hoursVal.textContent = ('0' + hours).slice(-2);
          minutesVal.textContent = ('0' + minutes).slice(-2);
        }
      };

      timeCount();
      setInterval(timeCount, 1000);
    })
  }
});
