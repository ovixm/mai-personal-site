//time and date
let timeAndDate = document.getElementById('timedate');

function timedate() {
  const now = new Date();
  const DateTimeFormat = new Intl.DateTimeFormat(undefined, {dateStyle: 'short', timeStyle: 'long'});

  timeAndDate.textContent = DateTimeFormat.format(now);

  requestAnimationFrame(timedate);
}

timedate();

//track open windows
var internetOpen = false;
var musicOpen = false;

const errorAudio = new Audio("sounds/erro.mp3");

function openApp(id) {

  if(id === "internet" && internetOpen) {
    errorAudio.play();
    openApp("error");
    return;
  }
  else if(id === "internet") {
      internetOpen = true;
  }
  
  if(id === "music" && musicOpen) {
    errorAudio.play();
    openApp("error");
    return;
  }
  else if(id === "music") {
      musicOpen = true;
  }

  const app = apps[id];
  const win = createWindow({
    title: app.title,
    content: app.render(),
    cloneContent: true
  });

  if(id === "internet") {
    renderInternetApp();
  }

}

harukiRoom = null;

function renderInternetApp() {

  home = document.getElementById("content1");
  projects = document.getElementById("content2");
  art = document.getElementById("content3");

  harukiRoom = document.getElementById("image");
  harukiRoom.style.cursor = "pointer";
  roomLarge = false;

  if(home && projects && art) {
    home.style.display = "block";
    projects.style.display = "none";
    art.style.display = "none";

    document.getElementById("tab1").addEventListener("change", () => {
      home.style.display = "block";
      projects.style.display = "none";
      art.style.display = "none";
    });

    document.getElementById("tab2").addEventListener("change", () => {
      home.style.display = "none";
      art.style.display = "none";
      projects.style.display = "block";
    });

    document.getElementById("tab3").addEventListener("change", () => {
      home.style.display = "none";
      art.style.display = "block";
      projects.style.display = "none";
    });

     harukiRoom.addEventListener("click", function() {
        if(roomLarge) {
          console.log("shrinking");
          harukiRoom.style.width = "28%";
          harukiRoom.style.height = "auto";
          roomLarge = false;
        } else {
          harukiRoom.style.width = "200%";
          harukiRoom.style.height = "auto";
          roomLarge = true;
        }
    });

  }
}



document.querySelectorAll(".application-icon").forEach(icon => {
  icon.onclick = () => openApp(icon.dataset.app);
});

 
