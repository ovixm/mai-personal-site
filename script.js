//time and date
let timeAndDate = document.getElementById('timedate');

function timedate() {
  const now = new Date();
  const DateTimeFormat = new Intl.DateTimeFormat(undefined, {dateStyle: 'short', timeStyle: 'long'});

  timeAndDate.textContent = DateTimeFormat.format(now);

  requestAnimationFrame(timedate);
}

timedate();

//windows and apps
let error = new Audio('sounds/erro.mp3');

redButton = document.querySelector('.btn.red');
yellowButton = document.querySelector('.btn.yellow');
greenButton = document.querySelector('.btn.green');
windowDiv = document.querySelector('.window');

internetApp = document.getElementById('internetApp');

redButton.addEventListener('click', () => {
  windowDiv.style.visibility = 'hidden';
});

internetApp.addEventListener('click', () =>{
  if (windowDiv.style.visibility == 'visible')
  {
    error.play();
  }
  else
  {
    windowDiv.style.visibility = 'visible';
  }
});

