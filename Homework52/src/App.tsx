import './App.css';
import CardType from './components/Card/Card.tsx';
import {Card} from './lib/Card.ts';

import {CardDeck} from './lib/CardDeck.ts';
import {useState} from 'react';

const App = () => {
  const [cards, setCards] = useState<Card[]>([]);
  const [cardDeck, setCardDeck] = useState(new CardDeck());

  const getCards = () => {
    if (cardDeck.cardsCount() >= 5) {
      const drawnCards = cardDeck.getCards(5);
      setCards(drawnCards);
      setCardDeck(cardDeck);
    }
  };

  return (
    <>
      <div className="playingCards faceImages">
        <div>Card count: {cardDeck.cardsLeft()}</div>
        <button onClick={getCards}>Get 5 cards</button>
        <div>
          {cards.map((card, index) => (
            <CardType key={index} rank={card.rank} suit={card.suit}/>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
