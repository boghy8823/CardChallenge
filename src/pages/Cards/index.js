/* eslint-disable no-debugger */
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageWrapper, CardsContainer } from "./Cards.styled";
import Button from "../../components/Button";
import EditCardDetails from "./Edit";
import AddCard from "./Add";
import server from "../../apis/server";
import { fetchCards, saveCard } from "../../actions";

const Cards = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);

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
  return (
    <PageWrapper>
      {cards && (
        <>
          <CardsContainer>
            {cards.map((card) => (
              <p key={card.id} onClick={() => setEditModalOpen(!editModalOpen)}>
                Card number: {card.cardNumber}
              </p>
            ))}
          </CardsContainer>
        </>
      )}

      {cards && (
        <EditCardDetails
          onSubmit={() => {}}
          closeModal={() => {}}
          isModalOpen={editModalOpen}
          cardDetails={cards[0]}
        />
      )}

      <AddCard
        onSubmit={onSubmit}
        closeModal={() => {}}
        isModalOpen={addModalOpen}
      />
      <Button fullWidth disabled={loading} onClick={() => setAddModalOpen(!addModalOpen)}>
        Add Card
      </Button>
      {error && <p>There has been an error</p>}
    </PageWrapper>
  );
};

Cards.propTypes = {};

export default Cards;
