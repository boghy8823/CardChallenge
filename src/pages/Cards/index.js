import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageWrapper, CardsContainer } from "./Cards.styled";
import server from "../../apis/server";
import { fetchCards } from "../../actions";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.sessions);

  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCardDetails = async () => {
      try {
        const { data } = await server.get("/cards");

        dispatch(fetchCards(data));
      } catch (err) {
        setError(err?.response?.data?.message);
      }
    };
    loadCardDetails();
  }, [dispatch]);

  return (
    <PageWrapper>
      {cards && (
        <>
          <CardsContainer>
            {cards.map((card) => (
              <p key={card.id}>Card number: {card.cardNumber}</p>
            ))}
          </CardsContainer>
        </>
      )}
      {error && <p>There has been an error</p>}
    </PageWrapper>
  );
};

Cards.propTypes = {};

export default Cards;
