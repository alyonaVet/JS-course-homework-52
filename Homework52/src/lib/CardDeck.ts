import {Card} from './Card.ts';

export class CardDeck {
  cardDeck: Card[] = [];
  ranks: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  suits: string[] = ['diams', 'hearts', 'clubs', 'spades'];

  constructor() {
    for (const suit of this.suits) {
      for (const rank of this.ranks) {
        this.cardDeck.push(new Card(rank, suit));
      }
    }
  }

  getCard(): Card | null {
    if (this.cardDeck.length === 0) {
      return null;
    }
    const selectingRandomCard = Math.floor(Math.random() * this.cardDeck.length);
    const selectingCard = this.cardDeck.splice(selectingRandomCard, 1);
    return selectingCard[0];
  }

  getCards(howMany: number): Card[] {
    const howManyCards: Card[] = [];
    for (let i = 0; i < howMany; i++) {
      const selectingCard = this.getCard();
      if (!selectingCard) {
        break;
      } else {
        howManyCards.push(selectingCard);
      }
    }
    return howManyCards;
  }
  cardsCount(): number {
    return this.cardDeck.length;
  }

  cardsLeft(): number {
    return this.cardsCount();
  }
}