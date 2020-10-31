// let newGame = MemoryGame ();

class MemoryGame {
  constructor(cards){
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
  }

  shuffleCards() {
    if (this.cards === undefined) {
      return undefined;
    };
    let newCards = [];
    const length = this.cards.length;
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random()* this.cards.length);
      newCards.push(this.cards[randomIndex]);
      this.cards.splice(randomIndex, 1);
    };
    this.cards = newCards;
  }

  checkIfPair(card1, card2) {
    if (card1 === card2) {
      this.pairsGuessed += 1;
      return true;
    } else {
      this.pairsClicked += 1;
      return false
    }
  }
  isFinished() {
    if (this.pairsGuessed < this.cards.length / 2) {
      return false;
    } else {
      return true;
    }
  }
}