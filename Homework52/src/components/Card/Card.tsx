import React from 'react';

interface Props {
  rank: string;
  suit: string;
}

const Card: React.FC<Props> = ({rank, suit}) => {
  const suitMapping: Record<string, string> = {diams: '♦', hearts: '♥', clubs: '♣', spades: '♠'};
  const cardClasses: string = `card rank-${rank.toLowerCase()} ${suit}`
  return (
    <span className={cardClasses}>
      <span className="rank">{rank}</span>
      <span className="suit">{suitMapping[suit]}</span>
    </span>
  );
};

export default Card;