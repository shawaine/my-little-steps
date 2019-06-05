function performTyping() {
  const textList = ["codes", "software", "design", "website"];
  let textCounter = 0,
    counterIndex = 0,
    currentText = "",
    letters = "",
    mode = "type"; // type and backspacing

  typing();

  function typing() {
    if (textCounter === textList.length) {
      textCounter = 0;
    }
    currentText = textList[textCounter];
    if (mode === "type") {
      letters = currentText.slice(0, ++counterIndex);
    } else {
      letters = currentText.slice(0, --counterIndex);
    }
    document.querySelector(".typing").textContent = letters;
    if (letters === currentText) {
      mode = "backspace";
    }
    if (
      letters == ""
      // || letters === currentText //? comment this line for backspacing
    ) {
      textCounter++;
      counterIndex = 0;
      mode = "type";
    }
    setTimeout(typing, 400);
  }
}

performTyping();
