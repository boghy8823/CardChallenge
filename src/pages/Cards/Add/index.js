import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useFieldChange from "../../../hooks/useFieldChange";
import Input from "../../../components/Input";
import Button from "../../../components/Button";
import Modal from "../../../components/Modal";

const AddCard = ({ onSubmit, closeModal, isModalOpen }) => {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [cardholderName, setCardholderName] = useFieldChange({
    value: "",
    error: null,
  });
  const [cardNumber, setCardNumber] = useFieldChange({
    value: "",
    error: null,
  });
  const [expirationDate, setExpirationDate] = useFieldChange({
    value: "",
    error: null,
  });
  const [cvcCode, setCvcCode] = useFieldChange({ value: "", error: null });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const onSave = async () => {
    setLoading(true);
    try {
      const cardDetails = {cardHolderName: cardholderName.value, cardNumber: cardNumber.value,expirationDate:  expirationDate.value, cvc: cvcCode.value};
      onSubmit(cardDetails);
    } catch (err) {
      setError(err?.response?.data?.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setButtonDisabled(true);
    if(!cardholderName.error && !cardNumber.error && !expirationDate.error && !cvcCode.error && 
      cardholderName.value.length > 0 && cardNumber.value.length > 0 && expirationDate.value.length > 0 && cvcCode.value.length > 0) {
      setButtonDisabled(false);
    }
  }, [cardholderName, cardNumber, expirationDate, cvcCode]);


  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      maxWidth="392px"
      borderRadius="32px"
    >
      <form onSubmit={onSave}>
        <Input
          type="text"
          name="cardholdername"
          id="cardholdername"
          onChange={setCardholderName}
          error={cardholderName.error}
          label="Name in card"
          value={cardholderName.value}
        />
        <Input
          type="text"
          name="cardnumber"
          id="cardnumber"
          onChange={setCardNumber}
          label="Card number"
          value={cardNumber.value}
          error={cardNumber.error}
        />
        <Input
          type="text"
          name="expirationdate"
          id="expirationdate"
          onChange={setExpirationDate}
          label="Expiry date"
          value={expirationDate.value}
          error={expirationDate.error}
        />
        <Input
          type="text"
          name="cvccode"
          id="cvccode"
          onChange={setCvcCode}
          label="CVC (Security code)"
          value={cvcCode.value}
          error={cvcCode.error}
        />
        <Button fullWidth loading={loading} type="submit" disabled={loading || buttonDisabled}>
          Confirm
        </Button>
      </form>

      {error && <p>There has been an error</p>}
      {loading && <p>Loading...</p>}
    </Modal>
  );
};

AddCard.propTypes = {
  cardDetails: PropTypes.shape({
    cardHolderName: PropTypes.string,
    cardNumber: PropTypes.string,
    expirationDate: PropTypes.string,
    cvc: PropTypes.string,
  }).isRequired,
  closeModal: PropTypes.func,
  onSubmit: PropTypes.func,
  isModalOpen: PropTypes.bool,
};

AddCard.defaultProps = {
  closeModal: () => {},
  onSubmit: () => {},
  isModalOpen: false,
};

export default AddCard;
