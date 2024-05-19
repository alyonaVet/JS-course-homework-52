import './App.css';
import Card from './components/Card/Card.tsx';

function App() {
  const rank: string[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suit: string[] = ['diams', 'hearts', 'clubs', 'spades'];

  const getCards = (arr1: string[], arr2: string[]) => {
    const card: [string, string][] = [];
    for (const el1 of arr1) {
      for (const el2 of arr2) {
        card.push([el1, el2]);
      }
    }

    return card;
  };

  const cards = getCards(rank, suit);

  return (
    <>
        {cards.map((card, index) => {
          return <Card key={index} rank={card[0]} suit={card[1]}/>;
        })}
    </>
  );
}

export default App;
