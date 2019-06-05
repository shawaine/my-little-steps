function scrollAppear() {
  var aboutText = document.querySelector(".about-text");
  var aboutTextPosition = aboutText.getBoundingClientRect().top; // gets the distance of a element to top of a window
  var screenPosition = window.innerHeight / 2;
  if (aboutTextPosition < screenPosition) {
    aboutText.classList.add("about-text-appear");
  } else {
    aboutText.classList.remove("about-text-appear");
  }
}

window.addEventListener("scroll", scrollAppear);
