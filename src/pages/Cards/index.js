/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageWrapper, CardsContainer } from "./Cards.styled";
import Button from "../../components/Button";
import AddCard from "./Add";
import server from "../../apis/server";
import { fetchCards, saveCard } from "../../actions";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  
  const [selectedCard, setSelectedCard] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    const loadCardDetails = async () => {
      try {
        const { data } = await server.get("/cards");
        dispatch(fetchCards(data));
      } catch (err) {
        setError(err?.response?.data?.message);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    };
    loadCardDetails();
  }, [dispatch]);

  const onSubmit = async (cardDetails) => {
    
    await server.post("/card", cardDetails);

    dispatch(saveCard(cardDetails));
  }

  const handleClick = (card) => {
    setSelectedCard(card);
    setEditModalOpen(!editModalOpen);
  }

  return (
    <PageWrapper>
      {cards && (
        <>
          <CardsContainer>
            {cards.map((card, index) => (
              <p key={index} onClick={() => handleClick(card)}>
                Card number: {card.cardNumber}
              </p>
            ))}
          </CardsContainer>
        </>
      )}

      {selectedCard && (
        <AddCard
        key="mata"
          onSubmit={onSubmit}
          closeModal={() => setEditModalOpen(!editModalOpen)}
          isModalOpen={editModalOpen}
          cardDetails={selectedCard}
        />
      )}

      <AddCard
      key="tatu"
        onSubmit={onSubmit}
        closeModal={() => setModalOpen(!modalOpen)}
        isModalOpen={modalOpen}
        cardDetails={selectedCard}
      />
      <Button fullWidth disabled={loading} onClick={() => setModalOpen(!modalOpen)}>
        Add Card
      </Button>
      {error && <p>There has been an error</p>}
    </PageWrapper>
  );
};

Cards.propTypes = {};

export default Cards;
