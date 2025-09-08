const cherryContainer = document.getElementById("cherry-bg");

// emojis mix 🍒 + flowers
const icons = ["🍒", "🌸", "🌹", "💐"];

function createFloatingIcon() {
  const icon = document.createElement("div");
  icon.classList.add("floating");

  // random pick (cherry or flower)
  icon.textContent = icons[Math.floor(Math.random() * icons.length)];

  // random starting position at top
  icon.style.left = Math.random() * window.innerWidth + "px";
  icon.style.top = "-40px";

  // random size
  const size = Math.random() * 25 + 20; // 20px - 45px
  icon.style.fontSize = size + "px";

  // random duration
  const duration = Math.random() * 10 + 8; // 8s - 18s
  icon.style.animationDuration = duration + "s";

  cherryContainer.appendChild(icon);

  // remove after animation
  setTimeout(() => {
    icon.remove();
  }, duration * 1000);
}

// spawn every 400ms
setInterval(createFloatingIcon, 400);
