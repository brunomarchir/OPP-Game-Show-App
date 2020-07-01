class Phrase {
  constructor(phrase) {
    this.phrase = phrase.toLowerCase();
  }
  addPhraseToDisplay() {
    const phraseDiv = document.querySelector("#phrase");
    const phraseUl = document.getElementsByTagName("ul")[0];
    const regex = /\s/;
    for (let i = 0; i < this.phrase.length; i++) {
      let phraseLi = document.createElement("li");
      if (regex.test(this.phrase[i])) {
        phraseLi.className = `space`;
      } else {
        phraseLi.className = `hide letter ${this.phrase[i]}`;
        phraseLi.innerHTML = this.phrase[i];
      }
      phraseUl.appendChild(phraseLi);
    }
  }
  checkLetter(letter) {
    if (this.phrase.includes(letter)) {
      return true;
    } else {
      return false;
    }
  }
  showMatchedLetter(letter) {
    const classLetter = document.querySelectorAll(`.${letter}`);
    for (let i = 0; i < classLetter.length; i++) {
      classLetter[i].classList.remove("hide");
      classLetter[i].classList.add("show");
    }
  }
}
