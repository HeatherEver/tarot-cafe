import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleCard } from "../server/tarotCards";

export const SingleCard = () => {
  const { cardId } = useParams();
  const [card, setCard] = useState();
  const [isloading, setIsLoading] = useState();

  useEffect(() => {
    setIsLoading(true);
    getSingleCard(cardId).then((card) => {
      setCard(card);
      setIsLoading(false);
    });
  }, [cardId]);


  if (isloading) return <p>...loading</p>;
  else if(!card) return <p>...loading</p>
  else
    return (
      <div className="single-card-page">
        <header className="single-card-header">
          <h1 className="single-card-title">{card.cardName}</h1>
        </header>
        <section className="single-container">
        <img src={card.img} alt={card.cardName} className="single-card-img item-img" />
        <p className="single-card-p item-ast">{card.astrology}</p>
        <p className="single-card-p item-desc">{card.description}</p>
        <p className="single-card-p item-num">{card.numerology}</p>
        </section>
      </div>
    );
};
