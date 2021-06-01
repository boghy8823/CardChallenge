/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageWrapper, CardsContainer } from "./Cards.styled";
import Button from "../../components/Button";
import AddCard from "./Add";
import server from "../../apis/server";
import { fetchCards, saveCard, editCard } from "../../actions";

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
    cardDetails.id = new Date().getTime();
    const { data } = await server.post("/card", cardDetails);

    dispatch(saveCard(data));
  }

  const onSaveEdit = async (cardDetails) => {
    const { data } = await server.patch("/card", cardDetails);

    dispatch(editCard(data));
  }

  const handleClick = (card) => {
    setSelectedCard(card);
    setEditModalOpen(!editModalOpen);
  }

  const handleClose = () => {
    setEditModalOpen(!editModalOpen);
    setSelectedCard(null);
  }
  return (
    <PageWrapper>
      {cards && (
        <>
          <CardsContainer>
            {cards.map((card) => (
              <p key={card.id} onClick={() => handleClick(card)}>
                Card number: {card.cardNumber} <br></br>
                Card Name: {card.cardHolderName}
              </p>
            ))}
          </CardsContainer>
        </>
      )}

      {selectedCard && (
        <AddCard
          onSubmit={onSaveEdit}
          closeModal={handleClose}
          isModalOpen={editModalOpen}
          cardDetails={selectedCard}
        />
      )}

      <AddCard
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
