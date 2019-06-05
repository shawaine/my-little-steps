function bgChanger() {
  if (this.scrollY > this.innerHeight / 2) {
    document.body.classList.add("bg-transition");
  } else {
    document.body.classList.remove("bg-transition");
  }
}

window.addEventListener("scroll", bgChanger);
