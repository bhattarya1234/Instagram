const summon = (count = 10) => {
  const container = document.getElementById("main");
  if (!container) return console.warn("No main container. You failed."); // Roast level: expert

  for (let i = 0; i < count; i++) {
    const img = document.createElement("img");
    img.classList.add("image");
    img.src = `https://picsum.photos/1080/1080?random=${Math.floor(Math.random() * 10000)}`;
    container.appendChild(img);
  }
};

let timeOut;

window.addEventListener("scroll", () => {

  clearTimeout(timeOut);
  timeOut = setTimeout(() => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 500) {
      summon();
    }
  }, 250);
});

summon(); // initial summon
