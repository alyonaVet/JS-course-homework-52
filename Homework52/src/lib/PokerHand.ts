import {Card} from './Card.ts';

export class PokerHand {
  cards: Card[] = [];

  constructor(cards: Card[]) {
    this.cards = cards;
  }

  getOutcome(): string {

    const suitSet: Set<string> = new Set(this.cards.map((card) => card.suit));

    const counter: Record<string, number> = {};

    this.cards.forEach(card => {
      if (counter[card.rank]) {
        counter[card.rank] += 1;
      } else {
        counter[card.rank] = 1;
      }
    });

    let numberOfPairs: number = 0;
    Object.values(counter).forEach(val => {
      if (val ===2) {
        numberOfPairs += 1;
      }
    })

    if (suitSet.size === 1) {
      return `Флэш`;
    }
    if (Object.values(counter).includes(3)) {
      return `Тройка`;
    }
    if (Object.values(counter).includes(4)) {
      return `Каре`;
    }
    if (numberOfPairs === 2) {
      return `Две пары`
    }
    if (numberOfPairs === 1) {
      return `Одна пара`;
    }
    return `Старшая карта`;
  }
}