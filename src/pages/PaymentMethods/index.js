import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PageWrapper, CardsContainer } from "./PaymentMethods.styled";
import CreditCard from "../../components/CreditCard";
import Button from "../../components/Button";
import Typography from "../../components/Typography";
import PaymentMethodDetails from "./Components/PaymentMethodDetails";
import server from "../../apis/server";
import { fetchCards, saveCard, editCard } from "../../store/PaymentMethods";

const PaymentMethods = () => {
  const dispatch = useDispatch();
  const paymentMethods = useSelector((state) => state.cards);

  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
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

  const onSave = async (paymentMethodDetails) => {
    // The id would normally be generated by the API
    paymentMethodDetails.id = new Date().getTime();
    const { data } = await server.post("/card", paymentMethodDetails);

    dispatch(saveCard(data));
  };

  const onSaveEdit = async (paymentMethodDetails) => {
    const { data } = await server.patch("/card", paymentMethodDetails);

    dispatch(editCard(data));
  };

  const handleEditClick = (paymentMethod) => {
    setSelectedPaymentMethod(paymentMethod);
    setEditModalOpen(!editModalOpen);
  };

  const handleClose = () => {
    setEditModalOpen(!editModalOpen);
    setSelectedPaymentMethod(null);
  };

  return (
    <PageWrapper>
      {paymentMethods && (
        <CardsContainer>
          <Typography
            color="purple"
            variant="h2"
            as="h2"
            gutterBottom="m"
            gutterTop="m"
            fontWeight="800"
          >
            Your cards
          </Typography>
          <Typography
            color="blueDarken10"
            variant="body2"
            gutterBottom="xxl"
            gutterTop="s"
          >
            Add, edit or delete your cards any time
          </Typography>
          {paymentMethods.map((paymentMethod) => (
            <CreditCard
              key={paymentMethod.id}
              holderName={paymentMethod.holderName}
              cardNumber={paymentMethod.cardNumber}
              expirationDate={paymentMethod.expirationDate}
              cvc={paymentMethod.cvc}
              editCardDetails={() => handleEditClick(paymentMethod)}
              loading={loading}
              error={error}
              editable
            />
          ))}
        </CardsContainer>
      )}

      {selectedPaymentMethod && (
        <PaymentMethodDetails
          onSubmit={onSaveEdit}
          closeModal={handleClose}
          isModalOpen={editModalOpen}
          paymentMethodDetails={selectedPaymentMethod}
          inEditMode
        />
      )}

      <PaymentMethodDetails
        onSubmit={onSave}
        closeModal={() => setAddModalOpen(!addModalOpen)}
        isModalOpen={addModalOpen}
        paymentMethodDetails={selectedPaymentMethod}
      />
      <Button
        width="310px"
        height="57px"
        disabled={loading}
        onClick={() => setAddModalOpen(!addModalOpen)}
      >
        Add new card
      </Button>
      {error && <p>There has been an error</p>}
    </PageWrapper>
  );
};

export default PaymentMethods;
