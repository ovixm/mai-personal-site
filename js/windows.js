
let topZ = 1;

function createWindow({ title, content, cloneContent }) {
  const template = document.getElementById("window-template");
  const win = template.content.cloneNode(true).firstElementChild; 

  win.querySelector(".title").textContent = title;
  const container = win.querySelector(".window-content");

  if(cloneContent && content instanceof Node) {
    container.appendChild(content.cloneNode(true));
  }
  else
  {
    container.innerHTML = content;
  }

  win.style.zIndex = topZ++;

  win.addEventListener("mousedown", () => {
    win.style.zIndex= topZ++;
  });

  win.querySelector(".btn.close").onclick = () => {
    win.remove();

    if(win.querySelector(".title").textContent === "Music") {
      musicOpen = false;
    }
    else if(win.querySelector(".title").textContent === "~ my_personal_site.exe ~") {
      internetOpen = false;
    }
  };

  makeDrag(win);
  document.getElementById("desktop").appendChild(win);

  return win;
}

function createErrorWindow({ title, content, cloneContent }) {
  const template = document.getElementById("error-template");
  const errorWin = template.content.cloneNode(true).firstElementChild; 

  errorWin.querySelector(".title").textContent = title;
  const errorContainer = errorWin.querySelector(".error-text");

  if(cloneContent && content instanceof Node) {
    errorContainer.appendChild(content.cloneNode(true));
  }
  else
  {
    errorContainer.innerHTML = content;
  }

  errorWin.style.zIndex = topZ++;

  errorWin.addEventListener("mousedown", () => {
    errorWin.style.zIndex= topZ++;
  });

  errorWin.querySelector(".btn.close").onclick = () => {
    errorWin.remove();

    if(errorWin.querySelector(".title").textContent === "Music") {
      musicOpen = false;
    }
    else if(errorWin.querySelector(".title").textContent === "~ my_personal_site.exe ~") {
      internetOpen = false;
    }
  };

  errorWin.querySelector(".btn.okay").onclick = () => {
    errorWin.remove();

    if(errorWin.querySelector(".title").textContent === "Music") {
      musicOpen = false;
    }
    else if(errorWin.querySelector(".title").textContent === "~ my_personal_site.exe ~") {
      internetOpen = false;
    }
  };

  makeDrag(errorWin);
  document.getElementById("desktop").appendChild(errorWin);

  return errorWin;
}

function makeDrag(win) {
  let nextX = 0, nextY = 0, xCoord = 0, yCoord = 0;

  titlebar = win.querySelector('.title-bar');
  taskbar = document.querySelector('.taskbar')

  titlebar.addEventListener('pointerdown', mouseDown);

  function mouseDown(e) {
    e.preventDefault();

    xCoord = e.clientX;
    yCoord = e.clientY;

    document.addEventListener('pointermove', mouseMove);
    document.addEventListener('pointerup', mouseUp);
  }

  function mouseMove(e) {

    nextX = xCoord - e.clientX;
    nextY = yCoord - e.clientY;

    xCoord = e.clientX;
    yCoord = e.clientY;

    if(!(win.offsetTop - nextY < 0) && !(win.offsetTop + win.offsetHeight - nextY > window.innerHeight - taskbar.getBoundingClientRect().height))
    {
      win.style.top = win.offsetTop - nextY + 'px';
    }

    if(!(win.offsetLeft - nextX < 0) && !(win.offsetLeft + win.offsetWidth - nextX > window.innerWidth))
    {
      win.style.left = win.offsetLeft - nextX + 'px';
    }
  }

  function mouseUp(e) {
    document.removeEventListener('pointermove', mouseMove);
  }
}