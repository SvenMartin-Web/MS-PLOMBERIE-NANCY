window.addEventListener("scroll", () => {
  const nav = document.querySelector(".navbar");

  if(window.scrollY > 50){
    nav.style.backdropFilter = "blur(15px)";
  } else {
    nav.style.backdropFilter = "none";
  }
});
