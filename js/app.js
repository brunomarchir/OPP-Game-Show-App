let game;
let button = document.querySelector("#btn__reset");
let keys = document.querySelectorAll(".key");

button.addEventListener("click", (e) => {
  document.getElementsByTagName("ul")[0].innerHTML = "";
  for (let i = 0; i < keys.length; i++) {
    keys[i].className = "key";
    keys[i].disabled = false;
  }
  const images = document.querySelectorAll(".tries img");
  for (let i = 0; i < images.length; i++) {
    images[i].src = "./images/liveHeart.png";
  }
  game = new Game();
  game.startGame();
});

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("key")) {
    e.target.style.transform = ('');
    return game.handleInteraction(e.target);
  } else {
    e.target.style.transform = ('');
    return false;
  }
});

//makes the player able to play with the physical keyboard
document.addEventListener("keydown", (e) => {
  let keyboard = e.key;
  for (let i = 0; i < keys.length; i++) {
    if (keyboard === keys[i].innerHTML) {
      return game.handleInteraction(keys[i]);
    }
  }
});

//adds animation (expands) when hovering over the screen keyboard
document.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("key")) {
    return e.target.style.transform = ('scale(1.5) perspective(1px)');
  }
})

document.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("key")) {
    return e.target.style.transform = ('');
  }
})
