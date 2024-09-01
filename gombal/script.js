function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  document.getElementById("heartContainer").appendChild(heart);

  setTimeout(() => {
    heart.style.display = "block";
    heart.style.animation =
      "fadeIn 2s ease-in-out, heartAnimation 1.5s ease-in-out infinite";
    heart.style.opacity = "1";
  }, 100);
}

function revealMessage() {
  const hiddenMessage = document.getElementById("hiddenMessage");

  hiddenMessage.style.display = "block";
  createHeart();

  setTimeout(() => {
    hiddenMessage.style.animation = "fadeIn 2s ease-in-out";
  }, 100);
}
