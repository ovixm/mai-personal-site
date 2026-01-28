//time and date
let timeAndDate = document.getElementById('timedate');

function timedate() {
  const now = new Date();
  const DateTimeFormat = new Intl.DateTimeFormat(undefined, {dateStyle: 'short', timeStyle: 'long'});

  timeAndDate.textContent = DateTimeFormat.format(now);

  requestAnimationFrame(timedate);
}

timedate();


function openApp(id) {
  const app = apps[id];
  const win = createWindow({
    title: app.title,
    content: app.render()
  });

  app.onMount?.(win);
}

document.querySelectorAll(".application-icon").forEach(icon => {
  icon.onclick = () => openApp(icon.dataset.app);
});

