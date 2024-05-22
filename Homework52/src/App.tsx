import './App.css';
import CardType from './components/Card/Card.tsx';
import {Card} from './lib/Card.ts';
import {CardDeck} from './lib/CardDeck.ts';
import {useState} from 'react';
import {PokerHand} from './lib/PokerHand.ts';

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardDeck, setCardDeck] = useState(new CardDeck());

  const getCards = (): void => {
    if (cardDeck.cardsCount() >= 5) {
      const drawnCards: Card[] = cardDeck.getCards(5);
      setCards(drawnCards);
      setCardDeck(cardDeck);
    }
  };

  const resetCards = (): void => {
    setCards([]);
    setCardDeck(new CardDeck());
  };

  return (
    <div className="playingCards faceImages">
      <div className="cardsNumber">Количество карт: {cardDeck.cardsLeft()}</div>
      <button className="btn" onClick={getCards}>Получите 5 карт</button>
      {cardDeck.cardsLeft() < 5 && <button className="btn resetCards" onClick={resetCards}>Начать сначала</button>}
      {cards.length > 0 &&
        <div className="result">Результат комбинаций: <strong>{new PokerHand(cards).getOutcome()}</strong></div>}
      <div>
        {cards
          .sort((a, b) => a.rank.localeCompare(b.rank))
          .map((card, index) => (
            <CardType key={index} rank={card.rank} suit={card.suit}/>
          ))}
      </div>
    </div>
  );
};

export default App;
