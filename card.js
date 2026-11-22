document.addEventListener("DOMContentLoaded", () => {
  const envelope = document.getElementById("envelope") || document.querySelector(".envelope");
  const hint = document.getElementById("hint") || document.querySelector(".hint");
  const heartsContainer = document.getElementById("heartsContainer") || document.querySelector(".hearts-container");
  if (!envelope) return;
  function openLetter() {
    if (envelope.classList.contains("open")) return;
    envelope.classList.add("open");
    if (hint) hint.textContent = "Tap again or swipe down to close 💌";
    spawnHearts();
  }
  function closeLetter() {
    envelope.classList.remove("open");
    if (hint) hint.textContent = "Tap the envelope to open 💌";
    if (heartsContainer) heartsContainer.innerHTML = "";
  }
  function spawnHearts() {
    if (!heartsContainer) return;
    const hearts = ["❤️", "💖", "💕", "💗", "💓", "💘"];
    for (let i = 0; i < 25; i++) {
      setTimeout(() => {
        const heart = document.createElement("span");
        heart.className = "flying-heart";
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.left = (35 + Math.random() * 30) + "%";
        heart.style.fontSize = (18 + Math.random() * 22) + "px";
        heart.style.setProperty("--drift", (Math.random() * 160 - 80) + "px");
        heartsContainer.appendChild(heart);
        setTimeout(() => heart.remove(), 2600);
      }, i * 80);
    }
  }
  envelope.addEventListener("click", () => {
    if (envelope.classList.contains("open")) closeLetter();
    else openLetter();
  });
  let startY = 0;
  envelope.addEventListener("touchstart", (e) => { startY = e.touches[0].clientY; });
  envelope.addEventListener("touchend", (e) => {
    let diff = startY - e.changedTouches[0].clientY;
    if (diff > 50) openLetter();
    if (diff < -50) closeLetter();
  });
  const recipient = document.getElementById("recipient");
  const lineOne = document.getElementById("lineOne");
  const lineTwo = document.getElementById("lineTwo");
  const lineThree = document.getElementById("lineThree");
  const signature = document.getElementById("signature");
  if (recipient) recipient.textContent = "My Wifey";
  if (lineOne) lineOne.textContent = "Dear baby, I loveyou so much";
  if (lineTwo) lineTwo.textContent = "Please swm";
  if (lineThree) lineThree.textContent = "I'll be gentle.";
  if (signature) signature.textContent = "From: Samonte, Mark Andrew B.";
});
