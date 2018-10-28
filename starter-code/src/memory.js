class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    var counter = this.cards.length;
    while (counter > 0) {
      var index = Math.floor(Math.random() * counter);
      counter--;

      //we loop over the cards array and switch every card with another random one
      //(we need to save the value of card we are looping over in a temporary variable for a short period of time,
      //because its value is reassigned reassigned)
      var temp = this.cards[counter];
      this.cards[counter] = this.cards[index];
      this.cards[index] = temp;
    }
  }

  checkIfPair(firstCard, secondCard) {
    this.pairsClicked++;
    if (firstCard === secondCard) {
      this.pairsGuessed++;
    }
    return firstCard === secondCard;
  }

  isFinished() {
    if (this.pairsGuessed === this.cards.length / 2) {
      return true;
    }
    return false;
  }
}
