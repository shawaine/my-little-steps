var contactBtn = document.querySelector(".contact-btn");
var modalBg = document.querySelector(".modal-bg");
var modalClose = document.querySelector(".modal-close");
var modalSend = document.querySelector(".modal-send");

// showing modal
contactBtn.addEventListener("click", function() {
  modalBg.classList.add("showModal");
});

// hiding modal
modalClose.addEventListener("click", function() {
  modalBg.classList.remove("showModal");
});
modalSend.addEventListener("click", function() {
  modalBg.classList.remove("showModal");
});
