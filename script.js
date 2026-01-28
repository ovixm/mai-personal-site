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

const redButton = document.querySelector('.btn.red');
const yellowButton = document.querySelector('.btn.yellow');
const greenButton = document.querySelector('.btn.green');
const windowDiv = document.querySelector('.window');

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

//click and drag
let nextX = 0, nextY = 0, xCoord = 0, yCoord = 0;

mainWindow = document.getElementById('mainWindow');
titlebar = document.querySelector('.title-bar');
taskbar = document.querySelector('.taskbar')

titlebar.addEventListener('mousedown' || 'touchstart', mouseDown);

function mouseDown(e) {
   e.preventDefault();

  xCoord = e.clientX;
  yCoord = e.clientY;

    console.log(taskbar.getBoundingClientRect().height);

  document.addEventListener('mousemove' || 'touchmove', mouseMove);
  document.addEventListener('mouseup' || 'touchend', mouseUp);
}

function mouseMove(e) {

  nextX = xCoord - e.clientX;
  nextY = yCoord - e.clientY;

  xCoord = e.clientX;
  yCoord = e.clientY;

  if(!(mainWindow.offsetTop - nextY < 0) && !(mainWindow.offsetTop + mainWindow.offsetHeight - nextY > window.innerHeight - taskbar.getBoundingClientRect().height))
  {
    mainWindow.style.top = mainWindow.offsetTop - nextY + 'px';
  }

  if(!(mainWindow.offsetLeft - nextX < 0) && !(mainWindow.offsetLeft + mainWindow.offsetWidth - nextX > window.innerWidth))
  {
    mainWindow.style.left = mainWindow.offsetLeft - nextX + 'px';
  }
}

function mouseUp(e) {
  document.removeEventListener('mousemove' || 'touchmove', mouseMove);
}

