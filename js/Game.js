class Game {
  constructor() {
    this.missed = 0;
    this.phrases = [
      { phrase: "Dog" },
      { phrase: "Bobcat" },
      { phrase: "Mountain Lion" },
      { phrase: "Eagle" },
      { phrase: "Seahorse" },
    ];
    this.activePhrase = null;
  }
  handleInteraction(button) {
    button.disabled = true;
    if (this.activePhrase.checkLetter(button.innerHTML)) {
      button.className = "chosen";
      this.activePhrase.showMatchedLetter(button.innerHTML);
    } else {
      button.className = "wrong";
      this.removeLife();
    }
    if (document.getElementById("overlay").style.visibility == "hidden") {
      if (this.checkForWin()) {
        this.gameOver(this.checkForWin());
      }
    }
    //console.log(button);
  }
  createPhrases(phrase) {
    this.phrases.push(phrase);
  }
  getRandomPhrase() {
    let randomIndex = Math.floor(Math.random() * (this.phrases.length - 1));
    return this.phrases[randomIndex];
  }
  startGame() {
    document.getElementById("overlay").style.visibility = "hidden";
    this.activePhrase = this.getRandomPhrase();
    this.activePhrase = new Phrase(this.activePhrase.phrase);
    this.activePhrase.addPhraseToDisplay();
  }
  checkForWin(phrase) {
    const hidden = document.querySelectorAll(`.hide`);
    for (let i = 0; i < hidden.length; i++) {
      if (hidden.length > 0) {
        return false;
      }
    }
    return true;
  }
  removeLife() {
    document.querySelector('.main-container').style.background = '#f5785f';
    setTimeout(function() {document.querySelector('.main-container').style.background = '';}, 300);
    let heart = document.getElementsByTagName("img");
    heart[this.missed].src = "./images/lostHeart.png";
    this.missed += 1;
    if (this.missed === 5) {
      this.gameOver(false);
    }
    return this.missed;
  }
  gameOver(result) {
    document.getElementById("overlay").style.visibility = "";
    if (result === false) {
      document.getElementById("overlay").classList = 'lose';
      document.querySelector("#game-over-message").textContent =
        "You lost, try again!";
    } else {
      document.getElementById("overlay").classList = 'win';
      document.querySelector("#game-over-message").textContent =
        "You won, awesome!";
    }
  }
}
